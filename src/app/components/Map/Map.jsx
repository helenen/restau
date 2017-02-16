import React from 'react';

export default class Map extends React.Component {
    render() {
        return (
            <div id="map">
                 <h2>Où sommes nous ? </h2>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.209196894807!2d2.434700750711676!3d48.85422110885359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5f8a4cb333%3A0x9535ab9bdafaa332!2s55+Rue+de+Vincennes%2C+93100+Montreuil!5e0!3m2!1sfr!2sfr!4v1487255448184" width="80%" height="450"  ></iframe>
            </div>
        );
    }
}
