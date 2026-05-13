import React from 'react';
import '/public/Admin/css/sb-admin-2.min.css';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';
import moment from 'moment';
import { router } from '@inertiajs/react';

const ProductView = ({productDetails}) => {


   
    

    // const discountPrice = product.price - (product.price * product.rate / 100);

    return (
       <div id="wrapper">
        
            <Sidebar />
             <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
               <Topbar />
                     <div className="container-fluid py-4">
            {/* --- Back Button --- */}
            <div className="mb-4">
                <button className="btn btn-sm btn-outline-secondary shadow-sm px-3">
                    <i className="fas fa-arrow-left mr-2"></i>Back to List
                </button>
            </div>

            <div className="row">
                {/* --- Left Side: Product Image --- */}
                
                <div className="col-lg-5 mb-4">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body d-flex align-items-center justify-content-center bg-light rounded">
                         
                          
                                <img src={`/product/${productDetails.image}`} className="img-fluid rounded shadow-sm" alt={productDetails.name} />
                           
                                {/* <div className="text-center text-muted p-5">
                                    <i className="fas fa-images fa-5x mb-3"></i>
                                    <p className="font-weight-bold">No productDetails Image Available</p>
                                </div> */}
                           
                        </div>
                    </div>
                </div>

                {/* --- Right Side: productDetails Details --- */}
                <div className="col-lg-7 mb-4">
                    <div className="card shadow border-0 h-100">
                        <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                            <h5 className="m-0 font-weight-bold text-primary">productDetails Specifications</h5>
                            <span className="badge badge-info px-3 py-2 text-dark">{productDetails.category_name}</span>
                        </div>
                        <div className="card-body p-4">
                            <h2 className="font-weight-bold text-dark mb-3">{productDetails.name}</h2>
                            
                            {/* Pricing Section */}
                            {/* <div className="mb-4 p-3 bg-light rounded d-flex align-items-center justify-content-between">
                                <div>
                                    <p className="small text-muted mb-1">Selling Price</p>
                                    <h3 className="text-primary font-weight-bold mb-0">
                                        {discountPrice.toLocaleString()} Ks
                                    </h3>
                                    {productDetails.rate > 0 && (
                                        <del className="text-muted small">{productDetails.price.toLocaleString()} Ks</del>
                                    )}
                                </div>
                                {productDetails.rate > 0 && (
                                    <div className="text-right">
                                        <span className="badge badge-danger p-2">
                                            <i className="fas fa-tag mr-1"></i> {productDetails.rate}% Discount Applied
                                        </span>
                                    </div>
                                )}
                            </div> */}

                            {/* Info Grid */}
                            <div className="row mb-4">
                                <div className="col-sm-6 mb-3">
                                    <label className="small font-weight-bold text-muted d-block">Inventory Status</label>
                                    <span className={`badge ${productDetails.available_item <= 3 ? 'badge-warning' : 'badge-success'} px-3 py-2`}>
                                        <i className="fas fa-warehouse mr-1"></i> {productDetails.available_item} Units in Stock
                                    </span>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label className="small font-weight-bold text-muted d-block">Created Date</label>
                                    <span className="text-dark"><i className="far fa-calendar-alt mr-1"></i>{moment(productDetails.created_at).format('MMMM Do YYYY,h:mm a')}</span>
                                </div>
                            </div>

                            <hr />

                            {/* Description */}
                            <div className="mb-4">
                                <label className="small font-weight-bold text-muted">productDetails Description</label>
                                <p className="text-dark leading-relaxed">
                                    {productDetails.description}
                                </p>
                            </div>

                            {/* Footer Actions */}
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary px-4 mr-2">
                                    <i className="fas fa-edit mr-2"></i>Edit Product
                                </button>
                                <button  className="btn btn-danger px-4">
                                    <i className="fas fa-trash-alt mr-2"></i>Delete
                                </button>
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

export default ProductView;