import React, { useState, useEffect } from 'react';  //useeffect para lyfecicle

export default function App() {

  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived)
  }, []);

  function handlePositionReceived({coords}) {
    const { latitude, longitude } = coords;


    setLocation({ latitude, longitude })

    
    console.log(location);
  }

  return (
    <>
    Latitude: {location.latitude} <br/>
    Longitude: {location.longitude}
    </>
  );

}
/*  const [repositories, setRepositories] = useState([]); 

  antes era assim state = {
      repositories: []
  } 

  useEffect(async () => {  //didMounth
     const response =  await fetch('https://api.github.com/users/karencplara/repos')
     const data = await response.json();

     setRepositories(data);
  }, []);

  useEffect(() => {  //didUpdate trocar lá em cima na tela
     const filtered = repositories.filter(repo => repo.favorite);
     document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories])

 function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
       return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });

    setRepositories(newRepositories);
 }  
  return (
    <> 
  //   <ul>
  //     {repositories.map(repo => (
  //       <li key={repo.id}>
  //         {repo.name}
  //         {repo.favorite && <span>(Favorito)</span>}
  //         <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
  //       </li>
  //     ))}
  //   </ul>
   
  //   </>
  // ) 

*/
