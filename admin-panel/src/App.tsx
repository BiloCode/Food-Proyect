import "config/firebase_init";

import { Provider } from "jotai";

import RouterApplication from "router";
import GlobalStyles from "styles";

function App() {
  return (
    <main>
      <Provider>
        <RouterApplication />
      </Provider>
      <GlobalStyles />
    </main>
  );
}

export default App;
