import "config/firebaseInit";

import { Suspense } from "react";

import GlobalStyles from "./styles";
import RouterApplication from "router";
import FallbackLoading from "components/molecules/FallbackLoading";

import { AuthProvider } from "context/AuthContext/provider";
import { ProfileProvider } from "context/ProfileContext/provider";
import { BranchOfficeProvider } from "context/BranchOfficeContext/provider";

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <BranchOfficeProvider>
          <Suspense fallback={<FallbackLoading />}>
            <RouterApplication />
          </Suspense>
        </BranchOfficeProvider>
      </ProfileProvider>
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
