import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// default import
import utilities from './utils.js';

// normal import using alias
import * as utils from './utils.js';
// normal import using destructure
// import { options, details } from './utils.js';
import './App.css'
import Movie from './components/Movie';

const movies = [
  { name: 'Jawan', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg', lead: 'Shah Rukh Khan' },
  { name: 'Jailer', imageUrl: 'https://static.toiimg.com/photo/102602413.cms?imgsize=963075', lead: 'Rajinikanth' }
]

function App() {

  return (
    <>
      <Movie title={movies[0].name} lead={movies[0].lead} />
      <Movie title={movies[1].name} lead={movies[1].lead} />
    </>
  )
}

export default App;
