import { FC } from "react";
import { createPortal } from "react-dom";

const modalDivContainer = document.querySelector("#modals");

const Portals: FC = ({ children }) => {
  return createPortal(children, modalDivContainer);
};

export default Portals;
