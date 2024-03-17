import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/authContext";
import { FaUser } from "react-icons/fa";
import "./navbar.scss";
import { deleteUser } from "../../config/api";

function Navbar() {
  const [profileLinks, setProfileLinks] = useState(false);
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleDelete = async () => {
    try {
      const response = await deleteUser(currentUser.id);
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className='navbar__container'>
      <div className='logo__container'>
        <h1>Dev ui</h1>
      </div>
      <ul className='navlinks__container'>
        <Link className='link' to='/dashboard'>
          Home
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' to='/blog'>
          Blog
        </Link>
        <Link className='link' to='contact'>
          Contact
        </Link>
      </ul>
      <ul className='auth__container'>
        {!currentUser ? (
          <>
            <Link className='link' to='/'>
              Login
            </Link>
            <Link className='link' to='/signup'>
              Signup
            </Link>
          </>
        ) : (
          <>
            <div name='profile' id='profile' className='profile__container'>
              <div
                className='icon__container'
                onClick={() => setProfileLinks(!profileLinks)}
              >
                <FaUser className='icon' />
              </div>
              {profileLinks && (
                <div className='profile__links'>
                  <Link className='link' to='/' onClick={() => {}}>
                    Profile
                  </Link>
                  <Link className='link' onClick={handleDelete}>
                    delete
                  </Link>
                </div>
              )}
            </div>
            <Link className='link' onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
