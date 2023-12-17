import { BrowserRouter as Routes } from "react-router-dom";
import { Top } from "./pages/top";
import "@/scss/index.scss";


function App() {
  return (
    <Routes>
      <Top />
    </Routes>
  );
}

export default App;

