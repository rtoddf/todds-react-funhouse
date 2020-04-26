import { createMuiTheme } from '@material-ui/core/styles';

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
        teriary: {
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