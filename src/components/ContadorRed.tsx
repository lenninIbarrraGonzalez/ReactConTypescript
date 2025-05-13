import { useReducer } from "react";

const initialState = {
    contador: 0,
}


type ActionType = 
    |{type: 'incrementar'}
    |{type: 'decrementar'}
    |{type: 'custom', payload: number}


const contadorReducer = (state: typeof initialState, action:ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
            
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
    
        default:
            return state;

    }
}

export const ContadorRed = () => {

    const [{contador}, dispatch] = useReducer(contadorReducer, initialState)

    return (
        <>
            <h1>Contador: {contador}</h1>

            <button className="btn btn-outline-primary me-3"
                onClick={() => dispatch({
                    type:'incrementar'
                })}
            >
                +1
            </button>

            <button className="btn btn-outline-primary me-3"
                    onClick={() => dispatch({
                        type: 'decrementar'
                    })}
            >
                -1
            </button>

            <button className="btn btn-outline-primary"
                onClick={() => dispatch({
                    type: 'custom',
                    payload: 1000
                })}
            >
                1000
            </button>
        </>
    )
}
