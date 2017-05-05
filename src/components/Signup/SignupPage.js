import React from 'react';
import SignupForm from '../../containers/Signup/SingupForm';

class SignupPage extends React.Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <SignupForm />
          </div>
        </div>
      </div>
    )
  }
}

export default SignupPage;
