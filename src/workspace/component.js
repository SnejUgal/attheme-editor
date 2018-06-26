import "./styles.scss";

import * as database from "../database/api";
import { allVariablesAmount, defaultValues } from "../attheme-variables";
import Attheme from "attheme-js";
import Button from "../button/component";
import Buttons from "../buttons/component";
import Color from "../color";
import Field from "../field/component";
import Hint from "../hint/component";
import PaletteEditor from "../palette-editor/component";
import PropTypes from "prop-types";
import React from "react";
import ScriptRunner from "../script-runner/component";
import Spinner from "../spinner/component";
import VariableEditor from "../variable-editor/component";
import Variables from "../variables/component";
import download from "../download";
import localization from "../localization";
import prepareTheme from "../prepare-theme";
import uploadTheme from "../upload-theme";

class Workplace extends React.Component {
  static propTypes = {
    themeId: PropTypes.number.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onClosePrompt: PropTypes.func.isRequired,
    isSearchHotkeyEnabled: PropTypes.bool,
  }

  state = {
    theme: null,
    editingVariable: null,
    color: null,
    showScriptRunner: false,
    isSearchHotkeyEnabled: true,
    isEditingPalette: false,
    wasEditingPalette: false,
  };

  componentDidMount = async () => this.setState({
    theme: await database.getTheme(this.props.themeId),
  });

  componentDidUpdate = async (prevProps) => {
    if (prevProps.themeId !== this.props.themeId) {
      this.setState({
        theme: await database.getTheme(this.props.themeId),
      });
    }
  }

  handleNameFieldChange = (event) => {
    const name = event.target.value;
    const theme = {
      ...this.state.theme,
      name,
    };

    this.setState({
      theme,
    });

    this.props.onNameChange(name);
  }

  handleNameFieldBlur = (event) => {
    let name = event.target.value.trim();

    if (!name) {
      name = localization.theme_defaultName();
    }

    const theme = {
      ...this.state.theme,
      name,
    };

    this.setState({
      theme,
    });
    this.props.onNameChange(name);

    database.updateTheme(this.props.themeId, theme);
  }

  handleNameFieldEnter = ({ target }) => target.blur();

  downloadThemeFile = () => {
    const { theme } = prepareTheme(this.state.theme);
    const content = Attheme.asText(theme);
    const name = `${this.state.theme.name}.attheme`;

    download({
      content,
      name,
    });
  }

  downloadThemeViaTelegram = async () => {
    const themeId = await uploadTheme(this.state.theme);
    const tgLink = `tg://resolve?domain=atthemeeditorbot&start=${themeId}`;

    window.location.href = tgLink;
  }

  createPreview = async () => {
    this.setState({
      shouldShowCreatePreviewSpinner: true,
    });

    try {
      const themeId = await uploadTheme(this.state.theme);
      const tgLink = `tg://resolve?domain=themepreviewbot&start=${themeId}`;

      window.location.href = tgLink;
    } catch (e) {
      /** @todo */
    }

    this.setState({
      shouldShowCreatePreviewSpinner: false,
    });
  }

  testTheme = async () => {
    this.setState({
      shouldShowTestThemeSpinner: true,
    });

    try {
      const themeId = await uploadTheme(this.state.theme);
      const tgLink = `tg://resolve?domain=testatthemebot&start=${themeId}`;

      window.location.href = tgLink;
    } catch (e) {
      /** @todo */
    }

    this.setState({
      shouldShowTestThemeSpinner: false,
    });
  }

  downloadWorkspace = () => download({
    content: JSON.stringify(this.state.theme),
    name: `${this.state.theme.name}.attheme-editor`,
  })

  handleVariableEditStart = (variable) => {
    this.setState({
      editingVariable: variable,
      color: this.state.theme.variables[variable],
    });
  }

  handleVariableEditCancel = () => this.setState({
    editingVariable: null,
    wasEditingPalette: null,
    color: null,
  })

  handleVariableEditSave = (value) => {
    const variable = this.state.editingVariable;

    this.setState({
      editingVariable: null,
    });

    let theme;

    if (typeof value === `object`) {
      const variables = {
        ...this.state.theme.variables,
        [variable]: value,
      };

      theme = {
        ...this.state.theme,
        variables,
      };

      if (variable === `chat_wallpaper`) {
        delete theme.wallpaper;
      }
    } else {
      const variables = {
        ...this.state.theme.variables,
      };

      delete variables.chat_wallpaper;

      theme = {
        ...this.state.theme,
        variables,
        wallpaper: value,
      };
    }

    this.setState({
      wasEditingPalette: false,
      theme,
    });

    database.updateTheme(this.props.themeId, theme);
  }

  handleNewVariable = (variable) => this.setState({
    editingVariable: variable,
    color: defaultValues[variable],
  })

  handleVariableDelete = () => {
    const variables = {
      ...this.state.theme.variables,
    };

    delete variables[this.state.editingVariable];

    const theme = {
      ...this.state.theme,
      variables,
    };

    if (this.state.editingVariable === `chat_wallpaper`) {
      delete theme.wallpaper;
    }

    this.setState({
      editingVariable: null,
      wasEditingPalette: false,
      theme,
    });

    database.updateTheme(this.props.themeId, theme);
  }

