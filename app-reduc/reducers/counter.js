export default (state = 0 , { type, score }) => {
  // console.log(' state score  :' + score); 
  // console.log(' state action :' + state); 
   switch (type) {
         case  'INCREMENT' :
               return state + score ;
         case 'DECREMENT'  :
               return state - score ;  
         default :
               return state ;
   }        
};
