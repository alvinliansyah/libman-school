import { useState } from 'react';
import profile from '../../../../public/Assets/Images/defaultPicture.jpg'

function NavbarAdmin() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOutsideClick = (event) => {
    const profile = document.querySelector('nav .profile');
    const dropdownProfile = profile.querySelector('.profile-link');
    const allMenu = document.querySelectorAll('main .content-data .head .menu');

    if (!event.target.matches('.profile img')) {
      if (!event.target.matches('.profile .profile-link')) {
        if (dropdownProfile.classList.contains('show')) {
          setShowDropdown(false);
        }
      }
    }

  };

  window.addEventListener('click', handleOutsideClick);

  return (
    <nav>
      <form action="#">
      </form>
      <div className="profile">
        <img
          src={profile}
          alt=""
          onClick={toggleDropdown}
        />
        <ul className={`profile-link ${showDropdown ? 'show' : ''}`}>
          <li>
            <a href="profile">
              <i className="bx bxs-user-circle icon"></i> Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-log-out icon"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
