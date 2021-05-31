type Food = {
  image: File;
  name: string;
  price: number;
};

class CreateNewFood {
  public static exec = async (newFood: Food) => {
    try {
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default CreateNewFood;
