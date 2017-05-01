import React from 'react';
import LoginForm from '../../containers/Login/LoginForm'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;
