//importo las actions
import { ANSWERS, GET_FORM, PATCH_FORM, POST_FORM } from "./actions";

const initialState = {
  Form: [],
  PostForm: [],
  Answers: [],
  Update: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM:
      return {
        ...state,
        Form: action.payload,
      };

    case POST_FORM:
      return { 
        ...state,
        PostForm: action.payload 
      };

    case ANSWERS:
      return {
        ...state,
        Answers: action.payload
      };
    
    case PATCH_FORM:
      return {
        ...state,
        Update: action.payload
      };

    default:
      return { ...state };
  }
};

export default reducer;
