import { Link } from '@inertiajs/react';
import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: 'fas fa-fw fa-table', link: '/' },
    { name: 'Category', icon: 'fa-solid fa-circle-plus', link: '/category' },
    { name: 'Add Products', icon: 'fa-solid fa-plus', link: '/add-product' },
    { name: 'Product List', icon: 'fa-solid fa-layer-group', link: '/product-list' },
    { name: 'Payment Method', icon: 'fa-solid fa-credit-card', link: '/payment-page' },
    { name: 'Sale Information', icon: 'fa-solid fa-list', link: '/sales' },
    { name: 'Payment', icon: 'fa-solid fa-cart-shopping', link: '/payment_history' },
    { name: 'Change Password', icon: 'fa-solid fa-lock', link: '/change-password' },
  ];

  return (

    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i class="fa-solid fa-car"></i>
        </div>
        <div className="sidebar-brand-text mx-3">  MELLSO POS</div>
      </a>

      <hr className="sidebar-divider my-0" />

      {/* Nav Items */}
      {menuItems.map((item, index) => (
        <li className="nav-item" key={index}>
          <a className="nav-link" href={item.link}>
            <i className={item.icon}></i>
            <span className="ml-2">{item.name}</span>
          </a>
        </li>
      ))}

      {/* Logout Button */}
      <div className="text-center d-flex justify-content-center mt-3">
        <Link
          href={route('logout')}
          method="post"
          as="button"
          onClick={() => {
            setTimeout(() => {
              window.location.href = '/';
            }, 100);
          }}
          className="bg-black text-white rounded px-3 py-2 border-0"
          style={{ cursor: 'pointer' }}
        >
          Logout
        </Link>
      </div>
    </ul>

  );
};

export default Sidebar;