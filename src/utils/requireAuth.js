import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/AppActions';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'Для доступа к этой странице вамvvdas необходимо войти в систему'
        });
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  };

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}