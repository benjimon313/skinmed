import { atom } from "recoil";

export const proceduresState = atom({
  key: "proceduresState",
  default: [
    {
      id: 0,
      name: 'Botox',
      price: 500,
     
    },
  ],
});
