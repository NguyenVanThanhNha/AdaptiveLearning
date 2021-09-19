import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export default function PrivateRoute (props: RouteProps) {

    const isLoggedIn = Boolean(localStorage.getItem('accessToken'))
    if (!isLoggedIn) return <Redirect to="/login"/>
  return <Route {...props} />;
}
