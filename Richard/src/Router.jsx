import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './components/Layout';

function AppRouter() {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites([...favorites, item]);
    };

    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage addToFavorites={addToFavorites} />} />
                    <Route path="/favorites" element={<FavoritesPage favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRouter;
