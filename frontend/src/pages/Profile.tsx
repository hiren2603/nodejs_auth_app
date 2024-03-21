import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { IProfile } from "../types";
import ProfileInput from "../components/ProfileInput";

function Profile() {
  const { user } = useAppSelector((state) => state.auth);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  const [currentUser, setCurrentUser] = useState<IProfile>(user);
  return (
    <div className='flex flex-col m-auto w-[50%]'>
      <div className='flex'>
        <img
          src={`http://localhost:8000:/public/users/${currentUser.avatar}`}
          alt='avatar_image'
          className='h-50 w-50'
        />
      </div>
      <ProfileInput
        type='text'
        name='firstname'
        label='First Name'
        value={currentUser.firstname}
        onChange={handleChange}
        readOnly={true}
      />
      <ProfileInput
        type='text'
        name='lastname'
        label='Last Name'
        value={currentUser.lastname}
        onChange={handleChange}
        readOnly={true}
      />
      <ProfileInput
        type='email'
        name='email'
        label='Password'
        value={currentUser.email}
        onChange={handleChange}
        readOnly
      />
      <ProfileInput
        type='text'
        name='phone'
        label='Phone'
        value={currentUser.phone.toString()}
        onChange={handleChange}
        readOnly
      />
    </div>
  );
}

export default Profile;
