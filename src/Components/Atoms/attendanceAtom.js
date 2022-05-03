import { atom } from "recoil";

export const attendanceState = atom({
  key: "attendanceState",
  default: [
    {
        id: 1,
        ci: 6352362,
        presion: '90',
        temp: '30',
        peso:'20',
        talla:'168',
        frecCard: '89',
        frecResp: '99',
        motivConsult: 'doloru',
        explFisica:'dolie',
        diagnostico: 'muerto',
        planTrat:'',
        cie10:'',
        receta: [{
            nombre:'paracetamol',
            formaAdmin:'oral',
            dosific:'800',
            indicaciones:'cada 9 horas'
        }],
        procedimientoMedico: [{
            procedimiento:'botox',
            precio: '400'
        }],
        examenes: [{
            nombre:'radiox',
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