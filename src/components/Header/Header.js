import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { logout,  setReports } from '../../actions/AppActions';
import { bindActionCreators } from 'redux';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }


  toggle(e) {
    e.preventDefault();
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  logout(e) {
    e.preventDefault();
    this.props.actions.logout();
  };

  render() {
    const { reports } = this.props;
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">{reports.length}</span></a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <span className="d-md-down-none">admin</span>
              </a>
              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem><i className="fa fa-lock"></i> <a href="#" onClick={this.logout}>Выйти</a></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setReports,
    logout,
  }, dispatch),
});

function mapStateToProps(state) {
  return {
    auth: state.auth,
    reports: state.reports,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
