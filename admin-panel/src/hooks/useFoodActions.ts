import { useToasts } from "react-toast-notifications";

import { useAtomValue, useResetAtom, useUpdateAtom } from "jotai/utils";
import { activeMode, deleteMode } from "store/foodDeleteMode";
import { deleteGroupById, foods as foodStore } from "store/foods";
import { activeScreenLoader, screenLoader } from "store/screenLoader";

import DeleteImage from "application/core/DeleteImage";
import FoodDeleteById from "application/core/FoodDeleteById";
import FoodDeleteGroup from "application/core/FoodDeleteGroup";

const useFoodActions = () => {
  const { addToast } = useToasts();

  const foods = useAtomValue(foodStore);
  const deleteFoods = useUpdateAtom(deleteGroupById);

  const activeLoader = useUpdateAtom(activeScreenLoader);
  const resetScreenLoader = useResetAtom(screenLoader);

  const delete_mode = useAtomValue(deleteMode);
  const deleteModeReset = useResetAtom(deleteMode);

  const onDeleteMode = useUpdateAtom(activeMode);
  const offDeleteMode = () => deleteModeReset();

  const onClickDelete = async () => {
    const ids = delete_mode.ids;

    if (!ids.length) return;

    activeLoader("Eliminando la información...");

    const dataFiltered = [...foods.data].filter((v) => ids.includes(v._id));
    const dataForDelete = dataFiltered.map((v) => ({
      id: v._id,
      image_name: v.image.name,
    }));

    const deleteImage = new DeleteImage();
    const deleteData = new FoodDeleteById();
    const foodGroupDelete = new FoodDeleteGroup(deleteData, deleteImage);

    const groupIsDelete = await foodGroupDelete.exec(dataForDelete);

    resetScreenLoader();

    if (!groupIsDelete) {
      addToast("Ocurrio un error al eliminar", { appearance: "error" });
      return;
    }

    addToast(
      `Se elimino satisfactoriamente ${ids.length} ${
        ids.length > 1 ? "comidas" : "comida"
      }.`
    );

    deleteFoods(ids);
    deleteModeReset();
  };

  return {
    onClickDelete,
    offDeleteMode,
    onDeleteMode,
    deleteMode: delete_mode,
  };
};

export default useFoodActions;
