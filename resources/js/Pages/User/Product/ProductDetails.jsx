import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { router, useForm } from '@inertiajs/react';

const ProductDetails = ({ auth, product }) => {
    const [quantity, setQuantity] = useState(1);

    const { data, setData } = useForm({
        product_id: product.id,
        capacity: '50000mAh',
        color: 'Red',
    });

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const addToCart = () => {
        router.post('/cart/store', {
            product_id: product.id,
            qty: quantity,
            capacity: data.capacity,
            color: data.color
        }, {
            onSuccess: () => {
                // Alert ထက်စာရင် Toast ဒါမှမဟုတ် ပိုလှတဲ့ notification သုံးတာ ပိုကောင်းပါတယ်
                alert("Product added to cart!");
            }
        });
    };

    return (
        <div className="bg-white min-h-screen antialiased">
            <Navbar auth={auth} />

            <main className="max-w-7 lg:max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* --- Left: Product Image --- */}
                    <div className="bg-gray-50 rounded-[3rem] p-12 flex items-center justify-center sticky top-32">
                        <img 
                            src={`/product/${product.image}`} 
                            alt={product.name}
                            className="w-full h-auto object-contain transform hover:scale-105 transition duration-500 max-h-[500px]"
                        />
                    </div>

                    {/* --- Right: Product Info --- */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                                {product.category_name}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-3xl font-light text-gray-900 mt-4">
                                ${Number(product.price).toLocaleString()}
                            </p>
                        </div>

                        <div className="h-px bg-gray-100 w-full"></div>

                        {/* Capacity Selection */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Select Capacity</h4>
                            <div className="flex flex-wrap gap-3">
                                {['50000mAh', '70000mAh'].map((cap) => (
                                    <button 
                                        key={cap}
                                        onClick={() => setData('capacity', cap)}
                                        className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border-2 ${
                                            data.capacity === cap 
                                            ? "border-blue-600 bg-blue-50 text-blue-600" 
                                            : "border-gray-100 hover:border-gray-300 text-gray-500"
                                        }`}
                                    >
                                        {cap}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Available Colors</h4>
                            <div className="flex gap-3">
                                {['Red', 'Blue', 'Orange'].map((color) => (
                                    <button 
                                        key={color}
                                        onClick={() => setData('color', color)}
                                        className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border-2 ${
                                            data.color === color 
                                            ? "border-blue-600 bg-blue-50 text-blue-600" 
                                            : "border-gray-100 hover:border-gray-300 text-gray-500"
                                        }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Stock */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center justify-between max-w-xs">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Quantity</h4>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                                    In Stock: {product.available_item}
                                </span>
                            </div>
                            <div className="inline-flex items-center border-2 border-gray-100 rounded-2xl p-1">
                                <button 
                                    onClick={decrement}
                                    className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-gray-50 rounded-xl transition"
                                >
                                    −
                                </button>
                                <span className="w-12 text-center font-black text-lg text-gray-900">{quantity}</span>
                                <button 
                                    onClick={increment}
                                    className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-gray-50 rounded-xl transition"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button 
                                onClick={addToCart}
                                className="flex-1 bg-black text-white py-5 rounded-[1.5rem] font-bold tracking-widest hover:bg-gray-800 transition transform active:scale-95 shadow-xl shadow-gray-200"
                            >
                                ADD TO CART
                            </button>
                            <button 
                                className="flex-1 bg-blue-600 text-white py-5 rounded-[1.5rem] font-bold tracking-widest hover:bg-blue-700 transition transform active:scale-95 shadow-xl shadow-blue-100"
                            >
                                BUY IT NOW
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-truck-fast text-gray-400"></i>
                                </div>
                                <span className="text-[11px] font-bold text-gray-500 uppercase">Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-shield-check text-gray-400"></i>
                                </div>
                                <span className="text-[11px] font-bold text-gray-500 uppercase">Official Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductDetails;