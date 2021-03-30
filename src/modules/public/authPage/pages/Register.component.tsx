import React, { useState, memo } from 'react';
import { useHistory } from 'react-router-dom';

interface RegisterProps {
  onRegister: Function;
}

const Register: React.FC<RegisterProps> = props => {
  const [email, setEmail] = useState('ittroller2@gmail.com');
  const [password, setPassword] = useState('abc123');
  const history = useHistory();

  const redirectTo = () => {
    history.push('/login');
  };

  const onRegisterAccount = (event: any) => {
    event.preventDefault();
    props.onRegister({ email, password, redirectTo });
  };

  return (
    <div className="auth-form">
      <h3>Register</h3>
      <form onSubmit={e => onRegisterAccount(e)}>
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
