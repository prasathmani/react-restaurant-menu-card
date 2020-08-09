import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import MenuCard from "./components/MenuCard";
import MenuView from "./components/MenuView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import menuData from "./menu-data.json";

function App() {
  const menuDataArr = Object.keys(menuData).map((key) => menuData[key]);
  const [menuItems, setMenuItems] = useState(menuDataArr);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const history = useHistory();

  /**
   * Get the menu list index
   * @param {Number} id
   */
  const getIndex = (id) => menuItems.findIndex((menu) => menu.itemId === id);

  /**
   * On selection of Card navigate to card view
   * @param {Number} id
   */
  const handleCard = (id) => {
    const index = getIndex(id);
    setSelectedMenu(menuItems[index]);
    history.push("/view");
  };

  /**
   * Hanlde menu item save and update the state
   * @param {Event} e
   */
  const handleSave = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const index = getIndex(parseInt(data.id));
    if (index) {
      const newItems = [...menuItems];
      newItems[index].price = parseInt(data.price);
      newItems[index].available = data.available ? true : false;
      setMenuItems(newItems);
      toast.success("Menu item has updated successfully!");
      console.log(newItems);
    } else {
      toast.error("Try again!");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Row>
                {menuItems.map((menu, i) => (
                  <Col key={i}>
                    <MenuCard data={menu} handleCard={handleCard} />
                  </Col>
                ))}
              </Row>
            )}
          />
          <Route
            path="/view"
            exact
            render={() => (
              <MenuView data={selectedMenu} handleSave={handleSave} />
            )}
          />
        </Switch>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </>
  );
}

export default App;
