import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { setReports } from '../../actions/AppActions';
import { bindActionCreators } from 'redux';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggleFirst = this.toggleFirst.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.toggleThree = this.toggleThree.bind(this);
    this.toggleFour = this.toggleFour.bind(this);
    this.toggleFive = this.toggleFive.bind(this);

    this.state = {
      dropdownFirst: false,
      dropdownTwo: false,
      dropdownThree: false,
      dropdownFour: false,
      dropdownFive: false,
    };
  }

  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }

  toggleFirst() {
    this.setState({
      dropdownFirst: !this.state.dropdownFirst
    });
  }

  toggleTwo() {
    this.setState({
      dropdownTwo: !this.state.dropdownTwo
    });
  }

  toggleThree() {
    this.setState({
      dropdownThree: !this.state.dropdownThree
    });
  }

  toggleFour() {
    this.setState({
      dropdownFour: !this.state.dropdownFour
    });
  }

  toggleFive() {
    this.setState({
      dropdownFive: !this.state.dropdownFive
    });
  }

  render() {
    const { reports } = this.props;
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownFirst} toggle={this.toggleFirst}>
                    <button onClick={this.toggleFirst} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>
                      <DropdownItem>Смотреть</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">{reports.length}</h4>
                <p>Количество нарушений</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Парковка на тротуаре</h5>
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownTwo} toggle={this.toggleTwo}>
                    <button onClick={this.toggleTwo} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>
                      <DropdownItem>Смотреть</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">{reports.length}</h4>
                <p>Количество нарушений</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Парковка на пешеходном переходе</h5>
                <br />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownThree} toggle={this.toggleThree}>
                    <button onClick={this.toggleThree} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>
                      <DropdownItem>Смотреть</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">{reports.length}</h4>
                <p>Количество нарушений</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Парковка на месте для инвалидов</h5>
                <br />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownFour} toggle={this.toggleFour}>
                    <button onClick={this.toggleFour} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>
                      <DropdownItem>Смотреть</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">{reports.length}</h4>
                <p>Количество нарушений</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Парковка под знаком "стоянка запрещена"</h5>
                <br />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.dropdownFive} toggle={this.toggleFive}>
                    <button onClick={this.toggleFive} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                      <i className="icon-settings"></i>
                    </button>

                    <DropdownMenu>
                      <DropdownItem>Смотреть</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">{reports.length}</h4>
                <p>Количество нарушений</p>
              </div>
              <div className="chart-wrapper px-3">
                <h5 className="mb-0">Парковка вторым рядом</h5>
                <br />
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setReports,
  }, dispatch),
});

function mapStateToProps(state) {
  return {
    reports: state.reports,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
