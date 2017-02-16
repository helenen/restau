import React from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Cards from './Cards.jsx';

export default class Content extends React.Component {
 constructor(){
        super();
        this.state = {}
    }

     search(){
         var url = "https://simplonco.github.io/js-css-3days-group-project/data/data.json";
         Request.get(url).then((data) => {
             this.setState({
                 cards: data.body.carte,
             });
         });
     }
    render() {
        this.search();
        var contents = _.map(this.state.cards, (element, index)=>{
            return (
                   <Cards key={index} name={element.name} description={element.description} image={element.image} price={element.price}/>
                );
        });
        return (
                <div id="content">
                   <h1 className="title">Carte du restaurant</h1>
                   {contents}
                </div>
        );
    }
}