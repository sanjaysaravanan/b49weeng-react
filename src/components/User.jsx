// Desing or JSX Element needed for User Component

// Keep the name of the component same as the file name

import PropTypes from 'prop-types';

import { imageContainer } from './user.module.css';
import { useState } from 'react';

function User(props) {

  const isBtnVisible = true;

  const { fullName, imageUrl, email, isSingle,
    increseLikeVal, decreaseLikeVal } = props;

  const [like, setLike] = useState(false);

  const handleClick = (e) => {
    console.log(e);
    alert(`Click on ${fullName}`);
  }

  const handleOver = () => {
    // console.log(e);
  }

  const handleLike = () => {
    if (like) {
      setLike(false);
      decreaseLikeVal();
    } else {
      setLike(true);
      increseLikeVal();
    }
  }

  return (
    <div
      className={imageContainer}
      onMouseOver={handleOver}
    >
      <img src={imageUrl} alt={fullName} />
      <br />
      Name: {fullName}<br />
      Email: {email ? email : 'Not Found'}<br />
      {isBtnVisible && (
        <button
          onClick={handleClick}
        >
          Click Me
        </button>
      )}
      <br />
      Status: {isSingle ? 'Single' : 'Committed'}
      <button onClick={handleLike} >
        {/* {like ? <i className="fa-solid fa-thumbs-up"></i> :
          <i className="fa-regular fa-thumbs-up"></i>} */}

        <i className={`fa-${like ? 'solid' : 'regular'} fa-thumbs-up`}></i>
      </button>
    </div >
  );
}

User.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  isSingle: PropTypes.bool.isRequired,
  increseLikeVal: PropTypes.func.isRequired,
  decreaseLikeVal: PropTypes.func.isRequired,
}

export default User;