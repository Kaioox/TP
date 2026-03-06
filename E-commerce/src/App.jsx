import { useState } from 'react';
import Produit from './Produit';
import Panier from './Panier';

function App() {
    const [page, setPage] = useState('boutique');
    const [panier, setPanier] = useState([]);

    const ajouterAuPanier = (produit) => {
        const existeDeja = panier.find(item => item.id === produit.id);
        if (existeDeja) {
            setPanier(panier.map(item => 
                item.id === produit.id ? { ...item, quantite: item.quantite + 1 } : item
            ));
        } else {
            setPanier([...panier, { ...produit, quantite: 1 }]);
        }
    };

    return (
        <div>
            <nav className="navbar">
                <h2>Ma Boutique</h2>
                <button onClick={() => setPage('panier')}>
                    Mon Panier ({panier.reduce((acc, item) => acc + item.quantite, 0)})
                </button>
            </nav>
            <main>
            {page === 'boutique' ? (
                <Produit onAjouter={ajouterAuPanier} />
            ) : (
                <Panier items={panier} setItems={setPanier} setPage={setPage} />
            )}
            </main>
        </div>
    );
}

export default App;