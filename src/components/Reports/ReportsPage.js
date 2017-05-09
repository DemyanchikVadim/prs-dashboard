import React from 'react';
import ReportsList from './ReportsList';

class ReportsPage extends React.Component {
  componentDidMount() {
    const { setReports } = this.props.actions;
    setReports();
  }
  constructor(props) {
    super(props);
    this.state = {
      large: false,
    };

    this.toggleLarge= this.toggleLarge.bind(this);
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="row content">
        <ReportsList reports={this.props.reports} toggleLarge={this.toggleLarge} large={this.state.large} />
      </div>
    );
  }
}

export default ReportsPage;
