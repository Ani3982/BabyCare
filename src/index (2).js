import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Baby from "./Pages/Baby";
import Mother from "./Pages/Mother";
import DietSection from "./Pages/Diet";
import Feedback from "./Pages/Feedback";
import Immunization from "./Pages/immunization"; // Corrected import path
import Hygiene from "./Pages/hygine";
import Exercise from "./Pages/exercise";
import Wellbeing from "./Pages/wellbeing";
import Lbw from "./Pages/Lbw";
import Dos from "./Pages/Dos";
import Mental from "./Pages/Mental";
import Physical from "./Pages/Physical";
import Emotional from "./Pages/Emotional";
import Product from "./Pages/name";
import OrderSummary from './Pages/OrderSummary';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Container-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baby" element={<Baby />} />
          <Route path="/mother" element={<Mother />} />
          <Route path="/diet" element={<DietSection />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/immunization" element={<Immunization />} /> {/* Corrected route */}
          <Route path="/hygine" element={<Hygiene />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/wellbeing" element={<Wellbeing />} />
          <Route path="/Lbw" element={<Lbw />} />
          <Route path="/Dos" element={<Dos/>}/>
          <Route path="/Physical"element={<Physical/>}/>
          <Route path="/Emotional" element={<Emotional/>}/>
          <Route path="/Mental" element={<Mental/>}/>
          <Route path="/name" element={<Product />}/>
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
