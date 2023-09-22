import axios from 'axios';

export const GET_FORM = 'GET_FORM';
export const POST_FORM = 'POST_FORM';
export const ANSWERS = 'ANSWERS';
export const PATCH_FORM = 'PATCH_FORM'


//traigo el formulario completo
export const getFormData = () => {
  return async (dispatch) => {
    try {
      const getFormData = await axios.get('https://formaster-production.up.railway.app/formData');
      const formData = getFormData.data;
      dispatch({
        type: GET_FORM,
        payload: formData
      })
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const postFormData = (data) => {
  return async (dispatch) => {
    try {
      const postFormData = await axios.post('https://formaster-production.up.railway.app/formData', data);
      dispatch({
        type: POST_FORM,
        payload: postFormData
      })
    } catch (error) {
      console.error(error.message);
    }
  }
}

export const patchUserForm = (data) => {
  return async (dispatch) => {
    try {
      const patchData = await axios.patch('https://formaster-production.up.railway.app/formData', data);
      dispatch ({
        type: PATCH_FORM,
        payload: patchData
      })
    }
    catch (error) {
      console.error(error.message);
    }
  }
}

//traigo las respuestas del formulario 
export const answersForm = () => {
  return async (dispatch) => {
    try {
      const answersFormData = await axios.get('https://formaster-production.up.railway.app/formData/answers');
      const answers = answersFormData.data;
      dispatch({
        type: ANSWERS,
        payload: answers
      })
    } catch (error) {
      console.error(error.message);
    }
  }
}
