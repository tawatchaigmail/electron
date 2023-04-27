
 const client = require('../src/mtt/connect');

 var mqtt = require('mqtt');


import React from "react";
//import logo from './images/logo.png'
import { createRoot } from "react-dom/client";

import { hot } from 'react-hot-loader';

import './css/App.css';

import TAGCOM from       "./components/tagcom";
import NavComponent from './components/navCom';
import NavComFunc from   './components/navComFunc';
import Board from        './components/Board';

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
              <div>                 
                <NavComFunc propname="func" /> 
                <NavComponent name="nameID" />
                <TAGCOM />
                <TagId />
                <Board />
               </div>
            );


const App = () => (
  <div>
    <img src={logo} />
  </div>
)


function TagId(props) {
    return <h2>hhghrs tagggggs</h2>;
}

export default hot(module)(App)

/*

const sayeelloManyTimes = (times) =>
  new Array(times).fill(1).map((_, i) => `elho ${i + 1}`);

const eeloDiv = document.createElement("div");
eeloDiv.innerHTML = sayeelloManyTimes(10).join("<br/>");
document.body.append(eeloDiv);

*/
