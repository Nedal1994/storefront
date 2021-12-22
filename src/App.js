import Catogries from "./compononts/Categories";
import Footer from "./compononts/Footer";
import Header from "./compononts/Header";
import Product from "./compononts/Product";
import Cart from "./compononts/Cart";
import SimpleCart from "./compononts/SimpleCart";


function App() {
  return (
    <div className="App">
       <Header />
      <Catogries />
      <Cart />
      <SimpleCart />
      < Product />
      <Footer />

     
    </div>
  );
}

export default App;
