import React from 'react';
import Request from 'superagent';

export default class Content extends React.Component {

    constructor(props){
        super();
        this.state = {
            name : props.name,
            qte : 0
        }
    }


    addCart = () => this.setState({qte: this.state.qte + 1});

    removeCart = () => {
        if(this.state.qte > 0){
            this.setState({qte: this.state.qte -1});
        }
    }

    render() {
        return (
                   <div className="plat">
                        <h3 id="plat"><strong>{this.props.name}</strong></h3>
                        <div><strong>{this.props.price}</strong></div>


                        <div>Quantité: {this.state.qte}</div>

                        <img src={this.props.image}/>

                        <div>
                            <p className="text">{this.props.description}</p>
                         </div>
                         <div className="buttons">
                            <button onClick ={this.removeCart}> - </button>
                            <button onClick={this.addCart}> + </button>
                         </div>

                    </div>
        );
    }
}
