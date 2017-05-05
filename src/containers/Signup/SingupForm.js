import React from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../validations/signup';
import { connect } from 'react-redux';
import { userSignupRequest, addFlashMessage } from '../../actions/AppActions';

class SignupForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {},
    loading: false
  };

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({loading: true});
      this.props.userSignupRequest(this.state)
        .then(
          () => {
            this.setState({loading: false});
            this.props.addFlashMessage({
              type: 'success',
              text: 'You signed up successfully. Welcome! Please Log In'
            });
            this.context.router.push('/Login');
          })
        .catch(
          (err) => {
            this.setState({ errors: err.response.data.errors, loading: false })
          });
    }
  };

  render() {
    return (
        <form className="col-md-6" onSubmit={this.handleSubmit}>
          <div className="card mx-4">
            <div className="card-block p-4">
              <h1>Регистрация</h1>
              <p className="text-muted">Создайте новый аккаунт</p>
              <span style={ {"color" : "red"} }>{this.state.errors.username}</span>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="icon-user"></i></span>
                <input type="text"
                       className="form-control"
                       value={this.state.username}
                       onChange={this.handleChange}
                       placeholder="Имя"
                       name="username"/>
              </div>
              <span style={ {"color" : "red"} }>{this.state.errors.email}</span>
              <div className="input-group mb-3">
                <span className="input-group-addon">@</span>
                <input type="text"
                       className="form-control"
                       value={this.state.email}
                       onChange={this.handleChange}
                       placeholder="Email"
                       name="email"/>
              </div>
              <span style={ {"color" : "red"} }>{this.state.errors.password}</span>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input type="password"
                       className="form-control"
                       value={this.state.password}
                       onChange={this.handleChange}
                       placeholder="Пароль"
                       name="password"/>
              </div>
              <span style={ {"color" : "red"} }>{this.state.errors.confirmPassword}</span>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input type="password"
                       className="form-control"
                       value={this.state.confirmPassword}
                       onChange={this.handleChange}
                       placeholder="Потдвертиде пароль"
                       name="confirmPassword"/>
              </div>
              <button  className="btn btn-block btn-success" type="submit">Создать аккаунт</button>
            </div>
          </div>
        </form>
    )
  }
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
};

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default connect(null, { userSignupRequest, addFlashMessage })(SignupForm);
