import React from 'react';
import '/public/Admin/css/sb-admin-2.min.css';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';
import { useForm } from '@inertiajs/react';


const ChangePasswordUI = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        oldPassword: '', newPassword: '', confirmPassword: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('changePassword'), {
            onSuccess: () => {
                reset();
                alert('Success!');
            }
        });
    };

    return (

        <div id="wrapper">

            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />

                    <div className="container-fluid py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-8">
                                {/* Header Title */}
                                <div className="text-center mb-4">
                                    <h1 className="h4 text-gray-900 font-weight-bold">Change Account Password</h1>
                                    <p className="small text-muted">Please enter your current and new password to update.</p>
                                </div>

                                <div className="card shadow-lg border-0 rounded-lg">
                                    <div className="card-body p-4 p-md-5">
                                        <form onSubmit={submit}>
                                            {/* Old Password */}
                                            <div className="mb-4">
                                                <label className="form-label small font-weight-bold text-dark">
                                                    Old Password
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-right-0">
                                                        <i className="fas fa-lock text-muted"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        value={data.oldPassword}
                                                        onChange={e => setData('oldPassword', e.target.value)}
                                                        className="form-control border-left-0 bg-light shadow-none"
                                                        placeholder="Current password"
                                                    />
                                                </div>
                                            </div>

                                            {/* New Password */}
                                            <div className="mb-4">
                                                <label className="form-label small font-weight-bold text-dark">
                                                    New Password
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-right-0">
                                                        <i className="fas fa-key text-muted"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        value={data.newPassword}
                                                        onChange={e => setData('newPassword', e.target.value)}
                                                        className="form-control border-left-0 bg-light shadow-none"
                                                        placeholder="Enter new password"
                                                    />
                                                </div>
                                            </div>

                                            {/* Confirm Password */}
                                            <div className="mb-4">
                                                <label className="form-label small font-weight-bold text-dark">
                                                    Confirm New Password
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-right-0">
                                                        <i className="fas fa-check-double text-muted"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        value={data.confirmPassword}
                                                        onChange={e => setData('confirmPassword', e.target.value)}
                                                        className="form-control border-left-0 bg-light shadow-none"
                                                        placeholder="Repeat new password"
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="mt-5">
                                                <button type="submit" className="btn btn-primary btn-block py-2 shadow font-weight-bold">
                                                    Update Password
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Security Tip */}
                                <div className="text-center mt-4">
                                    <p className="small text-muted">
                                        <i className="fas fa-shield-alt mr-1"></i>
                                        Make sure your new password is at least 8 characters long.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default ChangePasswordUI;