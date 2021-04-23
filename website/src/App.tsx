import "config/firebaseInit";

import { Suspense } from "react";

import GlobalStyles from "./styles";
import RouterApplication from "router";
import AuthProvider from "context/AuthContext/provider";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={() => <div>loading...</div>}>
        <RouterApplication />
      </Suspense>
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
