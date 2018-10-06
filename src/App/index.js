import * as database from "../database/";
import localization, {
  addUpdatee as addLocalizationUpdatee,
} from "../localization";
import ConfirmDialog from "../ConfirmDialog";
import Container from "../Container";
import EmptyWorkspace from "../EmptyWorkspace";
import Header from "../Header";
import React from "react";
import Workspace from "../Workspace";
import atthemeEditorApi from "attheme-editor-api/browser";
import parseTheme from "../parseTheme";
import readFile from "../readFile";

const HANDLE_SCROLL_INTERVAL = 200;

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      workplaces: [],
      activeTab: null,
      confirmClosing: false,
    };
  }

  // we don't need to update the whole dom just to scroll
  doHandleScroll = true;

  doScrollTo = 0;

  activeTab = React.createRef();

  container = React.createRef();

  componentDidMount = async () => {
    const tabs = database.getTabs();
    const activeTab = database.getActiveTab();

    this.setState({
      workplaces: await tabs,
      activeTab: await activeTab,
    });

    addLocalizationUpdatee(() => this.forceUpdate());

    document.body.addEventListener(`dragover`, (e) => e.preventDefault());
    document.body.addEventListener(`drop`, (event) => {
      event.preventDefault();

      const { files } = event.dataTransfer;

      Array.prototype.forEach.call(this, files, async (file) => {
        if (
          !file.name.endsWith(`.attheme`)
          && !file.name.endsWith(`.attheme-editor`)
        ) {
          return;
        }

        const content = await readFile(file);
        const theme = parseTheme({
          file: content,
          filename: file.name,
        });

        this.handleTheme(theme);
      });
    });

    if (
      `theme` in localStorage
      && `themeName` in localStorage
      && `palette` in localStorage
    ) {
      const theme = {
        variables: JSON.parse(localStorage.theme),
        name: localStorage.themeName,
        palette: JSON.parse(localStorage.palette),
      };

      localStorage.removeItem(`theme`);
      localStorage.removeItem(`themeName`);
      localStorage.removeItem(`palette`);

      if (`image` in localStorage) {
        theme.wallpaper = localStorage.image;
        localStorage.removeItem(`image`);
      }

      this.handleTheme(theme);
    }

    const themeId = new URLSearchParams(window.location.search).get(`themeId`);

    if (themeId) {
      window.history.replaceState(
        null,
        document.title,
        window.location.origin + window.location.pathname,
      );

      const { name, theme } = await atthemeEditorApi.downloadTheme(themeId);

      const downloadedTheme = {
        variables: theme,
        name,
        palette: [],
      };

      if (theme[Symbol.for(`image`)]) {
        downloadedTheme.wallpaper = btoa(theme[Symbol.for(`image`)]);
      }

      this.handleTheme(downloadedTheme);
    }
  };

  handleTheme = async (theme) => {
    const themeId = await database.createTheme(theme);
    const workplaces = [...this.state.workplaces, themeId];

    database.updateWorkplaces(workplaces);
    database.updateActiveTab(themeId);

    this.setState({
      workplaces,
      activeTab: themeId,
    });
  };

  handleActiveTabChange = (newActiveTab) => {
    database.updateActiveTab(newActiveTab);

    this.setState({
      activeTab: newActiveTab,
    });
  };

  handleNameChange = (name) => this.activeTab.current.updateTitle(name);

  handleLogoClick = () => {
    const { doScrollTo } = this;

    this.doScrollTo = this.container.current.scrollTop;
    this.doHandleScroll = false;

    this.container.current.scrollTo({
      top: doScrollTo,
      behavior: `smooth`,
    });
  };

  handleContainerScroll = () => {
    if (this.doHandleScroll) {
      this.doScrollTo = 0;
    } else {
      // Expecting smooth scroll so we'll catch scroll events by browser in a
      // while. We don't need them, so we ignore them. Anyway, even if it won't
      // scroll smoothly, we'll start thinking that the user is scrolling in
      // 200 ms.
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.doHandleScroll = true;
        clearTimeout(this.timer);
        this.timer = null;
      }, HANDLE_SCROLL_INTERVAL);
    }
  };

  handleClosePrompt = () => this.setState({
    confirmClosing: true,
  });

  handleCloseDismissed = () => this.setState({
    confirmClosing: false,
  });

  handleCloseConfirmed = () => {
    this.setState({
      confirmClosing: false,
    });

    const workplaces = [...this.state.workplaces];
    const currentIndex = workplaces.indexOf(this.state.activeTab);

    workplaces.splice(currentIndex, 1);

    const newActiveTabIndex = Math.min(currentIndex, workplaces.length - 1);
    const activeTab = workplaces[newActiveTabIndex] || -1;

    database.deleteTheme(this.state.activeTab);
    database.updateWorkplaces(workplaces);
    database.updateActiveTab(activeTab);

    this.setState({
      workplaces,
      activeTab,
    });
  };

  render() {
    let workspace = null;

    if (this.state.activeTab === -1) {
      workspace = <EmptyWorkspace onTheme={this.handleTheme}/>;
    } else if (this.state.activeTab !== null) {
      workspace = (
        <Workspace
          themeId={this.state.activeTab}
          onNameChange={this.handleNameChange}
          onClosePrompt={this.handleClosePrompt}
          isSearchHotkeyEnabled={!this.state.confirmClosing}
        />
      );
    }

    return <>
      <Header
        workplaces={this.state.workplaces}
        activeTab={this.state.activeTab}
        onActiveTabChange={this.handleActiveTabChange}
        activeTabRef={this.activeTab}
        onLogoClick={this.handleLogoClick}
      />
      <Container
        containerRef={this.container}
        onScroll={this.handleContainerScroll}
      >
        {workspace}
      </Container>
      {this.state.confirmClosing && (
        <ConfirmDialog
          onDismissed={this.handleCloseDismissed}
          onConfirmed={this.handleCloseConfirmed}
          isDangerous={true}
        >
          {localization.workspace_closeThemePrompt()}
        </ConfirmDialog>
      )}
    </>;
  }
}
