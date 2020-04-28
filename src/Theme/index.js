import { createMuiTheme } from '@material-ui/core/styles';
import { computeColors } from './helpers';

// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
    palette: {
        common: {
            toddDark: "#242326",
            toddOrange: "#D96523",
        },
        primary: {
            main: "#242326",
        },
        secondary: {
            main: "#F2E205",
        },
        tertiary: {
            main: "#F2B705"
        },
        quaternary: {
            main: "#F2A20C"
        },
        quinary: {
            main: "#D96523"
        }
    },
    typography: {
        h3: {
            fontSize: "1.5rem",
        }
    }
});

export default theme;

// primary, secondary, tertiary, quaternary, quinary, senary, septenary, octonary, nonary, and denary. There's also a word for twelfth, duodenary

let palette = { primary: {}, secondary: {} }

export function setThemeColors(colors) {

    const primaryPalette = computeColors(colors.primary);
    const secondaryPalette = computeColors(colors.secondary);

    palette.primary = Object.assign({}, ...primaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.secondary = Object.assign({}, ...secondaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    return palette;
}

export function createTheme(colors) {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: colors.primary[500].hex
            },
            secondary: {
                main: colors.secondary[500].hex
            },
        },
    });

    return theme;
}