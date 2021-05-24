import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import CreateNewUser from "application/core/CreateNewUser";
import GoogleAuthentication from "application/core/GoogleAuthentication";
import ExistsUser from "application/core/ExistsUser";

const useGoogleAuthentication = () => {
  const { addToast } = useToasts();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickGoggleAction = async () => {
    setIsLoading(() => true);

    const googleService = new GoogleAuthentication();
    const userData = await googleService.__invoke();

    if (!userData) return;

    const checkingUser = new ExistsUser();
    const isExists = await checkingUser.__invoke(userData._id);

    if (isExists) {
      setIsLoading(() => false);
      addToast("Inicio de sesión correcto.");
      return;
    }

    const createUserService = new CreateNewUser();
    const isCreated = await createUserService.__invoke({
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
