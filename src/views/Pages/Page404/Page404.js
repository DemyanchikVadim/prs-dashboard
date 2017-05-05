import React, { Component } from 'react';

class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Ой! Вы потерялись.</h4>
              <p className="text-muted">Страница, которую вы ищете, не найдена.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
