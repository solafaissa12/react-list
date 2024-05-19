import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content1 from "./Content1/Content1";
import AddItem from "./AddItem/AddItem";
import SearchItem from "./SearchItem/SearchItem";
/* import CodeChallenge1 from "./CodeChallenge1/CodeChallenge1"; */

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const AddNewItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handlechange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handledelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    if (!newItem) return;
    e.preventDefault();
    AddNewItem(newItem);
    setNewItem("");
  };
  return (
    <div>
      <Header title="List" />

      <div className="style">
        <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />

        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

        <main style={{ width: "50%" }}>
          <Content1
            items={items.filter((item) =>
              item.item.toLowerCase().includes(searchItem.toLowerCase())
            )}
            setItems={setItems}
            handlechange={handlechange}
            handledelete={handledelete}
          />
        </main>
      </div>

      {/* <CodeChallenge1 /> */}

      <Footer length={items.length} />
    </div>
  );
};

export default App;
