import { PageTab } from "application/types/PageTabs";

import { IoIosAddCircle, IoMdTrash } from "react-icons/io";

type Callback = () => void;

const GetPageTabs = (onClickCreate: Callback, onClickDelete: Callback) => {
  const pageTabs: PageTab[] = [
    {
      title: "Detalles",
      options: [],
    },
    {
      title: "Puntuaciones",
      options: [],
    },
    {
      title: "Menu",
      options: [
        {
          icon: IoIosAddCircle,
          text: "Crear nuevas Comidas",
          onClick: onClickCreate,
        },
        {
          icon: IoMdTrash,
          text: "Eliminar Comidas",
          onClick: onClickDelete,
        },
      ],
    },
  ];

  return pageTabs;
};

export default GetPageTabs;
