import "config/firebaseInit";

import { Suspense } from "react";

import GlobalStyles from "./styles";
import RouterApplication from "router";
import AuthProvider from "context/AuthContext/provider";

import { ProfileProvider } from "context/ProfileContext/provider";

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Suspense fallback={() => <div>loading...</div>}>
          <RouterApplication />
        </Suspense>
      </ProfileProvider>
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
