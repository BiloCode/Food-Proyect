import "config/firebase_init";

import { Provider } from "jotai";
import { ToastProvider } from "react-toast-notifications";

import GlobalStyles from "styles";
import RouterApplication from "router";
import FullScreenLoader from "components/molecules/FullScreenLoader";

function App() {
  return (
    <>
      <ToastProvider autoDismiss autoDismissTimeout={4000}>
        <Provider>
          <RouterApplication />
          <FullScreenLoader />
        </Provider>
      </ToastProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
