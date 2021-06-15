import Swal, { SweetAlertIcon } from "sweetalert2";

type ConfirmProps = {
  title: string;
  description: string;
  icon: SweetAlertIcon;
};

const useShowConfirm = () => {
  return async (props?: ConfirmProps): Promise<boolean> => {
    const result = await Swal.fire({
      title: props?.title || "Confirm Title",
      text: props?.description || "Confirm description",
      icon: props?.icon || "info",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    return result.isConfirmed;
  };
};

export default useShowConfirm;
