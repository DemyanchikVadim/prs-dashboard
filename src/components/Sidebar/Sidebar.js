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

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"> <i className="icon-home"></i> Главная</Link>
            </li>
            <li className={this.activeRoute("/reports")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-docs"></i> Нарушения</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/reports/crosswalk'} className="nav-link" activeClassName="active"> Парковка на пешеходном переходе</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/sidewalk'} className="nav-link" activeClassName="active"> Парковка на тротуаре</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/invalid'} className="nav-link" activeClassName="active"> Парковка на месте для инвалидов</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/forbidden'} className="nav-link" activeClassName="active"> Парковка под знаком "стоянка запрещена"</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/secondrow'} className="nav-link" activeClassName="active"> Парковка вторым рядом</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute("/instructions")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-note"></i> Инструкции</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/instructions/crosswalk'} className="nav-link" activeClassName="active"> Парковка на пешеходном переходе</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/sidewalk'} className="nav-link" activeClassName="active"> Парковка на тротуаре</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/invalid'} className="nav-link" activeClassName="active"> Парковка на месте для инвалидов</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/forbidden'} className="nav-link" activeClassName="active"> Парковка под знаком "стоянка запрещена"</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/instructions/secondrow'} className="nav-link" activeClassName="active"> Парковка вторым рядом</Link>
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
                  <a target="_blank" href="http://pdd.by/pdd/ru/" className="nav-link" activeClassName="active"> ПДД он-лайн</a>
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
              <Link to={'/map'} className="nav-link" activeClassName="active"> <i className="icon-map"></i> Карта нарушений</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
