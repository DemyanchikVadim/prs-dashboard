import React from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../validations/login';
import { login } from '../../actions/AppActions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  state = {
    identifier: '',
    password: '',
    errors: {},
    loading: false,
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
      this.props.login(this.state)
        .then(
          () => {
            this.context.router.push('/');
          })
        .catch(
          (err) => {
            this.setState({ errors: err.response.data.errors, loading: false })
          });
    }
  };

  render() {
      return (
      <form className="col-md-8" onSubmit={this.handleSubmit}>
        {this.state.errors.global && <div className="alert alert-danger"><p>{this.state.errors.global}</p></div> }
        <div className="card-group mb-0">
          <div className="card p-4">
            <div className="card-block">
              <h1>Система фиксации нарушений автопарковки</h1>
              <p className="text-muted">Введите имя и пароль</p>
              <span style={ {"color" : "red"} }>{this.state.errors.identifier}</span>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="icon-user"></i></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Имя"
                  value={this.state.identifier}
                  onChange={this.handleChange}
                  name="identifier"/>
              </div>
              <span style={ {"color" : "red"} }>{this.state.errors.password}</span>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Пароль"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"/>
              </div>
              <div className="row">
                <div className="col-6">
                  <button type="submit" className="btn btn-primary px-4">Войти</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      )
  }
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
