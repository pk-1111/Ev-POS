import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
       <ul className='nav-menu'>
            <li>
              < Link to="/">Home</Link>
              </li>
             <li>
             < Link to="/shop">Shop</Link>
              </li>
              <li>
               <Link to="/about">About</Link>
                </li>
               <li className='nav-contact'>Contact</li>
          </ul>
    );
}
