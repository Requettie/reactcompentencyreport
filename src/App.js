import "./App.css";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello there welcome</h1>
      <button>Click me</button>

      <Catalog></Catalog>

      <Footer></Footer>

      <footer></footer>
    </div>
  );
}

export default App;
