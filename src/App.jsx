import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
    <SmoothScroll />
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;