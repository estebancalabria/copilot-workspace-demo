import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <h1>Rick and Morty</h1>
      <div className="d-flex flex-wrap">
        {characters.map(character => (
          <Card key={character.id} style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                Status: {character.status}
                <br />
                Species: {character.species}
                <br />
                Gender: {character.gender}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default RickAndMorty;
