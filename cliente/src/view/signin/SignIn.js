/** @module Routes/SignIn */
import FormLogin from 'components/form/login/FormLogin';
/**
 * SignInPage is a initial/index page for route /signin.
 * @fuction SignInPage
 * @example
 * <SignInPage />
 * @example
 * // With a Router.
 * <Route exact path="/signin" component={SignInPage} />
 */
const SignInPage = () => <FormLogin linkToSignUp='/registrar' />;

export default SignInPage;
