/** @module Routes/SignUp */
import FormRegister from 'components/form/register/FormRegister';
/**
 * SignUpPage is a initial/index page for route /signup.
 * @fuction SignUpPage
 * @example
 * <SignUpPage />
 * @example
 * // With a Router.
 * <Route exact path="/signup" component={SignUpPage} />
 */
const SignUpPage = () => <FormRegister linkToSignIn='/ingresar' />;

export default SignUpPage;
