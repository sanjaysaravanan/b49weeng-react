import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const PopUp = ({ handleSubmit, color }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // statements for mounted phase
    alert("Hey Your comp is Mounted");

    return () => {
      // statements for unmount phase
      alert("Hey You have removed the Component");
    };
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    handleSubmit({
      email,
      password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <form
      style={{
        background: color,
        padding: "10px",
      }}
      onSubmit={formSubmit}
    >
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        value={email}
        onChange={(e) => {
          const { value } = e.target;
          setEmail(value);
        }}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        value={password}
        onChange={(e) => {
          const { value } = e.target;
          setPassword(value);
        }}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

PopUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

const LifeCycleThree = () => {
  const [popUp, setPopUp] = useState(false);

  const [color, setColor] = useState("#ccc");

  // array of Objects( email, password )
  const [credentials, setCredentials] = useState([
    { email: "Sanjay@email.com", password: "Sanjay" },
  ]);

  // this function has to be called from child
  // so we pass this function as a attribute/prop to the child
  const handleSubmit = (obj) => {
    setCredentials([...credentials, obj]);
  };

  const handleColorChange = (e) => {
    const { value } = e.target;

    setColor(value);
  };

  console.log(color);

  return (
    <div style={{}}>
      <button onClick={() => setPopUp(!popUp)}>
        {popUp ? "Hide" : "Show"} Form
      </button>
      <input type="color" value={color} onChange={handleColorChange} />
      {popUp && <PopUp handleSubmit={handleSubmit} color={color} />}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {credentials.map((cred) => (
            <tr key={cred.email}>
              <td>{cred.email}</td>
              <td>{cred.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LifeCycleThree;
