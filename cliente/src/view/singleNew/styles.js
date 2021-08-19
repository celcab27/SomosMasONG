import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: 'auto',
    },
    container: {
        marginTop: '5vh',
        marginBottom: '5vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    media: {
        height: '60vh',
        minWidth: 100,
        maxWidth: '100%',
    },
}));

export default useStyles;