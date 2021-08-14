import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { foods } from "store/foods";
import { currentBranch } from "store/currentBranch";
import { setBranchMenu } from "store/branchOffice";

import type { Food } from "@food/shared-types";
import BranchAddNewMenu from "application/core/BranchOffice/BranchAddNewMenu";

const useCreateMenuInBranch = (onClose: () => void) => {
  const foodStore = useAtomValue(foods);
  const updateBranchMenu = useUpdateAtom(setBranchMenu);
  const currentBranchDetail = useAtomValue(currentBranch);

  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const searchInputRef = useRef<HTMLInputElement>();

  const [foodSaved, setFoodSaved] = useState<Food[]>([]);
  const [isSendRequest, setIsSendRequest] = useState<boolean>(false);
  const [foodFilter, setFoodFilter] = useState<Food[]>(foodStore.data);

  const addFood = (_id: string) => () => {
    const isExists = foodSaved.some((v) => v._id === _id);
    if (isExists) {
      return;
    }

    const foodSelect = [...foodStore.data].find((v) => v._id === _id);
    if (!foodSelect) {
      return;
    }

    searchInputRef.current.value = "";
    setFoodSaved((foods) => [foodSelect, ...foods]);
  };

  const removeFood = (index: number) => () => {
    const newFood = [...foodSaved].filter((_, i) => i !== index);
    setFoodSaved(() => newFood);
  };

  const onSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target.value.trim();
    if (!inputValue) {
      setFoodFilter(() => foodStore.data);
      return;
    }

    const foodFinded = [...foodFilter].find((v) =>
      v.name.includes(inputValue.toUpperCase())
    );

    if (!foodFinded) return;

    setFoodFilter(() => [foodFinded]);
  };

  const onClearFoods = () => setFoodSaved(() => []);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const name = nameRef.current?.value.trim();
    const foodsId = foodSaved.map((v) => v._id);
    const description = descriptionRef.current?.value.trim();

    if (!foodsId.length || !name || !description) return;

    setIsSendRequest(() => true);

    try {
      const menu = await BranchAddNewMenu.exec(currentBranchDetail.branch._id, {
        name,
        description,
        foodsId,
      });

      updateBranchMenu({ branchId: currentBranchDetail.branch._id, menu });
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSendRequest(() => false);
    }
  };

  return {
    addFood,
    removeFood,
    onSearch,
    onClearFoods,
    onSubmit,
    ref: {
      nameRef,
      descriptionRef,
      searchInputRef,
    },
    foodStates: {
      isSendRequest,
      foodFilter,
      foodSaved,
    },
  };
};

export default useCreateMenuInBranch;
