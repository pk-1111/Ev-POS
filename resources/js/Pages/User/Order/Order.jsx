import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from '@inertiajs/react';

const OrderList = ({ auth, orders = [] }) => {
    
    // Status အလိုက် အရောင် Badge သတ်မှတ်ပေးတဲ့ Function
    const getStatusStyle = (status) => {
        const styles = {
            pending: 'bg-orange-100 text-orange-600 border-orange-200',
            shipped: 'bg-blue-100 text-blue-600 border-blue-200',
            delivered: 'bg-green-100 text-green-600 border-green-200',
            cancelled: 'bg-red-100 text-red-600 border-red-200',
        };
        return styles[status.toLowerCase()] || 'bg-gray-100 text-gray-600 border-gray-200';
    };

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navbar auth={auth} />
            
            {/* Main Content */}
            <main className="max-w-6xl mx-auto pt-28 pb-16 px-6">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Order History</h1>
                        <p className="text-gray-500 font-medium">သင်မှာယူထားသော ပစ္စည်းစာရင်းများကို ဤနေရာတွင် စစ်ဆေးနိုင်ပါသည်။</p>
                    </div>
                    <Link 
                        href="/shop" 
                        className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition active:scale-95 shadow-sm"
                    >
                        Continue Shopping
                    </Link>
                </div>

                {/* Orders Container */}
                <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Product Details</th>
                                    <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Order ID</th>
                                    <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Placed Date</th>
                                    <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Total Amount</th>
                                    <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Status</th>
                                </tr>
                            </thead>
                            
                            <tbody className="divide-y divide-gray-50">
                                {orders.length > 0 ? (
                                    orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50/80 transition-colors group">
                                            {/* Product Info */}
                                            <td className="p-6">
                                                <div className="flex items-center gap-5">
                                                    <div className="relative w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                                                        <img 
                                                            src={`/product/${order.image}`} 
                                                            className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500" 
                                                            alt="product" 
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors uppercase text-sm leading-tight mb-1">
                                                            {order.product_name || "Model S"}
                                                        </p>
                                                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                                            {order.color} • {order.capacity}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Order Code */}
                                            <td className="p-6">
                                                <span className="font-mono text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                                                    #{order.order_code}
                                                </span>
                                            </td>

                                            {/* Date */}
                                            <td className="p-6 text-sm font-semibold text-gray-500">
                                                {new Date(order.created_at).toLocaleDateString('en-GB', {
                                                    day: '2-digit', month: 'short', year: 'numeric'
                                                })}
                                            </td>

                                            {/* Amount */}
                                            <td className="p-6">
                                                <span className="text-base font-black text-gray-900">
                                                    {Number(order.total_amount).toLocaleString()} <small className="text-[10px] text-gray-400 uppercase ml-1 font-bold">MMK</small>
                                                </span>
                                            </td>

                                            {/* Status Badge */}
                                            <td className="p-6">
                                                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(order.status)}`}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse"></span>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    /* Empty State */
                                    <tr>
                                        <td colSpan="5" className="p-32 text-center">
                                            <div className="flex flex-col items-center max-w-xs mx-auto">
                                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                                    <i className="fa-solid fa-box-open text-3xl text-gray-200"></i>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">No Orders Yet</h3>
                                                <p className="text-gray-400 text-sm font-medium mb-8">
                                                    သင်မှာယူထားသော ပစ္စည်းစာရင်း မရှိသေးပါ။ အရည်အသွေးမြင့် ပစ္စည်းများကို စတင်ဝယ်ယူလိုက်ပါ။
                                                </p>
                                                <Link 
                                                    href="/shop" 
                                                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                                                >
                                                    Start Shopping
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Need help with your order? <Link href="#" className="text-blue-600 hover:underline">Contact Support</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default OrderList;