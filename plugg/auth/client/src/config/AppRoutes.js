import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Dashboard from '../components/dashboard/index';
import Topbar from '../components/dashboard/Topbar/Topbar';
import {
  SignUp,
  SignIn
} from "../containers/index"
        
const ParentApp = () => (
  <div>

    {/* App routing goes here!! */}

    <Route exact path="/" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    {/* <Route path="/signup" component={SignUp} /> */}
     <Route path="/dashboard" component={Dashboard} />
	  {/*<Route path='/dashboardClient/:firstid/:secondid' component={DashboardClient} /> */}
  </div>
);

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={ParentApp} />
    </BrowserRouter>
  )
};

export const DashboardRoute = () => {

  {/* Dashboard routing goes here!! */ }
  return (
    <Switch>
      {/*<Route exact path="/dashboard" render={(props) => (<Main {...props} template={processTemplate} auth={auth} />)} /> */}
      <Route exact path="/dashboard" component={Topbar} />      
 
    </Switch>
  )
}



// export default AppRoutes;