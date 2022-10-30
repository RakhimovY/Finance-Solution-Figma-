import Header from "./components/Header";
import Advantages from "./components/pages/Advantages";
import Advice from "./components/pages/Advice";
import Clients from "./components/pages/Clients";
import Footer from "./components/pages/Footer";
import GetInTouch from "./components/pages/GetInTouch";
import Introduce from "./components/pages/Introduce";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Advantages />
      <Advice />
      <Introduce />
      <Clients />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
