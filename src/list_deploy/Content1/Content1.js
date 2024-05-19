import "./Content1.css";
import ListItem from "./ListItem";

const Content1 = ({ items, handlechange, handledelete }) => {
  return (
    <>
      {items.length ? (
        <ListItem
          items={items}
          handlechange={handlechange}
          handledelete={handledelete}
        />
      ) : (
        <p style={{ fontSize: "50px", textAlign: "center" }}>
          Your list is empty
        </p>
      )}
    </>
  );
};

export default Content1;
