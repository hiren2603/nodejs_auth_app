import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, Blog, Dashboard, Contact, About } from "./pages";
import Private from "./Private";
import { Navbar } from "./components";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route element={<Private />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blog' element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
