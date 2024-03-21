import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import axios from "axios";
import { RagistrationSchema } from "../helpers/validationSchema";
import { useAppDispatch } from "../app/store";
// import { ragister } from "../features/auth/authThunk";
import { FormValues, CountryType } from "../types/index";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import SelectField from "../components/SelectField";
import { ragister } from "../features/auth/authThunk";
// import SelectField from "../components/SelectField";

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  code: "",
  phone: "",
  avatar: "",
};

function Ragister() {
  const dispatch = useAppDispatch();
  const [countries, setCountries] = useState<CountryType[]>([]);
  // const [file, setFile] = useState({});

  const getCountries = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/countries`
      );
      setCountries(response.data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className='flex items-start justify-center w-[80%] h-[85vh] m-auto rounded-md drop-shadow-2xl shadow-rose-600 shadow-md gap-8'>
      <div className='flex-1 h-[100%] w-full'>
        <img
          className='object-cover w-full h-full rounded-md'
          src='https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='image'
        />
      </div>
      <div className='flex-1 flex justify-center text-stone-200 pt-4 pr-4 w-full'>
        <Formik
          initialValues={initialValues}
          validationSchema={RagistrationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            const updatedValues = {
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              username: values.username,
              password: values.password,
              confirmPassword: values.confirmPassword,
              phone: values.code + values.phone,
              // avatar: "",
            };
            console.log(updatedValues);
            await dispatch(ragister(updatedValues));
            resetForm();
          }}
        >
          {({ values, handleChange, errors, isSubmitting, touched }) => (
            <Form
              className='flex flex-col justify-start text-stone-200 pt-4 pr-4 w-full'
              encType='multipart/form-data'
            >
              <h2 className='text-center text-4xl mb-4 font-semibold'>
                Ragister
              </h2>
              <div className='flex gap-4'>
                <Input
                  name='firstname'
                  label='First Name'
                  value={values.firstname}
                  handleChange={handleChange}
                  error={
                    errors.firstname && touched.firstname
                      ? errors.firstname
                      : null
                  }
                />
                <Input
                  name='lastname'
                  label='Last Name'
                  value={values.lastname}
                  handleChange={handleChange}
                  error={
                    errors.lastname && touched.lastname ? errors.lastname : null
                  }
                />
              </div>
              <div className='flex gap-4'>
                <Input
                  type='email'
                  name='email'
                  label='Email'
                  value={values.email}
                  handleChange={handleChange}
                  error={errors.email && touched.email ? errors.email : null}
                />
                <Input
                  name='username'
                  label='Username'
                  value={values.username}
                  handleChange={handleChange}
                  error={
                    errors.username && touched.username ? errors.username : null
                  }
                />
              </div>
              <div className='flex gap-4'>
                <Input
                  type='password'
                  name='password'
                  label='password'
                  value={values.password}
                  handleChange={handleChange}
                  error={
                    errors.password && touched.password ? errors.password : null
                  }
                />
                <Input
                  type='password'
                  name='confirmPassword'
                  label='Confirm Password'
                  value={values.confirmPassword}
                  handleChange={handleChange}
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : null
                  }
                />
              </div>
              <div className='flex gap-0'>
                <SelectField
                  name='code'
                  label='Code'
                  value={values.code}
                  handleChange={handleChange}
                  error={errors.code && touched.code ? errors.code : null}
                  options={countries}
                />
                <Input
                  name='phone'
                  label='Phone'
                  value={values.phone}
                  handleChange={handleChange}
                  error={errors.phone && touched.phone ? errors.phone : null}
                />
              </div>

              <Button
                type='submit'
                isSubmitting={isSubmitting}
                labelText='Ragister'
              />
              <p className='mt-4'>
                Already have Account?{" "}
                <Link
                  to='/login'
                  className='text-purple-600 hover:text-teal-400'
                >
                  Login{" "}
                </Link>
                here!
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Ragister;

{
  /* <Input
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        value={values[field.name]}
                        accept='image/*'
                        handleChange={handleChange}
                        classes={
                          field.name === "avatar"
                            ? "border-teal-500"
                            : undefined
                        }
                        error={
                          errors[field.name] && touched[field.name]
                            ? errors[field.name]
                            : null
                        }
                      /> */
}
