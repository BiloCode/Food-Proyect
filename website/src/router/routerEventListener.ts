import { globalHistory } from "@reach/router";

globalHistory.listen(() => {
  document.documentElement.scrollTop = 0;
});
