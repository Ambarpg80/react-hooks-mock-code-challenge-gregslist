import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemsList, onItemDeletion}) {




  return (
    <main>
      <ul className="cards">
        {itemsList.map(item => <ListingCard key={item.id} 
                                            item={item}
                                            onItemDeletion={onItemDeletion}
                                />   )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
