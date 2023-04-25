import { Action } from "@ngrx/store";


export function contadorReducer( state : string ="0", action : Action){
    switch(action.type){
        case 'Input':
            return "Trabajo";
        case 'Output':
            return "Descanso";
        default:
            return state

    }
}

