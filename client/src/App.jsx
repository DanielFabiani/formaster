import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import AnswersForm from "./components/pages/AnswersForm/AnswersForm";
import UpdateAnswers from "./components/pages/UpdateAnswers/UpdateAnswers";
//import axios from "axios";
//axios.defaults.baseURL = 'http://localhost:3001/';
//axios.defaults.baseURL = 'https://formaster.onrender.com/';
//axios.defaults.baseURL = 'https://formaster-production.up.railway.app/';

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
