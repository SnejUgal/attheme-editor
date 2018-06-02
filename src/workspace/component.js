import "./styles.scss";

import * as atthemeEditorApi from "attheme-editor-api";
import * as database from "../database/api";
import Attheme from "attheme-js";
import Button from "../button/component";
import Buttons from "../buttons/component";
import Field from "../field/component";
import PropTypes from "prop-types";
import React from "react";
import Variables from "../variables/component";
import localization from "../localization";
import prepareTheme from "../prepare-theme";

class Workplace extends React.Component {
  static propTypes = {
    themeId: PropTypes.number.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onClosePrompt: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      theme: null,
    };
  }

  componentDidMount = async () => {
    this.setState({
      theme: await database.getTheme(this.props.themeId),
    });
  }

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
    const { theme, fileName } = prepareTheme(this.state.theme);

    const string = Attheme.asText(theme);
    const stringLength = string.length;

    const buffer = new Uint8Array(stringLength);

    for (let i = 0; i < stringLength; i++) {
      buffer[i] = string.charCodeAt(i);
    }

    const blob = URL.createObjectURL(
      new File([buffer], fileName)
    );

    const link = document.createElement(`a`);

    link.href = blob;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadThemeViaTelegram = async () => {
    const { theme, name } = prepareTheme(this.state.theme);

    const themeId = await atthemeEditorApi.uploadTheme({
      name,
      theme,
    });

    const tgLink = `tg://resolve?domain=atthemeeditorbot&start=${themeId}`;

    window.location.href = tgLink;
  }

  render () {
    return this.state.theme === null
      ? null
      : (
        <React.Fragment>
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
          </Buttons>
          <Variables
            themeId={this.props.themeId}
            theme={this.state.theme.theme}
            wallpaper={this.state.theme.wallpaper}
          />
          <Button
            onClick={this.downloadThemeViaTelegram}
            isFloating={true}
            className="workspace_downloadButton"
          />
        </React.Fragment>
      );
  }
}

export default Workplace;