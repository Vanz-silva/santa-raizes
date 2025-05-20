import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Statistics from "./components/Statistics";
import GridArvores from "./components/GridArvores";
import Importance from "./components/Importance";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Statistics />
      <GridArvores />
      <Importance />
      <Footer />
    </div>
  );
}
