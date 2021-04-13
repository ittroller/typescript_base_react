import React, { useState, memo } from 'react';
// import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('ittroller2@gmail.com');
  const [password, setPassword] = useState('abc123');

  return (
    <div className="auth-form">
      <h3>Register</h3>
      <form>
        <div>
          <p>Email</p>
          <input placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default memo(Register);
