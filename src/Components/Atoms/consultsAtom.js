import { atom } from "recoil";

export const consultsState = atom({
    key: "consultsState",
    default: [{
        ci:'',
        planTrat:'',
        presion: '',
        temp:'',
        peso:'',
        talla:'',
        frecCard:'',
        frecResp:'',
        motivConsult:'',
        explFisica:'',
        diagnostico:'',
        cie10:'',
        examenes:[],
        labs:[],
        receta:[
            
        ]
    }
    ],
});