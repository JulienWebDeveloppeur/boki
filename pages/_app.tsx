import "styles/globals.css";
import "styles/theme/custom.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme/theme";
import { Provider } from "react-redux";
import { store } from "store/index";
import NavBar from "components/UI/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
