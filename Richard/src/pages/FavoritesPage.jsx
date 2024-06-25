import styled from 'styled-components';
import PropTypes from 'prop-types';

function FavoritesPage({ favorites, removeFromFavorites }) {
  return (
    <FavoritesContainer>
      <h1>Favorites</h1>
      <FavoritesList>
        {favorites.map(item => (
          <FavoriteItem key={item.id} onClick={() => removeFromFavorites(item.id)}>
            <h2>{item.title.rendered}</h2>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Ver más</a>
          </FavoriteItem>
        ))}
      </FavoritesList>
    </FavoritesContainer>
  );
}

FavoritesPage.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

const FavoritesContainer = styled.div`
  font-family: 'YourChosenFont', sans-serif;
  display: flex;
  flex-direction: column;
  & h1 {
    margin-left: 7%;
  }
`;

const FavoritesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const FavoriteItem = styled.div`
  padding: 10px;
  max-width: 300px;
  box-shadow: 9px 18px 19px -8px rgba(97,97,97,1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;


export default FavoritesPage;
