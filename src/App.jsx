import "./App.css";
import MainLayaout from "./Layout/MainLayaout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <MainLayaout />
      <ToastContainer />
    </>
  );
}

export default App;
