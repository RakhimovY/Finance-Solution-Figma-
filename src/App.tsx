import Header from "./components/Header";
import Advantages from "./components/pages/Advantages";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Advantages />
      <footer className="footer"> Copyright Кристина Ветрова</footer>
    </div>
  );
}

export default App;
