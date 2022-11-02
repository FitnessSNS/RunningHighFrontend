import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styles/Global";
import { theme } from "./styles/theme";
import { Router } from "./Router";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
const root = createRoot(container);
export const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
