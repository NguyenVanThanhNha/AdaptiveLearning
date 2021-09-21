import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export default function PrivateRoute (props: RouteProps) {

    const isLoggedIn = Boolean(localStorage.getItem('accessToken'))
    const isFirstLogin = localStorage.getItem('firstLogin')
    if (!isLoggedIn) return <Redirect to="/login"/>
    if (isFirstLogin === '1') return <Redirect to="/dashboard/testlearningstyle"/>
  return <Route {...props} />;
}
