import React , {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [itemsList, setItemsList] = useState([])

useEffect(()=>{
  fetch('http://localhost:6001/listings')
  .then((res) => res.json())
  .then((items) => setItemsList(items))
},[])


 function handleItemDeletion(deletedItem){
  const deleteItem = itemsList.filter(items => items.id !== deletedItem.id)
  setItemsList(deleteItem)
 }

  function itemSearch(searchedItem){
  const searchItem = itemsList.filter(item => item.description.includes(searchedItem))
  setItemsList(searchItem)
 } 

  return (
    <div className="app">
      <Header onItemSearch={itemSearch}/>
      <ListingsContainer itemsList={itemsList} 
                         onItemDeletion={handleItemDeletion}/>
    </div>
  );
}

export default App;
