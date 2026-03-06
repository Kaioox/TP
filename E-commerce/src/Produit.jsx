import { useState, useEffect } from 'react';
import './Produit.css';

function Produit({ onAjouter }) { 
  const [produits, setProduits] = useState([]);
const [loading, setLoading] = useState(true); // Nouvel état

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProduits(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loader">Chargement des produits en cours...</div>;
  }

  return (
    <>
      <h1>Liste des produits</h1>
      <p>Total : {produits.length} produits</p>
      
      <div className="products-container">
        {produits.map((item) => (
          <div className="productCard" key={item.id}>
            <h1>{item.title}</h1>
            <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
            </div>
            <p>Prix : <strong>{item.price}€</strong></p>
            <button onClick={() => onAjouter(item)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Produit;