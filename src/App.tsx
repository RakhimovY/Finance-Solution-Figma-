import Header from "./components/Header";
import Advantages from "./components/pages/Advantages";
import Advice from "./components/pages/Advice";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Advantages />
      <Advice />
      <footer className="footer"> Copyright Rakhimov Yerkebulan</footer>
    </div>
  );
}

export default App;
