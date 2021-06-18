import { useToasts } from "react-toast-notifications";

import UpdateBranchPhoneNumber from "application/core/UpdateBranchPhoneNumber";

import { useAtom } from "jotai";
import { currentBranch as currentBranchStore } from "store/currentBranch";

const useUpdateBranchPhoneNumber = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

  const onUpdatePhoneNumber = async (id: string, phoneNumber: string) => {
    const updateService = new UpdateBranchPhoneNumber();

    const update = await updateService.__invoke({
      id: id,
      phoneNumber: phoneNumber,
    });

    if (!update) {
      addToast("Error en la actualizacion", { appearance: "error" });
    }

    addToast("Numero actualizado", { appearance: "success" });

    const newCurrentBrach = { ...currentBranch };

    newCurrentBrach.branch.phoneNumber = phoneNumber;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });
  };

  return {
    onUpdatePhoneNumber,
  };
};

export default useUpdateBranchPhoneNumber;
