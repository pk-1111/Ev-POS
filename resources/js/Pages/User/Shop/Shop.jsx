import Navbar from '../Navbar/Navbar';
import { Link } from '@inertiajs/react';

const Shop = ({ products = [], auth }) => {
    return (
        <div className="bg-gray-50 min-h-screen antialiased">
            {/* Navbar */}
            <Navbar auth={auth} />

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-6 pt-28 pb-20">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Explore Our Models
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Premium electric performance designed for the future. Select your perfect match.
                    </p>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col justify-between"
                        >
                            {/* Category Tag */}
                            <div className="mb-4">
                                <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-100">
                                    {item.category_name}
                                </span>
                            </div>

                            {/* Product Image */}
                            <div className="relative h-56 flex items-center justify-center mb-6 overflow-hidden">
                                <img
                                    src={`/product/${item.image}`}
                                    alt={item.name}
                                    className="max-h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                                />
                            </div>

                            {/* Info Section */}
                            <div className="space-y-4">
                                <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    Model {item.name}
                                </h3>

                                {/* Specs Row */}
                                <div className="flex justify-between items-center py-5 border-y border-gray-50">
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-gray-900 leading-none">396<span className="text-xs ml-0.5">mi</span></p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-1">Range</p>
                                    </div>
                                    <div className="w-px h-8 bg-gray-100"></div>
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-gray-900 leading-none">1.99<span className="text-xs ml-0.5">s</span></p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-1">0-60 mph</p>
                                    </div>
                                    <div className="w-px h-8 bg-gray-100"></div>
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-gray-900 leading-none">200<span className="text-xs ml-0.5">mph</span></p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-1">Top Speed</p>
                                    </div>
                                </div>

                                {/* Price and Action */}
                                <div className="flex justify-between items-center pt-2">
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Starting at</p>
                                        <span className="text-2xl font-black text-gray-900">
                                            ${Number(item.price).toLocaleString()}
                                        </span>
                                    </div>
                                    <Link href={`/product-details/${item.id}`}>
                                        <button className="bg-black text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
                                            BUY NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Shop;