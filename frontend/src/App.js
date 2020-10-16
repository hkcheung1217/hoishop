import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen/ProductScreen";
import CartScreen from "./components/screens/CartScreen/CartScreen";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./components/screens/ProfileScreen/ProfileScreen";
import ShippingScreen from "./components/screens/ShippingScreen/ShippingScreen";
import PaymentScreen from "./components/screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen/PlaceOrderScreen";
import OrderScreen from "./components/screens/OrderScreen/OrderScreen";
import UserListScreen from "./components/screens/UserListScreen/UserListScreen";
import UserEditScreen from "./components/screens/UserEditScreen/UserEditScreen";
import ProductListScreen from "./components/screens/ProductListScreen/ProductListScreen";
import ProductEditScreen from "./components/screens/ProductEditScreen/ProductEditScreen";
import OrderAdminScreen from "./components/screens/OrderAdminScreen/OrderAdminScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/search/:keyword" component={HomeScreen} />
            <Route
              exact
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
            />
            <Route exact path="/page/:pageNumber" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Route exact path="/shipping" component={ShippingScreen} />
            <Route exact path="/payment" component={PaymentScreen} />
            <Route exact path="/placeorder" component={PlaceOrderScreen} />
            <Route exact path="/order/:id" component={OrderScreen} />
            <Route exact path="/admin/userlist" component={UserListScreen} />
            <Route
              exact
              path="/admin/user/:id/edit"
              component={UserEditScreen}
            />
            <Route
              exact
              path="/admin/productlist"
              component={ProductListScreen}
            />
            <Route
              exact
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
            />
            <Route
              exact
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route exact path="/admin/orderlist" component={OrderAdminScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
