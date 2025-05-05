import { memo, useState } from "react";
import PropTypes from "prop-types";

const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
  console.log("Rendering EmployeeProfile...");
  return (
    <>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
    </>
  );
});

EmployeeProfile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default function EmployeeRegForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div>
        <label>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <hr />
      <EmployeeProfile name={name} />
    </>
  );
}

// React.memo() is a higher-order component.
