import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => 
{
    return{
        container: {
            padding: theme.spacing(3),
            minWidth: '100px',
            minHeight: '100px'
        }
    }
    
})

export default useStyles;