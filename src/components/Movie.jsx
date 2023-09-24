

function Movie(props) {
  return (
    <div className="movie-card bg-primary">
      Title: {props.title}
      <br />
      Lead: {props.lead}
    </div>
  )
}

export default Movie;