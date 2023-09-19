import axios from 'axios';

export const GET_FORM = 'GET_FORM';
export const POST_FORM = 'POST_FORM';


//traigo el formulario completo
export const getFormData = () => {
  return async (dispatch) => {
    try {
      const getFormData = await axios.get('/formData');
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
      const postFormData = await axios.post('/formData', data);
      dispatch({
        type: POST_FORM,
        payload: postFormData
      })
    } catch (error) {
      console.error(error.message);
    }
  }
}
