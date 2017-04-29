import React from 'react';

const ReportsTable = ({ reports }) => (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header">
          <i className="fa fa-align-justify"></i> Combined All Table
        </div>
        <div className="card-block">
          <table className="table table-bordered table-striped table-sm">
            <thead>
            <tr>
              <th>Username</th>
              <th>Date registered</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Vishnu Serghei</td>
              <td>2012/01/01</td>
              <td>Member</td>
              <td>
              </td>
              {
                reports.map(report => <td>
                  {report.tags}
                </td>)
              }
            </tr>
            <tr>
              <td>Zbyněk Phoibos</td>
              <td>2012/02/01</td>
              <td>Staff</td>
              <td>
                <span className="badge badge-danger">Banned</span>
              </td>
            </tr>
            <tr>
              <td>Einar Randall</td>
              <td>2012/02/01</td>
              <td>Admin</td>
              <td>
                <span className="badge badge-default">Inactive</span>
              </td>
            </tr>
            <tr>
              <td>Félix Troels</td>
              <td>2012/03/01</td>
              <td>Member</td>
              <td>
                <span className="badge badge-warning">Pending</span>
              </td>
            </tr>
            <tr>
              <td>Aulus Agmundr</td>
              <td>2012/01/21</td>
              <td>Staff</td>
              <td>
                <span className="badge badge-success">Active</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
);

export default ReportsTable;
