import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Containers
import App from './containers/App/App';
import Simple from './containers/Simple/Simple';

/** Components **/
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage'
import One from './containers/Reports/ReportsPageContainer'
import Page404 from './views/Pages/Page404/Page404'
import Instuctions from './components/Instructions/Instuctions'

import Charts from './views/Charts/'
import Dashboard from './views/Dashboard/Dashboard'
import Buttons from './views/Components/Buttons/'
import Cards from './views/Components/Cards/'
import Forms from './views/Components/Forms/'
import Modals from './views/Components/Modals/'
import SocialButtons from './views/Components/SocialButtons/'
import Switches from './views/Components/Switches/'
import Tables from './views/Components/Tables/'
import Tabs from './views/Components/Tabs/'
import FontAwesome from './views/Icons/FontAwesome/'
import SimpleLineIcons from './views/Icons/SimpleLineIcons/'
import Login from './views/Pages/Login/Login'
import Register from './views/Pages/Register/Register'
import Page500 from './views/Pages/Page500/Page500'
import Widgets from './views/Widgets/Widgets'

import requireAuth from './utils/requireAuth';

export default (
  <Router history={browserHistory}>
    <Route path="/" name="Главная" component={requireAuth(App)}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="dashboard" component={Dashboard}/>
      <Route path="reports/" name="Заявки">
        <IndexRoute component={One}/>
        <Route path="one" name="One" component={One}/>
        <Route path="cards" name="Cards" component={Cards}/>
        <Route path="forms" name="Forms" component={Forms}/>
        <Route path="modals" name="Modals" component={Modals}/>
        <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
        <Route path="switches" name="Swithces" component={Switches}/>
        <Route path="tables" name="Tables" component={Tables}/>
        <Route path="tabs" name="Tabs" component={Tabs}/>
      </Route>
      <Route path="rules" name="Иструкции" components={Instuctions}/>
      <Route path="components/" name="Components">
        <IndexRoute component={Buttons}/>
        <Route path="buttons" name="Buttons" component={Buttons}/>
        <Route path="cards" name="Cards" component={Cards}/>
        <Route path="forms" name="Forms" component={Forms}/>
        <Route path="modals" name="Modals" component={Modals}/>
        <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
        <Route path="switches" name="Swithces" component={Switches}/>
        <Route path="tables" name="Tables" component={Tables}/>
        <Route path="tabs" name="Tabs" component={Tabs}/>
      </Route>
      <Route path="icons/" name="Icons">
        <IndexRoute component={FontAwesome}/>
        <Route path="font-awesome" name="Font Awesome" component={FontAwesome}/>
        <Route path="simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
      </Route>
      <Route path="widgets" name="Widgets" component={Widgets}/>
      <Route path="charts" name="Charts" component={Charts}/>
    </Route>
    <Route path="login" name="Логин" component={LoginPage} />
    <Route path="signup" name="Регистрация" component={SignupPage} />
    <Route path="pages/" name="Pages" component={Simple}>
      <IndexRoute component={Page404}/>
      <Route path="login" name="Login Pageassa" component={Login}/>
      <Route path="register" name="Register Page" component={Register}/>
      <Route path="404" name="Page 404" component={Page404}/>
      <Route path="500" name="Page 500" component={Page500}/>
    </Route>
    <Route path="*" name="Page 404" component={Page404} />
  </Router>
);
