
import React, { useState } from 'react';
import '../Styles/Userprofile.css'; 

function UserProfile() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Age: ${age}, Country: ${country}`);
  };

  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserProfile;
