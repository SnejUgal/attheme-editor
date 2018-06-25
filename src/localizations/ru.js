import Link from "../link/component";
import { ReactComponent as LoveEmoji } from "../empty-workspace/love.svg";
import React from "react";

const NBSP = `\xa0`;

const pluralRules = new Intl.PluralRules(`ru`);

const localization = {
  error_title: () => `Упс, произошла ошибка`,
  error_description: () => <React.Fragment>
    Пожалуйста, отправьте скриншот ошибки {}
    <Link href="//t.me/snejugal" isWhite={true}>
      разработчику по&nbsp;Телеграму
    </Link>
    {} и&nbsp;опишите, что&nbsp;вы&nbsp;сделали, после чего возникла ошибка. Возможно, понадобится отправить и&nbsp;оригинальный файл темы, который вы&nbsp;использовали.
  </React.Fragment>,
  error_dismiss: () => `Чтобы закрыть сообщение об${NBSP}ошибке, просто нажмите на${NBSP}него.`,

  emptyWorkspace_title: () => `Начните работать над${NBSP}своей темой`,
  emptyWorkspace_createTheme: () => `Создать новую тему`,
  emptyWorkspace_openTheme: () => `Открыть существующую тему`,
  emptyWorkspace_credits: () => <React.Fragment>
    Редактор создан {}
    <Link href="//t.me/snejugal">@snejugal</Link>
    {} и {}
    <Link href="//t.me/AlexStrNik">@AlexStrNik</Link>
    {} с {}
    <LoveEmoji className="emoji" />.
    {} Посмотрите {}
    <Link href="//github.com/snejugal/attheme-editor">
      исходный код редактора на GitHub
    </Link>
    {} и подпишитесь на {}
    <Link href="//t.me/atthemeeditor">
      наш канал в Телеграме
    </Link>!
  </React.Fragment>,

  theme_defaultName: () => `Классная тема`,

  workspace_themeNameLabel: () => `Название темы`,
  workspace_closeTheme: () => `Закрыть тему`,
  workspace_closeThemePrompt: () => `Вы уверены, что хотите закрыть тему?`,
  workspace_downloadThemeFile: () => `Скачать .attheme напрямую`,
  workspace_createPreview: () => `Создать превью`,
  workspace_testTheme: () => `Протестировать тему`,
  workspace_runScript: () => `Запустить скрипт`,
  workspace_editPalette: () => `Редактировать кастомную палитру темы`,
  workspace_downloadWorkspace: () => `Скачать рабочее окружение`,
  workspace_unaddedVariable: () => `Не добавлена`,
  workspace_unusedVariable: () => `Не используется Телеграмом`,
  workspace_obsoleteVariable: () => `Устаревшая`,
  workspace_nonStandardVariable: () => `Нестандартная`,
  workspace_search: () => `Поиск`,
  workspace_variablesAmount: ({ total, theme }) => {
    const forms = {
      one: `${theme} переменная из ${total} добавлена в тему`,
      few: `${theme} переменные из ${total} добавлены в тему`,
      many: `${theme} переменных из ${total} добавлены в тему`,
    };

    return forms[pluralRules.select(theme)];
  },

  confirmDialog_yes: () => `Да`,
  confirmDialog_no: () => `Нет`,

  variableEditor_cancel: () => `Отменить`,
  variableEditor_save: () => `Сохранить`,
  variableEditor_delete: () => `Удалить`,
  variableEditor_red: () => `Красный`,
  variableEditor_green: () => `Зелёный`,
  variableEditor_blue: () => `Синий`,
  variableEditor_hue: () => `Тон`,
  variableEditor_lightness: () => `Светлость, %`,
  variableEditor_saturation: () => `Насыщенность, %`,
  variableEditor_hex: () => `HEX`,
  variableEditor_alpha: () => `Альфа`,
  variableEditor_uploadImage: () => `Загрузить картинку`,
  variableEditor_imageTab: () => `Картинка`,
  variableEditor_colorModelsTab: () => `Цветовые модели`,
  variableEditor_palettesTab: () => `Палитры`,
  variableEditor_wallpaperColorsHint: () => `Вот несколько цветов из обоев. Нажмите на цвет, чтобы добавить его в палитру темы:`,
  variableEditor_editPalette: () => `Редактировать палитру`,

  scriptRunner_title: () => `Запуск скриптов`,
  scriptRunner_description: () => <React.Fragment>
    .attheme editor позволяет легко запускать скрипты, написанные на EcmaScript 2017, что ускоряет разработку тем. Про API редактора можно узнать в <Link href="//github.com/SnejUgal/attheme-editor/wiki/.attheme-editor-scripts-documentation">вики GitHub репозитория редактора</Link>.
  </React.Fragment>,
  scriptRunner_close: () => `Закрыть`,
  scriptRunner_run: () => `Запустить`,
  scriptRunner_isEvaluating: () => `Скрипт выполняется…`,
  scriptRunner_isEvaluated: () => `Скрипт успешно выполнился!`,
  scriptRunner_runtimeError: () => `Упс, в скрипте произошла ошибка:`,
  scriptRunner_syntaxError: () => `Упс, в скрипте неверный синтаксис:`,
  scriptRunner_logMessage: () => `Ваш скрипт передал в консоль:`,
  scriptRunner_babelLoadingFailed: () => `Не удалось загрузить Babel. Проверьте соединение и перезагрузите страницу.`,

  palettes_apple: () => `Apple`,
  palettes_materialDesign: () => `Material Design`,
  palettes_css: () => `CSS цвета`,
  palettes_themeColors: () => `Цвета темы`,
  palettes_themeCustomPalette: () => `Кастомная палитра темы`,

  paletteEditor_close: () => `Закрыть`,
  paletteEditor_cancel: () => `Отменить`,
  paletteEditor_save: () => `Сохранить`,
  paletteEditor_delete: () => `Удалить`,
  paletteEditor_back: () => `Обратно к переменной`,
  paletteEditor_newColor: () => `Добавить новый цвет`,
  paletteEditor_title: () => `Кастомная палитра темы`,
  paletteEditor_defaultColorName: () => `Красивый цвет`,
};

export default localization;