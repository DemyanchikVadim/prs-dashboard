import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"> <i className="icon-home"></i> Главная</Link>
            </li>
            <li className={this.activeRoute("/reports")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-docs"></i> Заявки</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/reports/crosswalk'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> На переходе</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/sidewalk'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> На тротуаре</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/invalid'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> На местах для инвалидов</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/forbidden'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> Под знаком “Остановка запрещена”</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/secondrow'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> Стоянка во втором ряду</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/instructions")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-note"></i> Инструкции</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/instructions/crosswalk'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> На переходе</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/sidewalk'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> На тротуаре</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/invalid'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> На местах для инвалидов</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/forbidden'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> Под знаком “Остановка запрещена”</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/secondrow'} className="nav-link" activeClassName="active"><i className="icon-doc"></i> Стоянка во втором ряду</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/rules")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-notebook"></i> ПДД</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/rules'} className="nav-link" activeClassName="active">Остановка и стоянка транспортных средств.</Link>
                </li>
                <li className="nav-item">
                  <a target="_blank" href="http://pdd.by/pdd/ru/" className="nav-link" activeClassName="active">    ПДД он-лайн</a>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/administrations")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-people"></i> Управление</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link" activeClassName="active"><i className="icon-login"></i> Логин</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signup'} className="nav-link" activeClassName="active"><i className="icon-user-follow"></i> Регистрация</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/users'} className="nav-link" activeClassName="active"><i className="icon-user"></i> Пользователи</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={'/map'} className="nav-link" activeClassName="active"> <i className="icon-map"></i> Ямы</Link>
            </li>
            <li className="nav-title">
              UI Elements
            </li>
            <li className={this.activeRoute("/components")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Components</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/components/buttons'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Buttons</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/social-buttons'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Social Buttons</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/cards'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Cards</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/forms'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Forms</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/modals'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Modals</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/switches'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Switches</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/tables'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Tables</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/tabs'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Tabs</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/icons")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Icons</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/icons/font-awesome'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Font Awesome</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/icons/simple-line-icons'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Simple Line Icons</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={'/widgets'} className="nav-link" activeClassName="active"><i className="icon-calculator"></i> Widgets <span className="badge badge-info">NEW</span></Link>
            </li>
            <li className="nav-item">
              <Link to={'/charts'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Charts</Link>
            </li>
            <li className="divider"></li>
            <li className="nav-title">
              Extras
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Pages</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/pages/login'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/register'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Register</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/404'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Error 404</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/500'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Error 500</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
