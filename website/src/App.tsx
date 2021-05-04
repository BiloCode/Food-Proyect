import "config/firebaseInit";

import { Suspense } from "react";

import GlobalStyles from "./styles";
import RouterApplication from "router";
import AuthProvider from "context/AuthContext/provider";
import MapProvider from "context/MapContext/provider";
import { ProfileProvider } from "context/ProfileContext/provider";

function App() {
  return (
    <AuthProvider>
      <MapProvider>
        <ProfileProvider>
          <Suspense fallback={() => <div>loading...</div>}>
            <RouterApplication />
          </Suspense>
        </ProfileProvider>
      </MapProvider>
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
