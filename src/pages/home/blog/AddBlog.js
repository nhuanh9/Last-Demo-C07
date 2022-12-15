import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../../services/userService";
import {Field, Form, Formik} from "formik";
import {addBlog} from "../../../services/blogsService";

export default function AddBlog (){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => {
        console.log(state)
        return state.user.user
    })
    const handleAdd = (values) => {
        let data = {...values,user: {id: user.id}}
        console.log(data)
        dispatch(addBlog(data))
        navigate('/home')
    }
    return (

        <div className={'row'}>
            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Add Blog</h1>
                <Formik initialValues={{title: '', content: ''}} onSubmit={(values) => {
                    handleAdd(values)
                }}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <Field type="text" className={'form-control'} name={'title'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Content</label>
                            <Field type="text" className={'form-control'} name={'content'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
