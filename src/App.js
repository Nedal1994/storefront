import Catogries from "./compononts/Categories";
import Footer from "./compononts/Footer";
import Header from "./compononts/Header";
import Product from "./compononts/Product";
import Cart from "./compononts/Cart";
import SimpleCart from "./compononts/SimpleCart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserForm from "./compononts/cart/UserForm";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>{" "}
        <Switch>
          <Route path="/cart">
            <UserForm />
          </Route>
          <Route path="/">
            <Header />
            <Catogries />
            <Cart />
            <SimpleCart />
            <Product />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;