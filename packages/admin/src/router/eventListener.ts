import { globalHistory } from "@reach/router";

globalHistory.listen(() => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
