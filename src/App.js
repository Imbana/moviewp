import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import AppRouter from "./routers/AppRouter";

function App() {
    return (

        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles
                    styles={theme}
                />
                <AppRouter />
            </ThemeProvider>
        </div>
    );
}

export default App;

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            // Purple and green play nicely together.
            main: "#6606a7",
        },
        background: {
            default: "#393E46",
            paper: "#393E46",
        },
        
    },
});



const theme = {

    '*::-webkit-scrollbar': {
        width: "8px",
    },
    '*::-webkit-scrollbar-track': {
        background: "rgb(37, 36, 32)",
    },
    '*::-webkit-scrollbar-thumb': {
        'backgroundColor': "rgba(66, 21, 138, 0.671)", /* color of the scroll thumb */
        "borderRadius": "5px",
    }
};