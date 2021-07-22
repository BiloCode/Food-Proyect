import "config/firebase_init";

import { ToastProvider } from "react-toast-notifications";

import GlobalStyles from "styles";
import RouterApplication from "router";
import FullScreenLoader from "components/molecules/FullScreenLoader";

function App() {
  return (
    <>
      <ToastProvider autoDismiss autoDismissTimeout={4000}>
        <RouterApplication />
        <FullScreenLoader />
      </ToastProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
