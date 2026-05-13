import { Link } from "@inertiajs/react";
import './Navbar.css';

const Navbar = ({ auth }) => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">

            {/* --- Left: Logo Section --- */}
            <div className="flex items-center gap-4">
                <Link href="/home" className="logo_main">
                    MELLSO
                </Link>
                <div className="h-6 w-px bg-gray-200 mx-2 hidden md:block"></div>
                <div className="hidden md:flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <i class="fa-solid fa-car-side"></i>
                    </div>
                    <span className="text-[10px] leading-tight font-bold uppercase text-gray-500 tracking-wider">
                        Authorized <br /> Reseller
                    </span>
                </div>
            </div>

            {/* --- Center: Navigation Menu --- */}
            <div className="hidden lg:flex items-center gap-8">
                <Link href="/home" className="text-sm font-semibold text-gray-600 hover:text-black transition">Home</Link>
                <Link href="/shop" className="text-sm font-semibold text-gray-600 hover:text-black transition">Shop</Link>
                <Link href="/learn-more" className="text-sm font-semibold text-gray-600 hover:text-black transition">Learn More</Link>
                <Link href="/location" className="text-sm font-semibold text-gray-600 hover:text-black transition">Our Locations</Link>
            </div>

            {/* --- Right: Auth Section --- */}
            <div className="flex items-center gap-4">
                {auth?.user ? (
                    <div className="flex items-center gap-5">
                        {/* Status Badges */}
                        <div className="flex flex-col items-end">
                            <span className="text-2xl font-bold text-blue-300">{auth.user.name}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            {auth.user.role === 'superadmin' ? (
                                <Link href={route('adminHome')} className="p-2 hover:bg-blue-50 rounded-full text-blue-600 transition">
                                    <i className="fa-solid fa-gauge-high"></i>
                                </Link>
                            ) : (
                                <Link href={route('cartShow')} className="p-2 hover:bg-gray-100 rounded-full text-gray-700 relative transition">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                                </Link>
                            )}

                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="bg-black text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-gray-800 transition"
                            >
                                LOGOUT
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link href={route('login')} className="text-sm font-bold text-gray-700 px-4 py-2 hover:text-black transition">
                            Login
                        </Link>
                        <Link
                            href={route('register')}
                            className="bg-black text-white text-sm font-bold px-6 py-2 rounded-full hover:shadow-lg transition active:scale-95"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;