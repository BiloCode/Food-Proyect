import { useAtomValue } from "jotai/utils";
import { clientStore } from "store/clientStore";
import { branchOfficeStore } from "store/branchOfficeStore";
import { foodStore } from "store/foodStore";

const useCollectionAllData = () => {
  const food = useAtomValue(foodStore);
  const clients = useAtomValue(clientStore);
  const branchOffice = useAtomValue(branchOfficeStore);

  return {
    food,
    clients,
    branchOffice,
  };
};

export default useCollectionAllData;
