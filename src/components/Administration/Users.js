import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Пользователи
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-sm">
                  <thead>
                  <tr>
                    <th>Имя пользователя</th>
                    <th>Дата регистрации</th>
                    <th>Роль</th>
                    <th>Статус</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Admin</td>
                    <td>2017/05/07</td>
                    <td>admin</td>
                    <td>
                      <span className="badge badge-success">Активный</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Vadim</td>
                    <td>2017/05/07</td>
                    <td>admin</td>
                    <td>
                      <span className="badge badge-success">Активный</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Vadim2</td>
                    <td>2017/05/07</td>
                    <td>admin</td>
                    <td>
                      <span className="badge badge-success">Активный</span>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Users;
