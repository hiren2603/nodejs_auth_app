import { Link } from "react-router-dom";
import { menuItems } from "../helpers/index";
import { MenuType } from "../types/index";
import { useAppSelector } from "../app/hooks";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authThunk";

function Header() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <div className='flex justify-between px-4 h-[70px] mb-4'>
      <div className='flex items-center'>
        <h2 className='text-2xl font-bold text-red-500'>DEV Ui</h2>
      </div>
      <ul className='flex space-x-8 items-center'>
        {menuItems.map((menu: MenuType) => (
          <Link
            key={menu.id}
            to={menu.link}
            className='text-md text-stone-200 hover:text-stone-100'
          >
            {menu.text}
          </Link>
        ))}
      </ul>
      <ul className='flex space-x-8 items-center'>
        <Link
          to={token ? "/profile" : "/login"}
          className='text-md text-stone-200 hover:text-stone-100'
        >
          {token ? "Profile" : "Login"}
        </Link>
        {token && (
          <Link
            onClick={handleLogout}
            to='/'
            className='text-md text-stone-200 hover:text-stone-100'
          >
            Logout
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Header;
