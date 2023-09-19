//importo las actions
import { GET_FORM, UPDATE_FORM_DATA } from "./actions";

const initialState = {
  Form: [],
};


const reducer =  (state = initialState, action ) => {
  switch (action.type) {

  case GET_FORM:
    return { 
      ...state, 
      Form: action.payload
    };
    
    case UPDATE_FORM_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
  default:
    return{ ...state }
  }
}

export default reducer;
