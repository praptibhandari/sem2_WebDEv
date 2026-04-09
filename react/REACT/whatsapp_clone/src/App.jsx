import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Chat from "./components/Chat";
import Notfound from "./components/Notfound";
import Home from "./components/Home";


function App() {
  return (
    <>
      <h1> Whatsapp Clone</h1>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chat/:chatID" element={<Chat />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
 