import React from 'react'
import {Card, Typography, CardContent} from '@material-ui/core';
import useStyles from './style';



function CardProfile(props) {
    
    const classes= useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                {props.icono}
                <Typography className={classes.titulo}>
                {props.titulo}
                </Typography>
                <Typography className={classes.texto}>
                {props.texto}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardProfile

