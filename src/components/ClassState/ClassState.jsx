import React from "react";
import { Loading } from "../Loading/Loading";

const SECURITY_CODE = "paradigma";

export class ClassState extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: false,
            loading: false,
            inputValue: ""
        };
    }

    // UNSAFE_componentWillMount(){
    //     console.log("componentWillMount");
    // }

    // componentDidMount(){
    //     console.log("componentDidMount");
    // }

    componentDidUpdate(){
        if(!!this.state.loading){
            setTimeout(() => {
                if(SECURITY_CODE === this.state.inputValue){
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false });
                }
            }, 2000);
        }
    }

    render(){
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad.</p>

                {
                    (this.state.error && !this.state.loading) && (
                        <p>Error: el código es incorrecto</p>
                    )
                }

                {
                    this.state.loading && (
                        <Loading />
                    )
                }

                <input 
                    type="text" 
                    placeholder="código de seguridad" 
                    value={this.state.inputValue} 
                    onChange={(e) => this.setState({ inputValue: e.target.value })}
                />
                <button type="button" onClick={() => this.setState({ loading: true })} >Comprobar</button>
            </div>
        );
    }
}