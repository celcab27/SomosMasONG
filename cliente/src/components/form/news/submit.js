/** @module Form/News */
import { addNews } from 'redux/news/actions/news';
import { makePOST } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';

const submit = async (values, setSubmit, id = false, dispatch) => {
  try {
    values.image = 'imagen.jpg';
    values.categoryId = 1;
    const result = await makePOST(ENDPOINT_NEWS, values);
    console.log(result);
    //dispatch(addNews(values)); //En realidad se despacha el resultado del POST, es decir, el objeto creado completo, con id created at y todo
    setSubmit(false);
  } catch (error) {
    console.log(error);
  }

};

export default submit;
