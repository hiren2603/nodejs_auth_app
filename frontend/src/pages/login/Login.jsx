import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField } from "../../components";
import { AuthContext } from "../../authContext/authContext";
import { Formik, Form } from "formik";
import { LoginSchema } from "../../helpers/Helper";
import "./login.css";

const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    currentUser != null && navigate("/blog");
  }, [currentUser, navigate]);

  const [serverErr, setServerErr] = useState(null);
  return (
    <div className='login__container'>
      <div className='image__container'>
        <img
          src='https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='image'
        />
      </div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values, helpers) => {
          console.log(values);
          try {
            setServerErr(null);
            await login(values);
            helpers.resetForm(values);
            navigate("/blog");
          } catch (error) {
            // console.log(error);
            setServerErr(error.response.data);
            console.log(false);
          }
        }}
      >
        {({ values, handleChange, errors, isSubmitting, touched }) => (
          <Form className='form__container'>
            <div className='form__title__container'>
              <h2>Login</h2>
            </div>
            <InputField
              type='text'
              name='username'
              label='Username'
              value={values.username}
              handleChange={handleChange}
              error={
                errors.username && touched.username ? errors.username : null
              }
            />
            <InputField
              type='password'
              name='password'
              label='Password'
              value={values.password}
              handleChange={handleChange}
              error={
                errors.password && touched.password ? errors.password : null
              }
            />
            {serverErr && <p className='error'>{serverErr}</p>}
            <Button type='submit' label='Login' isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
