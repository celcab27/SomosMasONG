import { useEffect, useState } from 'react';
import { getCategories } from 'redux/categories/actions/categories'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EditCategoryForm from 'components/form/category/editFormCategory';
import AlertDelete from 'components/utils/alertDelete/AlertDelete';
import useStyles from './style';
import { makeGET, makeDELETE } from 'services/httpRequest';
import { ENDPOINT_CATEGORY } from 'services/settings';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesFromStore = useSelector(state => state.categories.categories);
  const { url } = useRouteMatch();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [categories, setCategories] = useState([]);
  const [edit, setEdit] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState('');
  const [pendingCategory, setPendingCategory] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    const fetchCategories = async () => {
      const {categories} = await makeGET(ENDPOINT_CATEGORY);
      setCategories(categories);
      dispatch(getCategories(categories));
    };
    !categoriesFromStore ? fetchCategories() : setCategories(categoriesFromStore);
  }, []);

  const editCategory = async (id) => {
    const response = await makeGET(`${ENDPOINT_CATEGORY}/${id}`);
    console.log(response);
    setCategoryToEdit(response.category);
    setEdit(true);
  };

  const handleDeleteAction = (categoryId) => {
    setPendingCategory(categories.find((cat) => cat.id === categoryId));
    setDeleteDialogOpen(true);
  }

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setPendingCategory(null);
  }

  const handleDeleteConfirm = async () => {
    const result = await makeDELETE(`${ENDPOINT_CATEGORY}/${pendingCategory.id}`);
    if (result) {
      setCategories(categories.filter((cat) => cat.id !== pendingCategory.id));
      setToastOpen(true);
    }

    setDeleteDialogOpen(false);
    setPendingCategory(null);
  };

  if (edit) {
    return (
      <EditCategoryForm
        getCategories={getCategories}
        categoryToEdit={categoryToEdit}
        setEdit={setEdit}
      ></EditCategoryForm>
    );
  }

  if (categories){
    return (
      <>
        <Container>
          <div style={{ width: '100%' }}>
            <Box display='flex'>
              <Box width='100%'>
                {' '}
                <Typography variant='h4' gutterBottom>Categorias</Typography>{' '}
              </Box>
              <Box>
                {' '}
                <Button
                  onClick={() => history.push(`${url}/create`)}
                  variant='contained'
                  color='primary'
                >
                  Crear
                </Button>{' '}
              </Box>
            </Box>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell className={classes.right}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) => {
                  return (
                    <TableRow key={category.id}>
                      <TableCell>{category.name}</TableCell>
                      {isMobile ?
                        <TableCell className={classes.right}>
                          <IconButton
                            color='primary'
                            aria-label='Editar'
                            onClick={() => editCategory(category.id)}
                          >
                            <EditIcon className={classes.icon} />
                          </IconButton>
                          <IconButton
                            color='secondary'
                            aria-label='Eliminar'
                            onClick={() => handleDeleteAction(category.id)}
                          >
                            <DeleteIcon className={classes.icon} />
                          </IconButton>
                        </TableCell> :
                        <TableCell className={classes.right}>
                          <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            startIcon={<EditIcon className={classes.icon} />}
                            onClick={() => editCategory(category.id)}
                          >
                            Editar
                          </Button>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            startIcon={<DeleteIcon className={classes.icon} />}
                            onClick={() => handleDeleteAction(category.id)}
                          >
                            Eliminar
                          </Button>
                        </TableCell>
                      }
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        {pendingCategory &&
          <AlertDelete
            message={`¿Eliminar la categoría "${pendingCategory.name}"?`}
            open={deleteDialogOpen}
            cancelar={handleDeleteCancel}
            confirmar={handleDeleteConfirm}
            onClose={handleDeleteCancel}
            snackbarOpen={toastOpen}
            snackbarMessage='Categoría eliminada'
            onSnackbarClose={() => setToastOpen(false)}
          />
        }
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={toastOpen}
          autoHideDuration={2000}
          onClose={() => setToastOpen(false)}
          message='Categoría eliminada'
          action={
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={() => setToastOpen(false)}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          }
        />
      </>
    );
  }
}

export default Categories;