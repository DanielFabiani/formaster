import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";

import axios from "axios";
import AnswersForm from "./components/pages/AnswersForm/AnswersForm";
import UpdateAnswers from "./components/pages/UpdateAnswers/UpdateAnswers";
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<AnswersForm />} />
        <Route path="/update" element={<UpdateAnswers />} />
      </Routes>
    </div>
  );
}

export default App;
