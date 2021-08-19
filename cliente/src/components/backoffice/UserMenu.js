import React from 'react'
import { 
    List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const UserMenu = ({ onClickHandler }) => {
    return (
        <List>
            <ListItem button onClick={() => onClickHandler('/')}>
                <ListItemIcon><FaceIcon/></ListItemIcon>
                <ListItemText primary={'Mi perfil'}/>
            </ListItem>

            <ListItem button onClick={() => onClickHandler('home')}>
                <ListItemIcon><KeyboardReturnIcon/></ListItemIcon>
                <ListItemText primary={'Volver'}/>
            </ListItem>
        </List>
    )
}

export default UserMenu
