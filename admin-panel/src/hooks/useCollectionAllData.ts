import { useAtomValue } from "jotai/utils";
import { clients as clientsStore } from "store/clients";
import { foods as foodsStore } from "store/foods";
import { branchOffice as branchOfficeStore } from "store/branchOffice";

const useCollectionAllData = () => {
  const food = useAtomValue(foodsStore);
  const clients = useAtomValue(clientsStore);
  const branchOffice = useAtomValue(branchOfficeStore);

  return {
    food,
    clients,
    branchOffice,
  };
};

export default useCollectionAllData;
