import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

const useDeletePuntuaction = (
  puntuactionId: string,
  branchOfficeId: string
) => {
  const { removeBranchOfficePuntuaction } = useBranchOfficeContext();

  const onDeletePuntuaction = () => {
    removeBranchOfficePuntuaction(branchOfficeId, puntuactionId);
  };

  return {
    onDeletePuntuaction,
  };
};

export default useDeletePuntuaction;
