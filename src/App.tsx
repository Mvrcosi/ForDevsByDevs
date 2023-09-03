import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Navbar from "./layouts/header/Navbar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/Home";


type AppProps = {
  
};

const App:React.FC<AppProps> = () => {
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/auth" element={<AuthPage />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      <Footer />
    </Router>
)
}
export default App;