import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answersForm, getFormData } from "../../../redux/actions";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

const AnswersForm = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.Form);

  const extractLabelValues = (formData) => {
    const labelValues = formData
      .filter((item) => item.label !== "Enviar") // Filtra los elementos cuya etiqueta no sea "Enviar"
      .map((item) => item.label);
    return labelValues;
  };

  const labels = extractLabelValues(formData);
  //console.log(labels, 'labels del form' );

  const answersData = useSelector((state) => state.Answers);

  const answerForm = Object.entries(answersData)
    .map(([key, value]) => {
      if (key !== "id" && key !== "createdAt" && key !== "updatedAt") {
        return value !== null && value !== undefined ? value : "No respondió"; // Cambio aquí para manejar campos vacíos
      }
      return undefined;
    })
    .filter((value) => value !== null && value !== undefined);

  //console.log(answerForm, "respuestas del form");

  const labelValuePairs = labels.map((label, index) => ({
    label,
    answer:
      typeof answerForm[index] === "boolean"
        ? answerForm[index]
          ? "Si"
          : "No"
        : answerForm[index] === undefined
        ? "No"
        : answerForm[index],
  }));

  //console.log(labelValuePairs);

  useEffect(() => {
    dispatch(answersForm());
    dispatch(getFormData());
  }, [dispatch]);

  return (
    <>
      <Typography
        sx={{ mt: 4, mb: 0, textAlign: "center", color: "#F0FCFD" }}
        variant="h4"
      >
        Tus respuestas
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: "50%",
            bgcolor: "#F0FCFD",
            mt: "56px",
            borderRadius: "18px",
            boxShadow: "0 0 6px rgb(240, 252, 253, 0.4)",
          }}
        >
          {labelValuePairs.map((item, index) => {
            return (
              <>
                <ListItem sx={{ textAlign: "center" }} key={index}>
                  <ListItemText
                    primary={item.label}
                    secondary={
                      <Fragment key={index}>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="#EE6C4D"
                        >
                          {item.answer}
                        </Typography>
                      </Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="middle" />
              </>
            );
          })}
        </List>
      </Grid>
    </>
  );
};

export default AnswersForm;
