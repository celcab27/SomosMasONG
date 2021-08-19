import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_PUBLICDATA } from 'services/settings';
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Typography,
  Button, 
  MuiThemeProvider
} from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import PublicDataForm from 'components/form/publicData/publicDataForm';
import useStyles from './style';

let direction = "rlt";
const theme = createMuiTheme({
  direction: direction,

});



const PublicData = () => {
  const [publicData, setPublicData] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    getPublicData();
  }, []);

  const getPublicData = async () => {
    const response = await makeGET(ENDPOINT_PUBLICDATA);
    setPublicData(response.publicData);
    console.log(publicData);
  };
  const classes = useStyles();
  if (edit) {
    return (
      <PublicDataForm
        publicData={publicData}
        setEdit={setEdit}
        getPublicData={getPublicData}
      ></PublicDataForm>
    );
  }
  if (publicData) {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <div style={{ maxWidth: "100%", direction }}>
            <Grid container justify='space-between' alignItems='center' item xs={12}>
              <Typography variant='h4'>Datos Publicos</Typography>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setEdit(true);
                }}
              >
                <EditIcon></EditIcon>
              </Button>
            </Grid>
            <Grid container item xs={12}>
              <Typography variant='h5' className={classes.title}>
                Datos personales:
              </Typography> 
                <TableContainer>
                  <Table className={classes.table}>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Nombre:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Imagen:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.image}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Telefono:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Dirección:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.address}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Texto de bienvenida:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.welcomeText}</TableCell>
                    </TableRow>
                  </Table>
                </TableContainer>
                <Typography variant='h5' className={classes.title}>
                  Redes sociales
                </Typography>
                <TableContainer>
                  <Table>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Instagram:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.instagram}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Linkedin:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.linkedin}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Facebook:</TableCell>
                      <TableCell className={classes.tableCell}>{publicData.facebook}</TableCell>
                    </TableRow>
                  </Table>
                </TableContainer>
            </Grid>
          </div>
        </MuiThemeProvider>
      </>
    );
  } else {
    return <div>null</div>;
  }
};

export default PublicData;
