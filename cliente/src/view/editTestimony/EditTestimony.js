import EditTestimony from "components/form/testimonial/FormTestimonial";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {makeGET} from 'services/httpRequest';

const EditTestimonyView = () => {
    const [testimony, setTestimony] = useState({});
    const {id} = useParams();
    useEffect(() => {
        async function getTestimony () {
            const testimonyAPI = await makeGET(`http://localhost:4000/api/testimonials/${id}`);
            setTestimony(testimonyAPI);
            console.log(testimonyAPI);
        }
        getTestimony();
    }, []
    );
    return(
        <EditTestimony prevTestimony={testimony}></EditTestimony>
    );
}

export default EditTestimonyView;