import PropTypes from 'prop-types';

// import './movie.css';

// import styles from './movie.module.css';

import { movieCard, divContainer } from './movie.module.css';

function Movie(props) {
  return (
    // className="movie-card div-container"
    // <div className={`${styles['movieCard']} ${styles['divContainer']}`} >
    <div className={`${movieCard} ${divContainer}`} >
      {/* <img src='https://image.com/image.png' style="height: 200px; width: 100px" />*/}
      <img src={props.imageUrl} style={{ height: '200px', width: '150px' }} />
      Title: {props.title}
      <br />
      Lead: {props.lead}
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Movie;