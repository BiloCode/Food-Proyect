import "config/firebaseInit";

import { Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";

import GlobalStyles from "./styles";
import RouterApplication from "router";
import FallbackLoading from "components/molecules/FallbackLoading";

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
              <Suspense fallback={<FallbackLoading />}>
                <RouterApplication />
              </Suspense>
            </BranchOfficeProvider>
          </ProfileProvider>
        </AuthProvider>
      </ToastProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
