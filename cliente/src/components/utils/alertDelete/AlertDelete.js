import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';

export default function AlertDelete({
  open, 
  message, 
  confirmar, 
  cancelar,
  confirmarMessage = 'Confirmar',
  cancelarMessage = 'Cancelar',
  onClose,
  snack,
  closeIcon,
  toastMessage
}){
  return (
    <div>
        <Dialog
          open={open}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
        <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelar} color='primary'>
              {cancelarMessage}
            </Button>
            <Button onClick={confirmar} color='primary' autoFocus>
              {confirmarMessage}
            </Button>
          </DialogActions>
        </Dialog>
  
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snack}
        autoHideDuration={2000}
        onClose={onClose}
        message={toastMessage}
        action={
          <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={closeIcon}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        }
        />
    </div>
  );
};