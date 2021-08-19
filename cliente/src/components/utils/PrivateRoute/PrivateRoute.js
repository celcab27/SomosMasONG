import { Route } from 'react-router-dom';
import useUser from 'hooks/useUser';
import Loader from 'components/utils/Loader/Loader';
import RedirectView from 'view/redirect/RedirectView';
/**@module utils/PrivateRoute */
/**
 *  Component that manages the access to a private route
 * @param {Component} component Component to render
 * @param {String} redirectTo Route for redirection
 * @param {boolean} shouldBeAdmin Bool for control private routes only admin user can use. Default: true 
 * @param {props} rest The rest of props
 * @returns a Route component
 * @example
 * import PrivateRoute from 'components/utils/PrivateRoute/PrivateRoute.js'
 * <PrivateRoute path="/activities" component={ActivitiesView} redirectTo={'/home'} shouldBeAdmin={false} /> //If route is for regular user authenticated
 * <PrivateRoute path="/activities" component={ActivitiesView} redirectTo={'/home'} /> //If route is for admin user only, because default is 'true'
 */

export default function PrivateRoute({
  component: Component,
  redirectTo,
  shouldBeAdmin,
  ...rest
}) {
  const { isLogged, loading } = useUser();
  if (loading) return <Loader />;

  return (
    <Route {...rest}>
      {isLogged ? <Component /> : <RedirectView />}
    </Route>
  );
}
