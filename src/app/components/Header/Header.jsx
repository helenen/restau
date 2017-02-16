import React from 'react';

export default class Header extends React.Component {
    render() {
        return (

            <header>
              <div id="menu">
                <img id='logo'src="app/img/header/laa.png" />
                  <ul id="nav">

                      <li><a href="Acceuil">Accueil</a></li>
                      <li><a href="#plat">Carte</a></li>
                      <li><a href="#Contact">Contact</a></li>
                      <li><a href="Panier">Panier</a></li>
                  </ul>

              </div>
            </header>


        );
    }
}
