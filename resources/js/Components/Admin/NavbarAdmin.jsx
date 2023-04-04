import { useState } from 'react';

function NavbarAdmin() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = (index) => {
    const newShowMenu = [...showMenu];
    newShowMenu[index] = !newShowMenu[index];
    setShowMenu(newShowMenu);
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

    allMenu.forEach((item, index) => {
      const icon = item.querySelector('.icon');
      const menuLink = item.querySelector('.menu-link');

      if (!event.target.matches('.menu .icon')) {
        if (!event.target.matches('.menu .menu-link')) {
          if (showMenu[index]) {
            toggleMenu(index);
          }
        }
      }
    });
  };

  window.addEventListener('click', handleOutsideClick);

  return (
    <nav>
      <i className="bx bx-menu toggle-sidebar"></i>
      <form action="#">
      </form>
      <div className="profile">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          onClick={toggleDropdown}
        />
        <ul className={`profile-link ${showDropdown ? 'show' : ''}`}>
          <li>
            <a href="#">
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
