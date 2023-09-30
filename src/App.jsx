// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// default import
// import utilities from './utils.js';

// normal import using alias
// import * as utils from './utils.js';
// normal import using destructure
// import { options, details } from './utils.js';
import './App.css'
import Movie from './components/Movie';

const movies = [
  {
    id: 1,
    name: 'Jawan',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg',
    lead: 'Shah Rukh Khan'
  },
  {
    id: 2,
    name: 'Jailer',
    imageUrl: 'https://static.toiimg.com/photo/102602413.cms?imgsize=963075',
    lead: 'Rajinikanth'
  },
  {
    id: 3,
    name: 'Fukr3y',
    imageUrl: 'https://assetscdn1.paytm.com/images/cinema/fukrey__705x750-a9be4510-5b7e-11ee-8273-793d5ca08c06.jpg',
    lead: 'Some Bollywood Actor'
  }
]

function App() {

  return (
    <>
      <div></div>
      <div></div>
      {/* {[
        <div></div>,
        <div></div>
      ]} */}
      {/* <Movie title={movies[0].name} lead={movies[0].lead} />
      <Movie
        title={movies[1].name}
        lead={movies[1].lead}
      />
      <Movie title={movies[2].name} lead={movies[2].lead} /> */}
      {/* {[
        <Movie title={movies[0].name} lead={movies[0].lead} key={movies[0].name} />,
        <Movie
          title={movies[1].name}
          lead={movies[1].lead}
          key={movies[1].name}
        />,
        <Movie title={movies[2].name} lead={movies[2].lead} key={movies[2].name} />
      ]} */}
      {movies.map((movie) => <Movie
        title={movie.name}
        imageUrl={movie.imageUrl}
        lead={movie.lead}
        key={movie.id}
      />)}
    </>
  )
}

export default App;
