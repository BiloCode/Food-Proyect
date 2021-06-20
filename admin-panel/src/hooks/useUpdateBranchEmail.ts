import { useAtom } from "jotai";
import { useToasts } from "react-toast-notifications";
import { currentBranch as currentBranchStore } from "store/currentBranch";

import UpdateBranchEmail from "application/core/BranchOffice/UpdateBranchEmail";

const useUpdateBranchEmail = () => {
  const { addToast } = useToasts();

  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);

  const onUpdateEmail = async (id: string, email: string) => {
    const updateService = new UpdateBranchEmail();

    const update = await updateService.__invoke({
      id: id,
      email: email,
    });

    if (!update) {
      addToast("Error en actualizacion ", { appearance: "error" });
    }

    addToast("Descripción actualizada", { appearance: "success" });

    const newCurrentBrach = { ...currentBranch };

    newCurrentBrach.branch.email = email;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });
  };

  return {
    onUpdateEmail,
  };
};

export default useUpdateBranchEmail;
