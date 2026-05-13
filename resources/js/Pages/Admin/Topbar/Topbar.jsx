import { usePage } from '@inertiajs/react';
import React, { useState } from 'react';

const Topbar = ({ props }) => {
  const { auth } = usePage().props;

  console.log(props);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow  ">
      <ul className="navbar-nav ml-auto">
        <li className={`nav-item dropdown no-arrow ${showDropdown ? 'show' : ''}`}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            onClick={() => setShowDropdown(!showDropdown)}
            role="button"
          >
            <span className="mr-2 font-bold text-xl d-none d-lg-inline text-gray-600 small">{auth.user.name}</span>

          </a>

          {/* Dropdown Menu */}
          <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${showDropdown ? 'show' : ''}`}>

            <a className="dropdown-item" href="/add-admin">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Add New Admin
            </a>
            <a className="dropdown-item" href="/admin-list">
              <i className="fas fa-users fa-sm fa-fw mr-2 text-gray-400"></i> Admin List
            </a>
            <div className="dropdown-divider"></div>
            <div className="p-2">
              <button className="btn btn-dark btn-sm w-100">Logout</button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;