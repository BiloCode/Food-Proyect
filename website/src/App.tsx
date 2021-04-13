import { Suspense } from "react";

import GlobalStyles from "./styles";
import RouterApplication from "router";

function App() {
  return (
    <div>
      <Suspense fallback={() => <div>loading...</div>}>
        <RouterApplication />
        <GlobalStyles />
      </Suspense>
    </div>
  );
}

export default App;
