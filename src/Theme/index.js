import { createMuiTheme } from '@material-ui/core/styles';
import { computeColors } from './helpers';

let palette = { primary: {}, secondary: {}, tertiary: {}, quaternary: {}, quinary: {} }

export function setThemeColors(colors) {

    const primaryPalette = computeColors(colors.primary),
        secondaryPalette = computeColors(colors.secondary),
        teriaryPalette = computeColors(colors.secondary),
        quaternaryPalette = computeColors(colors.secondary),
        quinaryPalette = computeColors(colors.secondary);

    palette.primary = Object.assign({}, ...primaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.secondary = Object.assign({}, ...secondaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.tertiary = Object.assign({}, ...teriaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.quaternary = Object.assign({}, ...quaternaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.quinary = Object.assign({}, ...quinaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    return palette;
}

export function createTheme(colors) {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: colors.primary[500].hex,
            },
            secondary: {
                main: colors.secondary[500].hex,
            },
            tertiary: {
                main: colors.tertiary[500].hex,
            },
            quaternary: {
                main: colors.quaternary[500].hex,
            },
            quinary: {
                main: colors.quinary[500].hex,
            }
        },
        typography: {
            h3: {
                fontSize: "1.5rem",
            }
        },
        button: {
            height: 48,
            padding: "0 30px",
            backgroundColor: colors.primary[500].hex,
            color: colors.secondary[500].hex,
            border: 0,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            "&:hover" : {
                backgroundColor: colors.secondary[500].hex,
                color: colors.primary[500].hex,
            }
        },
    });
    console.log("theme: ", theme);
    console.log("compute: ", computeColors("#F2B705"));

    return theme;
}


// https://material-ui.com/customization/default-theme/
// const theme = createMuiTheme({
//     palette: {
//         common: {
//             toddDark: "#242326",
//             toddOrange: "#D96523",
//         },
//         primary: {
//             main: "#242326",
//         },
//         secondary: {
//             main: "#F2E205",
//         },
//         tertiary: {
//             main: "#F2B705"
//         },
//         quaternary: {
//             main: "#F2A20C"
//         },
//         quinary: {
//             main: "#D96523"
//         }
//     },
//     typography: {
//         h3: {
//             fontSize: "1.5rem",
//         }
//     }
// });

// export default theme;

// primary, secondary, tertiary, quaternary, quinary, senary, septenary, octonary, nonary, and denary. There's also a word for twelfth, duodenary