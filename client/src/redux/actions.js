import axios from 'axios';

export const GET_FORM = 'GET_FORM';

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
}