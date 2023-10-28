import { useEffect, useState } from "react";
import styles from "./CrudOperations.module.css";
import PropTypes from "prop-types";

import {
  createMovie,
  getAllMovies,
  removeMovie,
  editMovie as alterMovie,
} from "./AxiosCrud";

// import // createMovie,
// // getAllMovies,
// // removeMovie,
// // editMovie as alterMovie,
// "./MoviesCrud";
const initialState = {
  title: "",
  language: "",
  lead: "",
  imageUrl: "",
};

const MovieCard = ({
  id,
  title,
  lead,
  imageUrl,
  language,
  deleteMovie,
  handleEdit,
}) => {
  return (
    <div style={{ border: "1px solid", margin: 8, textAlign: "center" }}>
      <img
        src={imageUrl}
        alt={title}
        style={{ height: 200, width: 150, objectFit: "contain" }}
      />
      <h4>{title}</h4>
      <h5>{lead}</h5>
      <h5>{language}</h5>
      <button onClick={() => deleteMovie(id)}>Remove</button>&nbsp;
      <button onClick={() => handleEdit(id)}>Edit</button>
      <br />
      <br />
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

const CrudOperations = () => {
  const [state, setState] = useState(initialState);
  const [movies, setMovies] = useState([]);

  const [editMovie, setEditMovie] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMovie) {
      const reponseJson = await alterMovie(state, editMovie);
      const editIndex = movies.findIndex((m) => m.id === editMovie);
      const tempMovies = [...movies];

      tempMovies[editIndex] = reponseJson;
      setMovies(tempMovies);
    } else {
      const reponseJson = await createMovie(state);
      setMovies([...movies, reponseJson]);
    }
    setEditMovie(null);
    setState(initialState);
  };

  const loadMovies = async () => {
    setMovies(await getAllMovies());
  };

  const deleteMovie = async (movieId) => {
    await removeMovie(movieId);
    setMovies(movies.filter((m) => m.id !== movieId));
  };

  const handleEdit = (movieId) => {
    setState(movies.find((m) => m.id === movieId));
    setEditMovie(movieId);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className={styles["container"]}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          value={state.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="language">Language</label>
        <br />
        <input
          type="text"
          name="language"
          id="language"
          value={state.language}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lead">Lead Actor</label>
        <br />
        <input
          type="text"
          name="lead"
          id="lead"
          value={state.lead}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="imageUrl">Image Link</label>
        <br />
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={state.imageUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: 48,
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            deleteMovie={deleteMovie}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default CrudOperations;
