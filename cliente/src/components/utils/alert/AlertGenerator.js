/** @module Utils/Alert */
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
// Styles for this components.
const useStyles = makeStyles(() => ({
  alertStyle: {
    width: '100%',
  },
}));
/**
 * Component AlertGenerator is react component to generate alerts with a minimum standard.
 * @fuction AlertGenerator
 * @param {String} [props.severity="error"] - A string to set "severity" is a type of alert between "error" is default, "warning", "info" and "success".
 * @param {String} [props.alertTitle] - A string to set title of alert.
 * @param {String} [props.contentText] - A string to set content in format text of the alert.
 * @param {object} [rest] - Rest of props like a variant, color, etc.
 * @see {@link https://material-ui.com/es/api/alert/}
 * @see {@link https://material-ui.com/es/components/alert/}
 * @example
 * import AlertGenerator from "components/utils/alert/AlertGenerator.js"
 * <AlertGenerator />
 * <AlertGenerator contentText="Default is a error" />
 * <AlertGenerator contentText="This is a alert warning" severity="warning" />
 * <AlertGenerator contentText="This is a alert info" severity="info" />
 * <AlertGenerator contentText="This is a alert success" severity="success" />
 * <AlertGenerator contentText="This is a alert success" severity="success" variant="filled" />
 * <AlertGenerator contentText="This is a alert success" severity="success" variant="outline" />
 * <AlertGenerator contentText="This is a alert success" severity="success" variant="outline" onClose={functionToCloseAlert} />
 * <AlertGenerator icon={false} severity="success" contentText="Success without icon" />
 * <AlertGenerator severity="success" color="info" contentText="Change color icon" />
 */
const AlertGenerator = ({
  severity = 'error',
  alertTitle,
  contentText,
  ...rest
}) => {
  const { alertStyle } = useStyles();
  return (
    <Alert className={alertStyle} severity={severity} {...rest}>
      <AlertTitle>{alertTitle}</AlertTitle>
      {contentText}
    </Alert>
  );
};

export default AlertGenerator;
