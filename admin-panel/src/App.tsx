import "config/firebase_init";

import { Provider } from "jotai";
import { ToastProvider } from "react-toast-notifications";

import RouterApplication from "router";
import GlobalStyles from "styles";

function App() {
  return (
    <main>
      <ToastProvider autoDismiss autoDismissTimeout={4000}>
        <Provider>
          <RouterApplication />
        </Provider>
      </ToastProvider>
      <GlobalStyles />
    </main>
  );
}

export default App;
