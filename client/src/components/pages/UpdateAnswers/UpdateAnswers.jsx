import { useDispatch, useSelector } from "react-redux";
import { useEffect /* useState  */ } from "react";
import { answersForm, getFormData, postFormData } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

import style from "./UpdateAnswers.module.css";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import { useFormik } from "formik";
import * as Yup from "yup";

import Swal from 'sweetalert2'

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector((state) => state.Form);
  //console.log(formData, "data del form del estado");

  useEffect(() => {
    dispatch(answersForm());
    dispatch(getFormData());
  }, [dispatch]);

  // Genera initialValues a partir de formData para manejar los estados de name de los campos del formulario
  const initialValues = {};
  formData.forEach((item) => {
    if (item.name) {
      // Asigna un valor inicial vacío para cada campo en formData
      initialValues[item.name] = "";
    }
  });

  const handleSubmit = (data) => {

    try {
      dispatch(postFormData(data))

      //alert('form enviado')
      Swal.fire({
        title: "Respuestas enviadas correctamente correctamente!",
        icon: 'success',
        showConfirmButton: false,
        timer: 2500,
      }) /* .then((result) => {
        if (result) {
          setTimeout(function() {
            window.location.reload()
          }, 300)
        }
      }) */

      navigate('/answer')
      console.log("Datos enviados: ", data);
      // Limpiar el formulario y restablecer los valores iniciales
      /* formik.resetForm(''); */
      /* setTimeout(function() {
        window.location.reload()
      }, 300) */
    } catch (error) {
      console.error(error.message);
    }
  };

  const validationSchema = Yup.object().shape(
    formData.reduce((schema, item) => {
      if (item.name && item.required) {
        schema[item.name] = Yup.string().required("Debes completar este campo");
      }
      return schema;
    }, {})
  );

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });

  //- usar para sacar el id
  /* const answersData = useSelector((state) => state.Answers);

  const answerForm = Object.entries(answersData)
    .map(([key, value]) => {
      if (key !== "id" && key !== "createdAt" && key !== "updatedAt") {
        return value !== null && value !== undefined ? value : "No respondió"; // Cambio aquí para manejar campos vacíos
      }
      return undefined;
    })
    .filter((value) => value !== null && value !== undefined);

  console.log(answerForm, "respuestas del form"); */

  return (
    <div className={style.updateFormContainer}>
      <form className={style.updateForm} onSubmit={formik.handleSubmit}>
      <Typography
        sx={{ mt: 2, mb: 2, textAlign: "center", color: "#EE6C4D" }}
        variant="h4"
      >
        Actualiza tus respuestas
      </Typography>
        <Grid
          container
          spacing={3}
          columns={16}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {formData.map((item, i) => {
            if (
              item.type != "submit" &&
              item.type != "radio" &&
              item.type != "checkbox"
            ) {
              return (
                <Grid item xs={11} md={9} key={i}>
                  <TextField
                    type={item.type}
                    label={item.label}
                    name={item.name}
                    onChange={formik.handleChange}
                    required={item.required}
                    error={formik.errors[item.name]}
                    helperText={formik.errors[item.name]}
                    variant="outlined"
                    sx={{
                      width: 400,
                      maxWidth: "100%",
                    }}
                    InputProps={
                      item.type === "date"
                        ? {
                            startAdornment: (
                              <InputAdornment position="start"></InputAdornment>
                            ),
                          }
                        : {}
                    }
                    select={item.options ? true : false} // Habilita select si item.options está definido
                  >
                    {item.options &&
                      item.options.map((option, index) => (
                        <MenuItem key={index} value={option.label}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </TextField>
                </Grid>
              );
            }
          })}
        </Grid>
  
        {/* Grupo de radio para los botones de selección */}
        {formData.map((item, i) => {
          if (item.type === "radio") {
            return (
              <FormControl
                key={i}
                sx={{ marginTop: "28px" }}
                required={item.required}
              >
                <FormLabel>{item.label}</FormLabel>
                <RadioGroup name={item.name}>
                  {item.options &&
                    item.options.map((option, index) => {
                      return (
                        <FormControlLabel
                          onChange={formik.handleChange}
                          key={index} // Usa el valor de la opción como clave
                          value={option.label} // Usa el valor de la opción como valor
                          control={<Radio />}
                          label={option.label} // Usa la etiqueta de la opción como etiqueta
                        />
                      );
                    })}
                </RadioGroup>
                <FormHelperText error>
                  {formik.errors[item.name]}
                </FormHelperText>
              </FormControl>
            );
          }
        })}
  
        {/* checkbox para la suscripcion del newsletter */}
        {formData.map((item, index) => {
          if (item.type === "checkbox") {
            return (
              <FormGroup sx={{ marginTop: "2px" }} key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={formik.values[item.name] || false} // Usa el valor de formik para el estado del checkbox
                      onChange={(event) => {
                        formik.setFieldValue(item.name, event.target.checked); // Actualiza el valor de formik en el evento onChange
                        //setFieldValue método de formik, usado para el checkbox
                      }}
                    />
                  }
                  label={item.label}
                  labelPlacement="start"
                />
              </FormGroup>
            );
          }
        })}
  
        <Button
          type="submit"
          className={style.button}
          variant="contained"
          size="medium"
          endIcon={<SendIcon />}
          sx={{ marginTop: "22px" }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
