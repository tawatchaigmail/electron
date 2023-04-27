import React from "react";

class NavComponent extends React.Component{
    constructor(){
           super();   
           this.state = {
                         message : "message (from state)"   
        
           };
           this.updateMessage = this.updateMessage.bind(this);
    }

   updateMessage(e,type){
                        console.log('updateMessage');
                        this.setState({
                                      message : "update (from change state)"    
                                      
                        });
   }
 
   render(){
         console.log('Nav component '+this.state);
     
    return (
        <div id="navbrand"> {this.state.message}
        <h2> state {this.state.message} </h2>
        <h2> props {this.props.name} </h2>
        <button type="button" onClick={this.updateMessage}> click me  </button>
        
        </div>
        );
   }
 }

export default NavComponent;