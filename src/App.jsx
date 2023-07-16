// import Navbar from "./components/Navbar"
// import About from "./pages/About"
import Home from "./pages/Home"
// import Pricing from "./pages/Pricing"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/skills" />
        <Route path="/contact" />
      </Routes>
      <Home />
      {/* <Navbar /> */}
      {/* <div className="container">
      </div> */}
    </>
  )
}

export default App
