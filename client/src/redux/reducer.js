//importo las actions
import { GET_FORM } from "./actions";

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

  default:
    return{ ...state }
  }
}

export default reducer;
