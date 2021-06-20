import { useAtom } from "jotai";
import { useToasts } from "react-toast-notifications";
import { currentBranch as currentBranchStore } from "store/currentBranch";

import UpdateBranchDescription from "application/core/BranchOffice/UpdateBranchDescription";

const useUpdateBranchDescription = () => {
  const { addToast } = useToasts();

  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);

  const onUpdateDescription = async (id: string, description: string) => {
    const updateService = new UpdateBranchDescription();

    const update = await updateService.__invoke({
      id: id,
      description: description,
    });

    if (!update) {
      addToast("Error en actualizacion ", { appearance: "error" });
    }

    addToast("Descripción actualizada", { appearance: "success" });

    const newCurrentBrach = { ...currentBranch };

    newCurrentBrach.branch.description = description;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });
  };

  return {
    onUpdateDescription,
  };
};

export default useUpdateBranchDescription;
