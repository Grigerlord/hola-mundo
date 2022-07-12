import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age: 28
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        Hola {this.props.name}
                    </h1>
                    <h2>
                        Ya tienes {this.state.age} años
                    </h2>
                    <div>
                        <button onClick={this.birthday}>
                            Cumplir anhos
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }

}



Greeting.propTypes = {
    name: PropTypes.string
};


export default Greeting;
