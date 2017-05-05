import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <button onClick={this.toggle} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>

                      <DropdownItem>Смотреть</DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">9</h4>
                <p>Количество заявок</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Стоянка на тротуаре</h5>
                <br />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <button onClick={this.toggle} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>

                      <DropdownItem>Смотреть</DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">9</h4>
                <p>Количество заявок</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Стоянка на переходе</h5>
                <br />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <button onClick={this.toggle} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>

                      <DropdownItem>Смотреть</DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">9</h4>
                <p>Количество заявок</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Стоянка на местах для инвалидов</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <button onClick={this.toggle} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>

                      <DropdownItem>Смотреть</DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">9</h4>
                <p>Количество заявок</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Стоянка “Остановка запрещена”</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <button onClick={this.toggle} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>

                      <DropdownItem>Смотреть</DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">9</h4>
                <p>Количество заявок</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Стоянка во втором ряду</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard;
