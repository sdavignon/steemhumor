import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserInfo from './UserInfo';
import RefineResult from '../../components/Sidebar/RefineResult';
import NavigationUser from './NavigationUser';

const LeftSidebar = () => (
  <Switch>
    <Route path="/@:name" component={UserInfo} />
    <Route path="/activity" component={NavigationUser} />
    <Route path="/bookmarks" component={NavigationUser} />
    <Route path="/drafts" component={NavigationUser} />
    <Route path="/edit-profile" component={NavigationUser} />
    <Route path="/settings" component={NavigationUser} />
    <Route path="/" component={RefineResult} />
  </Switch>
);

export default LeftSidebar;
