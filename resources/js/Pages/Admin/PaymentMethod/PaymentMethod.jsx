

import React from 'react';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';
import '/public/Admin/css/sb-admin-2.min.css';
import { router, useForm } from '@inertiajs/react';
import moment from 'moment';


const PaymentMethod = ({ payments }) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        account_number: '', account_name: '', type: ''
    });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('paymentMethodCreate'), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                alert('Success!');
            }
        });
    };

    const handleDelete = (id) => {
        // console.log("Deleting ID:",id);

        router.delete(`/payment-delete/${id}`)

    }



    return (

        <div id="wrapper">

            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className="container-fluid py-4">
                        {/* Page Heading */}
                        <div className="mb-4">
                            <h1 className="h3 mb-0 text-gray-800 font-weight-bold">Payment Methods</h1>
                            <p className="text-muted">Manage your store's receiving payment accounts.</p>
                        </div>

                        <div className="row">
                            {/* --- Left Side: Create Form --- */}
                            <div className="col-lg-5 mb-4">
                                <div className="card shadow border-0">
                                    <div className="card-header bg-white py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Add New Payment Method</h6>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={submit} className="p-2">
                                            <div className="mb-3">
                                                <label className="small font-weight-bold text-dark">Account Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control shadow-sm"
                                                    placeholder="e.g. 09xxxxxxxxx"
                                                    value={data.account_number}
                                                    onChange={e => setData('account_number', e.target.value)}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="small font-weight-bold text-dark">Account Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control shadow-sm"
                                                    placeholder="Enter account holder name"
                                                    value={data.account_name}
                                                    onChange={e => setData('account_name', e.target.value)}
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="small font-weight-bold text-dark">Account Type</label>
                                                <select className="form-control shadow-sm" value={data.type} onChange={e => setData('type', e.target.value)} >
                                                    <option value="">Select Type (Kpay, Wave, etc.)</option>
                                                    <option value="kpay">KBZ Pay</option>
                                                    <option value="wave">Wave Pay</option>
                                                    <option value="KBZ bank">KBZ Banking</option>
                                                    <option value="AYA bank">AYA Banking</option>
                                                </select>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-block shadow py-2">
                                                <i className="fas fa-plus-circle mr-2"></i>Create Payment
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* --- Right Side: Payment List Table --- */}
                            <div className="col-lg-7">
                                <div className="card shadow border-0">
                                    <div className="card-header bg-white py-3">
                                        <h6 className="m-0 font-weight-bold text-dark">Active Payment Accounts</h6>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table table-hover mb-0">
                                                <thead className="bg-light text-center">

                                                    <tr>
                                                        <th className="border-0">ID</th>
                                                        <th className="border-0 text-left">Account Info</th>
                                                        <th className="border-0">Account No.</th>
                                                        <th className="border-0">Type</th>
                                                        <th className="border-0">Created</th>
                                                        <th className="border-0">Action</th>
                                                    </tr>


                                                </thead>
                                                <tbody className="text-center">
                                                    {payments.map((item) => (

                                                        <tr key={item.id} >
                                                            <td className="align-middle">{item.id}</td>
                                                            <td className="text-left align-middle">
                                                                <span className="d-block font-weight-bold text-primary">{item.account_name}</span>
                                                                <small className="text-muted"></small>
                                                            </td>
                                                            <td className="align-middle">
                                                                <span className="badge badge-secondary px-3 py-2">
                                                                    {item.account_number}
                                                                </span>
                                                            </td>
                                                            <td className="align-middle">
                                                                <span className="badge badge-secondary px-3 py-2">
                                                                    {item.type}
                                                                </span>
                                                            </td>
                                                            <td className="align-middle small text-muted">
                                                                {moment(item.created_at).format('MMMM Do YYYY')}
                                                            </td>
                                                            <td className="align-middle">
                                                                <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-outline-danger border-0">
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
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
                </div>
            </div>
        </div>

    );
};

export default PaymentMethod;





