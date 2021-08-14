import "config/firebaseInit";

import { ToastProvider } from "react-toast-notifications";

import GlobalStyles from "./styles";
import RouterApplication from "router";

import { AuthProvider } from "context/AuthContext/provider";
import { ProfileProvider } from "context/ProfileContext/provider";
import { BranchOfficeProvider } from "context/BranchOfficeContext/provider";

function App() {
  return (
    <>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={4000}
        placement="bottom-center"
      >
        <AuthProvider>
          <ProfileProvider>
            <BranchOfficeProvider>
              <RouterApplication />
            </BranchOfficeProvider>
          </ProfileProvider>
        </AuthProvider>
      </ToastProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
