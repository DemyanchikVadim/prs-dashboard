import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/** Containers **/
import App from './containers/App/App';
import Dashboard from './containers/Dashboard/Dashboard'

/** Users **/
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';
import NotFoundPage from './components/NotFound/NotFoundPage';

/** Reports **/
import ReportsCrosswalk from './containers/Reports/ReportsCrosswalk';
import ReportsSidewalk from './containers/Reports/ReportsSidewalk';
import ReportsSecondRow from './containers/Reports/ReportsSecondRow';
import ReportsInvalid from './containers/Reports/ReportsInvalid';
import ReportsForbidden from './containers/Reports/ReportsForbidden';

/** Rules **/
import RulesPage from './components/Rules/RulesPage';

/** Instructions **/
import Crosswalk from './components/Instructions/Crosswalk';
import Sidewalk from './components/Instructions/Sidewalk';
import Invalid from './components/Instructions/Invalid';
import Forbidden from './components/Instructions/Forbidden';
import Secondrow from './components/Instructions/Secondrow';

/** Map **/
import Map from './components/Map/Map';

/** Users **/
import Users from './components/Administration/Users';

import requireAuth from './utils/requireAuth';

export default (
  <Router history={browserHistory}>
    <Route path="/" name="Главная" component={requireAuth(App)}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Панель управления" component={Dashboard}/>
      /** Reports **/
      <Route path="reports" name="Нарушения">
        <IndexRoute component={ReportsCrosswalk}/>
        <Route path="crosswalk" name="Парковка на пешеходном переходе" component={ReportsCrosswalk}/>
        <Route path="forbidden" name="Парковка под знакомsda стоянка запрещена" component={ReportsForbidden}/>
        <Route path="invalid" name="Парковка на месте для инвалидов" component={ReportsInvalid}/>
        <Route path="secondrow" name="Парковка на пешеходном переходе" component={ReportsSecondRow}/>
        <Route path="sidewalk" name="Парковка вторым рядом" component={ReportsSidewalk}/>
      </Route>
      /** Instructions **/
      <Route path="instructions" name="Иструкции">
        <IndexRoute component={Crosswalk}/>
        <Route path="crosswalk" name="Парковка на пешеходном переходе" component={Crosswalk}/>
        <Route path="sidewalk" name="Парковка на тротуаре" component={Sidewalk}/>
        <Route path="invalid" name="Парковка на месте для инвалидов" component={Invalid}/>
        <Route path="forbidden" name="Парковка под знаком стоянка запрещена" component={Forbidden}/>
        <Route path="secondrow" name="Парковка вторым рядом" component={Secondrow}/>
      </Route>
      <Route path="rules" name="ППД" components={RulesPage}>
        <IndexRoute component={RulesPage}/>
      </Route>
      <Route path="map" name="Карта" component={Map}/>
      <Route path="users" name="Пользователи" component={Users}/>
    </Route>
    /** Login, Signup **/
    <Route path="login" name="Логин" component={LoginPage} />
    <Route path="signup" name="Регистрация" component={SignupPage} />
    <Route path="*" name="Page 404" component={NotFoundPage} />
  </Router>
);
