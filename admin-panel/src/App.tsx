import "config/firebase_init";

import RouterApplication from "router";
import GlobalStyles from "styles";

function App() {
  return (
    <main>
      <RouterApplication />
      <GlobalStyles />
    </main>
  );
}

export default App;
