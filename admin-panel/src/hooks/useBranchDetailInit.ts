import { useEffect } from "react";

import { useParams, useNavigate } from "@reach/router";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { branchOffice } from "store/branchOffice";
import { currentBranch } from "store/currentBranch";

const useBranchDetailInit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const pageData = useAtomValue(currentBranch);
  const branchData = useAtomValue(branchOffice);
  const setPageData = useUpdateAtom(currentBranch);

  useEffect(() => {
    if (branchData.requestState !== "complete") return;

    const branch = [...branchData.data].find((v) => v._id === id);
    if (!branch) {
      navigate("/branch/list");
      return;
    }

    setPageData({ branch });

    return () => {
      setPageData({});
    };
  }, [branchData.requestState]);

  return {
    pageData,
  };
};

export default useBranchDetailInit;
