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
        }
    },
    typography: {
        h3: {
            fontSize: "1.5rem",
        }
    }
})

export default theme;