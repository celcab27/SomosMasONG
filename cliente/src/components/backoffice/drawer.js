import { Divider } from '@material-ui/core'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminMenu from './AdminMenu'
import UserMenu from './UserMenu'
import useStyles from 'view/backOfficeView/styles'

const DrawerList = () => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const classes = useStyles();
    const userIsAdmin = useSelector(state => state.user?.user?.roleId === 1 ? true : false);

    const onClickHandler = (path) => {
        switch (path) {
            case 'home':
                history.push('/')
                break;
            case '/':
                history.push(`${url}`)
                break;
            default:
                history.push(`${url}${path}`)
                break;
        }
    }

    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            {
                userIsAdmin ? (
                    <AdminMenu onClickHandler={onClickHandler}/>
                ) : (
                    <UserMenu onClickHandler={onClickHandler}/>
                )
            }
        </div>
    )
};

export default DrawerList