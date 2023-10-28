import PropTypes from "prop-types";

import styles from "./FlipCard.module.css";

const FlipCard = ({ image }) => {
  return (
    <div className={styles["flip-card"]}>
      <div className={styles["flip-card-inner"]}>
        <div className={styles["flip-card-front"]}>
          <img src={image} alt="Avatar" style="width:300px;height:300px;" />
        </div>
        <div className={styles["flip-card-back"]}>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default FlipCard;
