import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { LoginSchema } from "../helpers/index";
import { Input, Button } from "../components/index";
import { useAppDispatch } from "../app/hooks";
import { login } from "../features/auth/authThunk";
import { loginStateType } from "../types/index";
import { useNavigate } from "react-router-dom";
const initialValues: loginStateType = {
  username: "",
  password: "",
};

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center w-[50%] h-[60vh] m-auto rounded-md drop-shadow-2xl shadow-rose-600 shadow '>
      <div className='flex-1 rounded-md h-full'>
        <img
          className='object-fill h-full w-full'
          src='https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='image'
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        resetForm
        onSubmit={async (values, { resetForm }) => {
          await dispatch(login(values));
          resetForm();
          navigate("/profile");
        }}
      >
        {({ values, handleChange, errors, isSubmitting, touched }) => (
          <Form className='flex flex-col justify-center flex-1 text-stone-200 p-4'>
            <h2 className='text-center text-4xl mb-4 font-semibold'>Login</h2>
            <Input
              type='text'
              name='username'
              label='Username'
              value={values.username}
              handleChange={handleChange}
              error={
                errors.username && touched.username ? errors.username : null
              }
            />
            <Input
              type='password'
              name='password'
              label='Password'
              value={values.password}
              handleChange={handleChange}
              error={
                errors.password && touched.password ? errors.password : null
              }
            />
            <Button
              type='submit'
              isSubmitting={isSubmitting}
              labelText='Login'
            />
            <p className='mt-5 text-left'>
              New User{" "}
              <Link
                to='/ragister'
                className='text-purple-600 hover:text-teal-400'
              >
                Ragister
              </Link>{" "}
              here!
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
