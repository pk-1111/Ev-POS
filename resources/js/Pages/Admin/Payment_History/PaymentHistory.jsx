import React from 'react';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';
import { Link, router } from '@inertiajs/react';
import '/public/Admin/css/sb-admin-2.min.css';

const PaymentHistory = ({ paymentHistory,orderProductDetails}) => {
    

    // Helper to get status badge colors
    const getStatusBadge = (status) => {
        const s = status?.toLowerCase();
        if (s === 'pending') return 'badge-warning';
        if (s === 'completed' || s === 'success') return 'badge-success';
        if (s === 'rejected' || s === 'cancelled') return 'badge-danger';
        return 'badge-secondary';
    };

    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />

                    <div className="container-fluid py-4">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
                                <i className="fas fa-history mr-2 text-primary"></i>Payment History
                            </h1>
                        </div>

                        {/* --- Stats Cards --- */}
                        <div className="row mb-4">
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Transactions</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{paymentHistory.length}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-file-invoice-dollar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- Table Card --- */}
                        <div className="card shadow border-0 overflow-hidden">
                            <div className="card-header bg-white py-3 d-flex align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Payment Logs</h6>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle mb-0">
                                        <thead className="bg-light text-dark">
                                            <tr className="text-center">
                                                <th className="py-3 border-0">User</th>
                                                <th className="border-0">Payslip </th>
                                                <th className="border-0 ">Order Code</th>
                                                <th className="border-0 ">Total </th>
                                                <th className="border-0">Payment </th>
                                                <th className="border-0">Address</th>
                                                <th className="border-0">Phone</th>
                                                <th className="border-0">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {paymentHistory.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="text-muted font-weight-bold">{item.user_name}</td>
                                                    <td>
                                                        <a href={`/payslip/${item.payslip_image}`} target="_blank" rel="noreferrer">
                                                            <div className="p-1 border rounded d-inline-block bg-white shadow-sm hover-zoom">
                                                                <img
                                                                    src={`/payslip/${item.payslip_image}`}
                                                                    alt="slip"
                                                                    style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '4px' }}
                                                                />
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td className="text-left">
                                                       <Link href={route('orderProductDetailsPage',{orderCode:item.order_code})}>
                                                          <span className="d-block font-weight-bold text-dark">{item.order_code}</span>
                                                       </Link> 
                                                        <small className="text-primary font-weight-bold">{item.name}</small>
                                                    </td>
                                                    <td className="text-right font-weight-bold text-dark">
                                                        {item.total_amt.toLocaleString()} <span className="small">Ks</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-uppercase small font-weight-bold text-indigo">
                                                            {item.payment_method}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="text-truncate" style={{ maxWidth: '150px' }} title={item.address}>
                                                            <small className="text-muted">{item.address}</small>
                                                        </div>
                                                    </td>
                                                     <td>
                                                        <span className={`badge badge-pill ${getStatusBadge(item.order_status)} px-3 py-2`}>
                                                            {item.phone}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className={`badge badge-pill ${getStatusBadge(item.order_status)} px-3 py-2`}>
                                                            {item.order_status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .hover-zoom:hover {
                    transform: scale(1.1);
                    transition: 0.2s ease-in-out;
                }
                .text-indigo { color: #4e73df; }
                .table td { vertical-align: middle; }
            `}</style>
        </div>
    );
};

export default PaymentHistory;