import { atom } from "recoil";

export const attendanceState = atom({
  key: "attendanceState",
  default: [
    {
        id: 1,
        ci: 6352362,
        firstName: 'Andres',
        lastName: 'Frias',
        date: new Date(),
        presion: '90',
        temp: '30',
        peso:'77',
        talla:'168',
        frecCard: '90',
        frecResp: '20 Sistolica -130',
        motivConsult: 'Control de estudios',
        explFisica:'Conciente orientada hidratada',
        diagnostico: 'Modulo hepatico en estudios',
        planTrat:'',
        cie10:'',
        receta: [{
            nombre:'Ciproterona ',
            formaAdmin:'oral',
            dosific:'800',
            indicaciones:'cada 9 horas'
        },{
            nombre:'Acetato Estradiol',
            formaAdmin:'oral',
            dosific:'800',
            indicaciones:'cada 9 horas'
        }],
        procedimientoMedico: [{
            name:'Ac. inyeccion ',
            price: '400'
        }],
        examenes: [{
            nombre:'Diferido',
            descripcion:'describiendo',
        },{
            nombre:'rada',
            descripcion:'describiendo',
        }],
        labs: [{
            nombre:'sangre',
            descripcion:'describiendo',
        }]
        
    }
    
  ]

});