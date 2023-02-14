import React , {useState} from "react";

function ListingCard({item, onItemDeletion}) {
  const {id, description, image, location} = item
  const [favorite, setFavorite] = useState(false)
  

  function handleFavorites(){
    setFavorite(!favorite)
  }

  function handleDeletion(){
    fetch(`http://localhost:6001/listings/${id}`,{
    method:'DELETE',
  })
  .then(res => res.json())
  .then(()=> onItemDeletion(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorites} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorites} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeletion} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