  handleRunScriptButtonClick = () => this.setState({
    showScriptRunner: true,
  });

  handleScriptRunnerClose = () => this.setState({
    showScriptRunner: false,
  });

  handleThemeChange = (theme) => {
    this.setState({
      theme,
    });

    database.updateTheme(this.props.themeId, theme);
  };

  handleCustomPaletteColorAdd = (color) => {
    const palette = [...this.state.theme.palette, color];

    const theme = {
      ...this.state.theme,
      palette,
    };

    this.setState({
      theme,
    });

    database.updateTheme(this.props.themeId, theme);
  }

  handleEditPaletteButtonClick = () => this.setState({
    isEditingPalette: true,
  });

  handleEditPaletteClose = () => this.setState({
    isEditingPalette: false,
  });

  handlePaletteChange = (palette) => {
    const theme = {
      ...this.state.theme,
      palette,
    };

    this.setState({
      theme,
    });

    database.updateTheme(this.props.themeId, theme);
  };

  handleCustomPaletteEditStart = () => this.setState({
    isEditingPalette: true,
    wasEditingPalette: true,
  });

  render () {
    if (!this.state.theme) {
      return null;
    }

    let variablesAmount;

    if (this.state.theme) {
      variablesAmount = Object.keys(this.state.theme.variables).length;

      if (
        this.state.theme.wallpaper
        && !(this.state.theme.variables.chat_wallpaper)
      ) {
        variablesAmount++;
      }
    }

    let dialog = null;

    const themeColors = [
      ...new Set(
        Object.values(this.state.theme.variables)
          .map((color) => Color.createHex({
            ...color,
            alpha: 255,
          })),
      ),
    ];

    if (this.state.isEditingPalette) {
      dialog = <PaletteEditor
        palette={this.state.theme.palette}
        onChange={this.handlePaletteChange}
        onClose={this.handleEditPaletteClose}
        isFromVariableEditor={Boolean(this.state.editingVariable)}
      />;
    } else if (this.state.editingVariable) {
      dialog = <VariableEditor
        variable={this.state.editingVariable}
        color={this.state.color}
        onCancel={this.handleVariableEditCancel}
        onSave={this.handleVariableEditSave}
        onDelete={this.handleVariableDelete}
        wallpaper={this.state.theme.wallpaper}
        themeColors={themeColors}
        themeCustomPalette={this.state.theme.palette}
        onCustomPaletteColorAdd={this.handleCustomPaletteColorAdd}
        onCustomPaletteEditStart={this.handleCustomPaletteEditStart}
        isFromPaletteEditing={this.state.wasEditingPalette}
      />;
    } else if (this.state.showScriptRunner) {
      dialog = <ScriptRunner
        onClose={this.handleScriptRunnerClose}
        theme={this.state.theme}
        onThemeChange={this.handleThemeChange}
      />;
    }

    const isSearchHotkeyEnabled = !dialog && this.props.isSearchHotkeyEnabled;

    return (
      <React.Fragment>
        {dialog}

        <Button
          onClick={this.downloadThemeViaTelegram}
          isFloating={true}
          className="workspace_downloadButton"
        />

        <Field
          className="workspace_themeName"
          id="workspace_themeName"
          onChange={this.handleNameFieldChange}
          onBlur={this.handleNameFieldBlur}
          onEnter={this.handleNameFieldEnter}
          value={this.state.theme.name}
          autoCapitalize="words"
        >
          {localization.workspace_themeNameLabel()}
        </Field>

        <Buttons>
          <Button onClick={this.props.onClosePrompt} isDangerous={true}>
            {localization.workspace_closeTheme()}
          </Button>
          <Button onClick={this.downloadThemeFile}>
            {localization.workspace_downloadThemeFile()}
          </Button>
          <Button onClick={this.downloadWorkspace}>
            {localization.workspace_downloadWorkspace()}
          </Button>
          <Button onClick={this.handleRunScriptButtonClick}>
            {localization.workspace_runScript()}
          </Button>
          <Button
            onClick={this.createPreview}
            isDisabled={this.state.shouldShowCreatePreviewSpinner}
          >
            {localization.workspace_createPreview()}
            {this.state.shouldShowCreatePreviewSpinner && <Spinner/>}
          </Button>
          <Button
            onClick={this.testTheme}
            isDisabled={this.state.shouldShowTestThemeSpinner}
          >
            {localization.workspace_testTheme()}
            {this.state.shouldShowTestThemeSpinner && <Spinner/>}
          </Button>
          <Button onClick={this.handleEditPaletteButtonClick}>
            {localization.workspace_editPalette()}
          </Button>
        </Buttons>

        <Variables
          themeId={this.props.themeId}
          theme={this.state.theme.variables}
          wallpaper={this.state.theme.wallpaper}
          onClick={this.handleVariableEditStart}
          onNewVariable={this.handleNewVariable}
          isSearchHotkeyEnabled={isSearchHotkeyEnabled}
        />

        <Hint>{
          localization.workspace_variablesAmount({
            total: allVariablesAmount,
            theme: variablesAmount,
          })
        }</Hint>
      </React.Fragment>
    );
  }
}

export default Workplace;