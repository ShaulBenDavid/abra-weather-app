import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode} from '../src/GlobalStyle/theme'
const themes = [lightMode, darkMode];
addDecorator(withThemesProvider(themes), ThemeProvider);
import GlobalStyles from '../src/GlobalStyle/GlobalStyles'
import '../src/index.css';

addDecorator((Story) => <><GlobalStyles /><Story /></>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}