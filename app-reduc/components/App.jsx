import React from 'react' ;

import {connect} from 'react-redux' ;

import {increment,decrement} from '../actions/action';

const App = ({message, counter, dispatch}) => (

   <div> 
    <div>
       <h3> oerytr {counter} </h3>
    </div>  

    <div>
       <button onClick={() => dispatch(increment(1))} > +1 </button>
       <button onClick={() => dispatch(increment(2))} > +2 </button>
       <button onClick={() => dispatch(increment(3))} > +3 </button>
    </div>

    <div>
       <button onClick={() => dispatch(decrement(1))} > -1 </button>
       <button onClick={() => dispatch(decrement(2))} > -2 </button>
       <button onClick={() => dispatch(decrement(3))} > -3 </button>
    </div>

   </div> 
);

const mapStateToProps = state => ({           
           message : ' message from mapStateTOProps' ,
           counter : state.counter||0
})

 const AppWithConnect = connect(mapStateToProps)(App); 

 export default AppWithConnect;
