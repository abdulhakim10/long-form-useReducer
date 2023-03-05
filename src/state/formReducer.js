import { actionTypes } from "./actionType";

 
  // initial state declare
 export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    quantity: 0,
    feedback: "",
    term: false

  }

  // reducer function
 export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.INPUT:
        return{
          ...state,
         [ action.payload.name]: action.payload.value
        };
        case actionTypes.TOGGLE:
          return{
            ...state,
            term: !state.term
          };
          case actionTypes.INCREMENT:
            // console.log(quantity)
            return {
                ...state ,
                quantity: state.quantity + action.payload
            };
          case actionTypes.DECREMENT:
            // console.log(quantity)
            return {
                ...state ,
                quantity: state.quantity - action.payload
            };
            

      default:
        return state;
    }
  }