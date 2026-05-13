import React from 'react';
import '/public/Admin/css/sb-admin-2.min.css';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

const ProductList = ({products}) => {

     const handleDelete = (id) => {
        // console.log("Deleting ID:",id);
          
                router.delete(`/delete-list/${id}`)
           
        }
    

    return (

     <div id="wrapper">
        
            <Sidebar />
             <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
               <Topbar />

                   <div className="container-fluid py-4">
            {/* --- Header Section --- */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800 font-weight-bold">Product Inventory</h1>
                <div className="d-flex shadow-sm rounded overflow-hidden">
                    <input type="text" className="form-control border-0" placeholder="Search product..." style={{ width: '250px' }} />
                    <button className="btn btn-dark rounded-0">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>

            {/* --- Table Card --- */}
            <div className="card shadow border-0">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="bg-primary text-white text-center">
                                <tr>
                                    <th className="py-3">ID</th>
                                    <th>Image</th>
                                    <th>Product Details</th>
                                    <th>Pricing</th>
                                    <th>Inventory</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {products.map((item) => (
                                    <tr key={item.id}>
                                        <td className="text-muted">#{item.id}</td>
                                        <td>
                                            <div className="p-1 border rounded d-inline-block bg-light">
                                                <i className="fas fa-box fa-2x text-secondary p-2"></i> 
                                                <img src={`/product/${item.image}`} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
                                            </div>
                                        </td>
                                        <td className="text-left">
                                            <span className="d-block font-weight-bold text-dark">{item.name}</span>
                                            <small className="text-muted">SKU: PROD-{item.id}2024</small>
                                        </td>
                                        <td>
                                            {item.rate > 0 ? (
                                                <div className="text-right d-inline-block">
                                                    <del className="small text-muted d-block">{item.price.toLocaleString()} Ks</del>
                                                    <span className="text-danger font-weight-bold">
                                                        {(item.price - (item.price * item.rate / 100)).toLocaleString()} Ks
                                                    </span>
                                                    <span className="badge badge-danger ml-2">-{item.rate}%</span>
                                                </div>
                                            ) : (
                                                <span className="font-weight-bold">{item.price.toLocaleString()} Ks</span>
                                            )}
                                        </td>
                                        <td>
                                            <div className="d-flex flex-column align-items-center">
                                                <span className={`badge badge-pill ${item.stock <= 3 ? 'badge-warning' : 'badge-light border'}`}>
                                                    {item.stock} Units
                                                </span>
                                                {item.stock <= 3 && (
                                                    <small className="text-danger mt-1 font-weight-bold" style={{fontSize: '10px'}}>
                                                        <i className="fas fa-exclamation-triangle mr-1"></i>Low Stock
                                                    </small>
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-info px-3 py-2">{item.category_name}</span>
                                        </td>
                                        <td>
                                            <div className="btn-group shadow-sm">
                                                 <Link   href={route('productViewPage',item.id)}  
                                                    type="button"   className="btn btn-sm btn-white text-primary border" title="View">
                                                 <i className="fas fa-eye"></i>
                                                 </Link>
                                                {/* <button className="btn btn-sm btn-white text-primary border" title="View">
                                                    <i className="fas fa-eye"></i>
                                                </button> */}

                                                <Link href={route('editProductPage',item.id)}
                                                 type="button" 
                                                className="btn btn-sm btn-white text-info border" title="Edit">
                                                   <i className="fa-solid fa-pen-to-square"></i>
                                                </Link>
                                                <button >
                                                  
                                                </button>
                                                <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-white text-danger border" title="Delete">
                                                   <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* --- Pagination Placeholder --- */}
                <div className="card-footer bg-white border-0 py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">Showing 1 to 2 of 10 entries</small>
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                <li className="page-item disabled"><span className="page-link">Previous</span></li>
                                <li className="page-item active"><span className="page-link">1</span></li>
                                <li className="page-item"><span className="page-link">2</span></li>
                                <li className="page-item"><span className="page-link">Next</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

             </div>    
          </div>  
    </div>  
       
    );
};

export default ProductList;