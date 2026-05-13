import React from 'react';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';
import '/public/Admin/css/sb-admin-2.min.css';

const PaymentHistory = ({ orders }) => {
    console.log(orders);
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className="container-fluid py-4">

                        {/* Header Section */}
                        <div className="mb-4">
                            <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
                                <i className="fas fa-shopping-bag mr-2 text-primary"></i>
                                Purchased Product Details
                            </h1>
                            <p className="text-muted">ဝယ်ယူထားသော ပစ္စည်းအသေးစိတ်စာရင်း</p>
                        </div>

                        {/* Order Details Grid */}
                        <div className="row">
                            {orders && orders.length > 0 ? (
                                orders.map((product, index) => (
                                    <div className="col-xl-4 col-md-6 mb-4" key={index}>
                                        <div className="card border-0 shadow-sm h-100 overflow-hidden big-image-card">

                                            {/* Product Image - အပေါ်မှာ အပြည့်တင်လိုက်လို့ ပိုကြီးသွားပါပြီ */}
                                            <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                                                <img
                                                    src={product.product_image ? `/product/${product.product_image}` : '/default-product.png'}
                                                    className="w-100 h-100"
                                                    style={{ objectFit: 'cover' }}
                                                    alt={product.product_name}
                                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'; }}
                                                />
                                                {/* ကုန်ပစ္စည်းအမျိုးအစား သို့မဟုတ် Badge ပြချင်ရင် (Optional) */}
                                                <span className="badge badge-primary position-absolute" style={{ top: '10px', left: '10px', zIndex: '1' }}>
                                                    {product.category_name}
                                                </span>
                                            </div>

                                            {/* Product Info - အောက်မှာ ရှင်းရှင်းလင်းလင်း ပြန်စီထားပါတယ် */}
                                            <div className="card-body py-3 d-flex flex-column">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Available_Stock: {product.available_stock}
                                                </div>
                                                <h6 className="font-weight-bold text-gray-900 mb-2 text-truncate" title={product.product_name}>
                                                    {product.product_name}
                                                </h6>

                                                <div className="row no-gutters align-items-center mt-3 bg-gray-100 rounded p-2">
                                                    <div className="col text-center border-right">
                                                        <span className="text-muted small d-block">Quantity</span>
                                                        <span className="h6 mb-0 font-weight-bold text-dark">{product.order_count} </span>
                                                    </div>
                                                    <div className="col text-center pl-3">
                                                        <span className="text-muted small d-block">Unit Price</span>
                                                        <span className="h6 mb-0 font-weight-bold text-success">
                                                            {Number(product.product_price).toLocaleString()} Ks
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="row no-gutters align-items-center mt-3 bg-gray-100 rounded p-2">
                                                    <div className="col text-center border-right">
                                                        <span className="text-muted small d-block">Quantity</span>
                                                        <span className="h6 mb-0 font-weight-bold text-dark">{product.capacity} </span>
                                                    </div>
                                                    <div className="col text-center pl-3">
                                                        <span className="text-muted small d-block">Color</span>
                                                        <span className="h6 mb-0 font-weight-bold text-success">
                                                            {product.color}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Calculation Footer */}
                                            <div className="card-footer bg-white border-0 py-2 mt-auto">
                                                <div className="d-flex justify-content-between align-items-center px-2">
                                                    <span className="small font-weight-bold text-muted uppercase">Total:</span>
                                                    <span className="h5 mb-0 font-weight-bold text-primary">
                                                        {(product.total_amount)} Ks
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center py-5 shadow-sm bg-white rounded">
                                    <i className="fas fa-box-open fa-3x text-gray-200 mb-3"></i>
                                    <p className="text-muted font-weight-bold">ဝယ်ယူထားသော ပစ္စည်းစာရင်း မရှိသေးပါ။</p>
                                </div>
                            )}
                        </div>

                        {/* CSS Style - Component ရဲ့ အောက်ခြေမှာ ထည့်ထားပေးပါ */}
                        <style>{`
    .big-image-card {
        transition: all 0.3s ease-in-out;
        border-radius: 15px;
    }
    .big-image-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.12) !important;
    }
    .bg-gray-100 { background-color: #f8f9fc; }
    .text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .h5 { font-size: 1.25rem; }
`}</style>

                        {/* CSS Style - Component ရဲ့ အောက်ခြေမှာ ထည့်ထားပေးပါ */}
                        <style>{`
    .item-card {
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        border-radius: 12px;
    }
    .item-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
    }
    .bg-gray-100 { background-color: #f8f9fc; }
`}</style>
                    </div>
                </div>
            </div>

            <style>{`
                .item-card {
                    transition: transform 0.2s ease;
                    border-radius: 12px;
                }
                .item-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                }
                .text-primary { color: #4e73df !important; }
            `}</style>
        </div>
    );
};

export default PaymentHistory;