import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import ExistsUser from "application/core/auth/ExistsUser";
import CreateNewUser from "application/core/auth/CreateNewUser";
import GoogleAuthentication from "application/core/auth/GoogleAuthentication";

const useGoogleAuthentication = () => {
  const { addToast } = useToasts();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickGoggleAction = async () => {
    setIsLoading(() => true);

    const googleService = new GoogleAuthentication();
    const userData = await googleService.__invoke();

    if (!userData) return;

    const userExists = await ExistsUser.exec(userData?._id);

    if (userExists) {
      setIsLoading(() => false);
      addToast("Inicio de sesión correcto.");
      return;
    }

    const isCreated = await CreateNewUser.exec({
      _id: userData._id,
      type: "google",
      data: {
        email: userData.email,
        fullName: userData.fullName,
        profileImage: userData.profileImage,
      },
    });

    setIsLoading(() => false);

    if (!isCreated) {
      addToast("Ocurrio un error inesperado en el servidor.", {
        appearance: "error",
      });
      return;
    }

    addToast("Inicio de sesión correcto.");
  };

  return {
    onClickGoggleAction,
    isLoading,
  };
};

export default useGoogleAuthentication;
