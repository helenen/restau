import React from 'react';
import Header from './Header/Header.jsx';
import Slide from './Slide/Slide.jsx';
import Content from './Content/Content.jsx';
import Map from './Map/Map.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div >
               <Header />
               <Slide />
               <Content />
               <Map />
            </div>
        );
    }
}