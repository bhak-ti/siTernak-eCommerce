import { GiSheep, GiCow, GiChicken } from "react-icons/gi";

export const staticConst = {
  categoriesOptions: [
    {
      _id: 1,
      name: "Unggas",
      icon: GiChicken,
    },
    {
      _id: 2,
      name: "Sapi",
      icon: GiCow,
    },
    {
      _id: 3,
      name: "Kambing",
      icon: GiSheep,
    },
  ],
  sortOptions: [
    {
      _id: 1,
      name: "Latest",
    },
    {
      _id: 2,
      name: "Lower Price",
    },
    {
      _id: 3,
      name: "Highest Price",
    },
    {
      _id: 3,
      name: "Best Seller",
    },
  ],
};
