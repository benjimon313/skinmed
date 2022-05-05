import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: [
    {
      username: "usuariodoctor",
      pass: '12345',
      rol: "doctor"
     
    },
    {
        username: "usuarioadmin",
        pass: "admin",
        rol: "admin"
       
      },
  ],
});

export const activeUserState = atom({
    key: "activeUserState",
    default: null,
  });
