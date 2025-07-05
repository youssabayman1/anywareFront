import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authReducer/auth';
import LoginContainer from '../componant/loginContainer';
import LoginCard from '../componant/loginCard';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    navigate('/dash');
  };

  return (
    <LoginContainer>
      <LoginCard onLogin={handleLogin} />
    </LoginContainer>
  );
};

export default LoginPage;
