function Panier({ items, setItems, setPage }) { 
 
    const supprimerItem = (id) => {

        const itemModif = items.find(item => item.id === id);

        if(itemModif.quantite > 1){
            setItems(items.map(item => 
                item.id === id ? { ...item, quantite: item.quantite - 1 } : item
            ));
        }
        else{
            setItems(items.filter(item => item.id !== id));
        }
    };

    const totalGeneral = items.reduce((acc, item) => acc + (item.price * (item.quantite || 1)), 0);

    return (
        <div className="panier-container">
            <button onClick={() => setPage('boutique')}>← Retour à la boutique</button>
            <h2>Votre Panier</h2>
            {items.length === 0 ? <p>Le panier est vide.</p> : (
                <>
                    {items.map((item) => (
                        <div key={item.id} className="panier-item" style={{display: 'flex', gap: '20px', borderBottom: '1px solid #ddd', padding: '10px'}}>
                            <img src={item.image} alt={item.title} style={{width: '50px'}} />
                            <div>
                                <h4>{item.title}</h4>
                                <p>Prix : {item.price}€</p>
                                <p>Nombre article : {item.quantite || 1}</p>
                                <p>Total : {(item.price * (item.quantite || 1)).toFixed(2)}€</p>
                                <button onClick={() => supprimerItem(item.id)}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total Commande : {totalGeneral.toFixed(2)}€</h3>
                </>
            )}
        </div>
    );
}

export default Panier;