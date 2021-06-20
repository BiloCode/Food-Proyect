import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, it } from "@jest/globals";

import TestImage from "assets/images/Image_1.jpg";
import ProfileImageArea from "components/molecules/ProfileImageArea";
import { ToastProvider } from "react-toast-notifications";

//END TO END

describe("Componente Avatar del perfil del usuario", () => {
  beforeEach(async () => {
    await import("config/firebaseInit");
  });

  it("Cambiar la foto de perfil", async () => {
    render(
      <ToastProvider>
        <ProfileImageArea image="" isCurrentUserProfile />
      </ToastProvider>
    );

    const input = screen.getByTestId("file-input");
    const file = new File([], TestImage, {
      type: "image/jpg",
    });

    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(screen.getByTestId("spinner")).toBeDefined());
  });
});
