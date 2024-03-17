import { Button, InputField } from "../../components";
import { ragisterUser } from "../../config/api";
import { useFormik } from "formik";
import { SignupSchema } from "../../helpers/Helper.js";
import "./signup.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../authContext/authContext.jsx";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  confirm_password: "",
  city: "",
};

const onSubmit = async (values, actions) => {
  console.log(values);
  const response = await ragisterUser(values);
  if (response.success) {
    actions.resetForm(values);
  } else {
    console.log(false);
  }
};

const SignUp = () => {
  const { handleChange, values, errors, touched, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignupSchema,
      onSubmit: onSubmit,
    });
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <div className='signup__container'>
      <div className='signup__image__container'>
        <img
          src='https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='image'
        />
      </div>
      <form
        className='signup__form__container'
        encType='multipart/form-data'
        onSubmit={handleSubmit}
      >
        <div className='signup__form__title__container'>
          <h2>Sign Up</h2>
        </div>
        <div className='double__input__wrapper'>
          <InputField
            label='Name'
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            error={touched.name && errors.name && errors.name}
          />
          <InputField
            label='Email'
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
            error={touched.email && errors.email && errors.email}
          />
        </div>
        <div className='double__input__wrapper'>
          <InputField
            label='Username'
            type='text'
            name='username'
            value={values.username}
            handleChange={handleChange}
            error={touched.username && errors.username && errors.username}
          />
          <InputField
            label='Password'
            type='text'
            name='password'
            value={values.password}
            handleChange={handleChange}
            error={touched.password && errors.password && errors.password}
          />
        </div>
        <div className='double__input__wrapper'>
          <InputField
            label='Confirm Password'
            type='text'
            name='confirm_password'
            value={values.confirm_password}
            handleChange={handleChange}
            error={
              touched.confirm_password &&
              errors.confirm_password &&
              errors.confirm_password
            }
          />
          <InputField
            label='City'
            type='text'
            name='city'
            value={values.city}
            handleChange={handleChange}
            error={touched.city && errors.city && errors.city}
          />
        </div>
        {/* <div className='file__input__wrapper'>
          <input
            className='file__input'
            label='profile_pic'
            type='file'
            name='profile_pic'
            accept='image/*'
            onChange={(e) =>
              setFieldValue("profile_pic", e.currentTarget.files[0])
            }
          />
        </div> */}
        <Button label='SignUp' type='submit' isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default SignUp;
