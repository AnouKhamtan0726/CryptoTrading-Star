// material-ui
import logo from "assets/images/logo.svg";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

function Logo() {
  return <img src={logo} alt="Berry" width="100" />;
}

export default Logo;
