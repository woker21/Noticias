import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function HomePage({ addToFavorites }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://www.elmundotoday.com/wp-json/wp/v2/posts')
            .then(response => setNews(response.data))
            .catch(error => console.error('Error fetching the news:', error));
    }, []);

    return (
        <Container>
            <h1>Latest News</h1>
            <NewsList>
                {news.map(item => (
                    <NewsItem key={item.id} onClick={() => addToFavorites(item)}>
                        <h2>{item.title.rendered}</h2>
                        <a href={item.link}>Ver mas</a>
                    </NewsItem>
                ))}
            </NewsList>
        </Container>
    );
}

HomePage.propTypes = {
    addToFavorites: PropTypes.func.isRequired,
};


const Container = styled.div`
  font-family: 'YourChosenFont', sans-serif;
  display: flex;
  flex-direction: column;
  & h1{
    margin-left: 7%;
  }
`;

const NewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
`;

const NewsItem = styled.div`
  padding: 10px;
  max-width: 300px;
  box-shadow: 9px 18px 19px -8px rgba(97,97,97,1);
  border-radius: 20px;
  &:hover{
    cursor: pointer;
  }
`;


export default HomePage;
