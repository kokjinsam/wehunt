import {
  darkBlack,
  fullBlack,
  cyan500,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const theme = {
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  palette: {
    primary1Color: '#f08a5d',
    primary2Color: '#f87d09',
    primary3Color: '#F9ED69',
    accent1Color: '#6A2C70',
    accent2Color: '#B83B5E',
    accent3Color: '#8F1383',
    textColor: darkBlack,
    alternateTextColor: '#ffffff',
    canvasColor: '#ffffff',
    borderColor: '#dddddd',
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

export default theme;
