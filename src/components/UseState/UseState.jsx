import React, { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

const SECURITY_CODE = "paradigma";

export function UseState({ name }){
    const [state, setState] = useState({
        inputValue: "",
        loading: false,
        error: false,
        deleted: false,
        confirmed: false
    });

    // const [inputValue, setInputValue] = useState("");
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    const onConfirm = () => setState({ ...state, error: false, loading: false, confirmed: true });

    const onError = () => setState({ ...state, loading: false, error: true });

    const updateInputValue = (e) => setState({ ...state, inputValue: e.target.value });

    const onCheck = () => setState({ ...state, loading: true });

    const onDelete = () => setState({
        ...state,
        deleted: true
    });

    const onReset = () => setState({
        ...state,
        confirmed: false,
        deleted: false,
        inputValue: ""
    });

    useEffect(() => {
        if(!!state.loading){
            setTimeout(() => {
                if(state.inputValue === SECURITY_CODE) onConfirm();
                else onError();
            }, 2000);
        }
        
    }, [state.loading]);

    console.log(state)

    if(!state.deleted && !state.confirmed){
        return(
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el código de seguridad.</p>

                {
                    (state.error && !state.loading) && (
                        <p>Error: el código es incorrecto</p>
                    )
                }

                {
                    state.loading && (
                        <Loading />
                    )
                }

                <input 
                    type="text"
                    placeholder="código de seguridad"
                    value={state.inputValue}
                    onChange={(e) => updateInputValue(e)}
                />

                <button 
                    type="button" 
                    onClick={() => onCheck()} 
                >
                    Comprobar
                </button>
            </div>
        );
    } else if (!!state.confirmed && !state.deleted){
        return(
            <>
                <p>Confirma para eliminar</p>
                <button 
                    type="button" 
                    onClick={() => onDelete()}
                >Aceptar</button>
                <button
                    type="button"
                    onClick={() => onReset()}
                    >Cancelar</button>
            </>
        );
    } else {
        return(
            <>
                <p>¡Eliminado con exito!</p>
                <button
                    type="button"
                    onClick={() => onReset()}
                >
                    Resetear
                </button>
            </>
        );
    }
}