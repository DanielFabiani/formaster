import axios from 'axios';

export const GET_FORM = 'GET_FORM';
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

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

export const updateFormData = (data) => ({
  type: UPDATE_FORM_DATA,
  payload: data,
});