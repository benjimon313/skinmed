import { atom } from "recoil";

export const clientState = atom({
  key: "clientState",
  default: [
    {
      id: 0,
      ci: 6140972,
      firstName: "Sergio",
      lastName: "Medrano",
      age: `2/1/1995`,
      phone: 52767223,
      address: "F. miranda",
      extraInfo:{
        antFam: '',
        persnPat:'',
        persnNoPat:'',
        padAct:''
      }
    },

    {
      id: 1,
      ci: 3422362,
      firstName: "Mateo",
      lastName: "Navia",
      age: `6/12/1995`,
      phone: 77252723,
      address: "Obrajes",
      extraInfo:{
        antFam: '',
        persnPat:'',
        persnNoPat:'',
        padAct:''
      }
    },
    {
      id: 2,
      ci: 2352362,
      firstName: "Pablo",
      lastName: "Gonzales",
      age: `26/8/1995`,
      phone: 87252723,
      address: "Achumani",
      extraInfo:{
        antFam: '',
        persnPat:'',
        persnNoPat:'',
        padAct:''
      }
    },
    {
      id: 3,
      ci: 1351356,
      firstName: "Juani",
      lastName: "Reyes",
      age: `14/10/1995`,
      phone: 97239252,
      address: "Banzer",
      extraInfo:{
        antFam: '',
        persnPat:'',
        persnNoPat:'',
        padAct:''
      }
    },
    {
      id: 4,
      ci: 8532362,
      firstName: "Miguel",
      lastName: "Quezada",
      age: `10/11/1995`,
      phone: 17252723,
      address: "J. Ki",
      extraInfo:{
        antFam: '',
        persnPat:'',
        persnNoPat:'',
        padAct:''
      }
    },
    {
      id: 5,
      ci: 8357236,
      firstName: "Antonio",
      lastName: "Gutierrez",
      age: `25/12/1995`,
      phone: 27252723,
      address: "Buean",
      extraInfo:{
        antFam: '',
        persnPat:'',
        persnNoPat:'',
        padAct:''
      }
    },
    {
      id: 6,
      ci: 6352362,
      firstName: "Andres",
      lastName: "Frias",
      age: `31/10/1995`,
      phone: 47252723,
      address: "Jordan Rey",
      extraInfo:{
        antFam: '',
        persnPat:'',
        persnNoPat:'',
        padAct:''
      }
    },
  ],

});

export const clientSelectedState = atom({
  key: "clientSelectedState",
  default: {}
})

export const clientProceduresState = atom({
  key: "clientProceduresState",
  default: [
    {
      id: 0,
      name: 'Botox',
      price: 400
      
    },
    {
      id: 1,
      name: 'Botox 1',
      price: 300
      
    },
    {
      id: 2,
      name: 'Botox 2',
      price: 200
      
    },
  ]
})