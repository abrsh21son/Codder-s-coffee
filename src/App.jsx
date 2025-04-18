import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      
      <Footer />
    </div>
  );
};

export default App;
