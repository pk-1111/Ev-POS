import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from '@inertiajs/react';

const OrderCheckoutUI = ({ auth, payments, grandTotal, orderCode }) => {

    console.log(payments);

    const [imagePreview, setImagePreview] = useState(null);

    // နဂိုမူလ Logic အတိုင်း လုံးဝမပြောင်းလဲထားပါ
    const { data, setData, post, processing, errors } = useForm({
        phone: '',
        payment_type: payments,
        address: '',
        image: null,
        order_code: orderCode,
        total_amount: grandTotal,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('orderStore'), {
            forceFormData: true,
        });
    };

    return (
        <>
            <Navbar auth={auth} />

            <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] p-4 mt-24 font-sans">
                <div className="bg-white rounded-[2rem] shadow-2xl max-w-6xl w-full flex flex-col md:flex-row overflow-hidden border border-gray-100">

                    {/* --- Left Side: Payment Methods (Modernized) --- */}
                    <div className="bg-indigo-600 p-10 md:w-[40%] text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                        <div className="relative z-10">
                            <h1 className="text-3xl font-black mb-3 tracking-tight">Payment Methods</h1>
                            <p className="text-indigo-100 text-sm mb-10 opacity-80 leading-relaxed">သင်အဆင်ပြေရာ အကောင့်သို့ ငွေလွှဲနိုင်ပါသည်။</p>

                            <div className="space-y-5">
                                {payments && payments.map((item) => (
                                    <div key={item.id} className="bg-white/10 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="bg-white text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                                                {item.type}
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-indigo-300 animate-pulse"></div>
                                        </div>
                                        <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest mb-1">Account Name</p>
                                        <p className="font-bold text-lg mb-3 tracking-wide">{item.account_name}</p>
                                        <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest mb-1">Account Number</p>
                                        <p className="font-mono text-xl tracking-[0.15em] font-black text-indigo-50 leading-none">{item.account_number}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-6 border-t border-indigo-400/30 text-[11px] font-medium text-indigo-200 tracking-wide uppercase">
                            Secure Payment Gateway • 2026
                        </div>
                    </div>

                    {/* --- Right Side: Checkout Form (Spacious & Modern) --- */}
                    <div className="p-10 md:p-16 md:w-[60%] bg-white">
                        <div className="mb-10">
                            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Checkout Details</h2>
                            <p className="text-slate-400 text-sm font-medium mt-1">အချက်အလက်များကို မှန်ကန်စွာ ဖြည့်စွက်ပေးပါ။</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* User Name */}
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    value={auth.user.name}
                                    readOnly
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 font-bold focus:outline-none cursor-not-allowed"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">Phone Number</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                        placeholder="09xxxxxxxxx"
                                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition font-semibold"
                                    />
                                    {errors.phone && <div className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wide italic">{errors.phone}</div>}
                                </div>
                                <div>
                                    <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">Payment Type</label>
                                    <div className="relative">
                                        <select
                                            value={data.payment_type}
                                            onChange={e => setData('payment_type', e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition appearance-none bg-white font-bold text-slate-700 cursor-pointer"
                                        >
                                            {payments && payments.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.type}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C2.185 5.355 2.403 5 2.816 5h9.368c.413 0 .631.355.365.658l-4.796 5.482a1 1 0 0 1-1.506 0z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">Delivery Address</label>
                                <textarea
                                    rows="2"
                                    required
                                    value={data.address}
                                    onChange={e => setData('address', e.target.value)}
                                    placeholder="Street, Township, City..."
                                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition font-medium"
                                ></textarea>
                                {errors.address && <div className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wide italic">{errors.address}</div>}
                            </div>

                            {/* Payslip Upload Section - High Height & Polished */}
                            <div className="group border-2 border-dashed border-slate-200 rounded-[2rem] p-8 transition-all hover:border-indigo-400 hover:bg-indigo-50/30">
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-6 text-center">Upload Payment Slip Screenshot</label>

                                <div className="flex flex-col items-center justify-center">
                                    {imagePreview ? (
                                        <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white animate-in fade-in zoom-in duration-300">
                                            <img src={imagePreview} className="w-full h-full object-contain bg-slate-100" alt="Preview" />
                                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-sm">
                                                <button
                                                    type="button"
                                                    onClick={() => { setImagePreview(null); setData('image', null); }}
                                                    className="bg-white text-red-500 px-6 py-2 rounded-xl text-xs font-black shadow-lg hover:scale-105 transition active:scale-95"
                                                >
                                                    REMOVE SLIP
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center py-6">
                                            <label className="cursor-pointer group/btn flex flex-col items-center">
                                                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover/btn:scale-110 transition-transform duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" /><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" /></svg>
                                                </div>
                                                <span className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black text-xs tracking-widest hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">SELECT IMAGE</span>
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    required
                                                />
                                            </label>
                                            <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">JPG, PNG or GIF (Max 2MB)</p>
                                        </div>
                                    )}
                                </div>
                                {errors.image && <div className="text-red-500 text-[10px] font-bold mt-4 text-center uppercase italic tracking-wide">{errors.image}</div>}
                            </div>

                            {/* Order Summary Box */}
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex justify-between items-center shadow-inner">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Order Code</p>
                                    <p className="font-black text-slate-700 tracking-tight">{orderCode}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em] mb-1">Payable Total</p>
                                    <p className="text-3xl font-black text-indigo-600 leading-none">
                                        {Number(grandTotal).toLocaleString()}
                                        <span className="text-[12px] ml-1 font-bold">MMK</span>
                                    </p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-5 rounded-[2rem] shadow-xl shadow-slate-200 transform active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-slate-300 tracking-[0.2em] text-xs"
                            >
                                {processing ? (
                                    <span className="animate-pulse">PROCESSING...</span>
                                ) : (
                                    <>CONFIRM & PLACE ORDER</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderCheckoutUI;