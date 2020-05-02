import { createMuiTheme } from '@material-ui/core/styles';

export function createTheme(colors, fonts) {
    const baseDefaultTheme = createMuiTheme({});

    console.log("colors: ", colors)

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: colors.primary[500].hex,
                light: colors.primary[50].hex,
                dark: colors.primary[900].hex,
                contrastText: colors.primary["A100"].hex,
            },
            secondary: {
                main: colors.secondary[500].hex,
                light: colors.secondary[50].hex,
                dark: colors.secondary[900].hex,
                contrastText: colors.secondary["A100"].hex,
            },
            tertiary: {
                main: colors.tertiary[500].hex,
                light: colors.tertiary[50].hex,
                dark: colors.tertiary[900].hex,
                contrastText: colors.tertiary["A100"].hex,
            },
            quaternary: {
                main: colors.quaternary[500].hex,
                light: colors.quaternary[50].hex,
                dark: colors.quaternary[900].hex,
                contrastText: colors.quaternary["A100"].hex,
            },
            quinary: {
                main: colors.quinary[500].hex,
                light: colors.quinary[50].hex,
                dark: colors.quinary[900].hex,
                contrastText: colors.quinary["A100"].hex,
            }
        },
        typography: {
            fonts,
            h3: {
                fontSize: "1.5rem",
            },
            tab: {
                fontFamily: "Raleway",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none"
            }
        },
        button: {
            height: 48,
            padding: "0 30px",
            backgroundColor: colors.primary[500].hex,
            color: colors.secondary[500].hex,
            border: 0,
            boxShadow: baseDefaultTheme.shadows[5],
            "&:hover" : {
                backgroundColor: colors.secondary[500].hex,
                color: colors.primary[500].hex,
            }
        },
    });

    console.log("theme: ", theme);
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

// primary, secondary, tertiary, quaternary, quinary, senary, septenary, octonary, nonary, and denary.
// There's also a word for twelfth, duodenary