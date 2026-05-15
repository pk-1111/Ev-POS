
import { useForm } from '@inertiajs/react';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';
import '/public/Admin/css/sb-admin-2.min.css';
import { useState } from 'react';

const ProductEdit = ({ product, categories }) => {


    const [preview, setPreview] = useState(
        product.image ? `/product/${product.image}` : null
    );

    const { data, setData, post, reset } = useForm({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        image: product.image,
        category_id: product.category_id

    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setData('image', file);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('editProduct'), {
            forceFormData: true,
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
                    <div className="container-fluid py-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10">
                                <div className="card shadow-sm border-0 rounded-lg">
                                    <div className="card-header bg-white py-3">
                                        <h5 className="m-0 font-weight-bold text-primary text-center">
                                            <i className="fas fa-plus-circle mr-2"></i>Add New Product
                                        </h5>
                                    </div>

                                    <div className="card-body p-4">
                                        <form onSubmit={submit}>
                                            {/* --- Image Upload Section --- */}
                                            <div className="text-center mb-4">
                                                <div className="position-relative d-inline-block mb-3">
                                                    {preview ? (
                                                        <img
                                                            src={preview}
                                                            className="img-thumbnail shadow-sm"
                                                            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                                                            alt="preview"
                                                        />
                                                    ) : (
                                                        <div
                                                            className="border rounded d-flex align-items-center justify-content-center bg-light"
                                                            style={{ width: '200px', height: '200px' }}
                                                        >
                                                            <div className="text-muted text-center">
                                                                <i className="fas fa-image fa-3x mb-2"></i>
                                                                <p className="small mb-0">No Image</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="custom-file w-75 mx-auto d-block">
                                                    <input
                                                        type="file"
                                                        className="form-control form-control-sm"
                                                        onChange={handleFileChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* --- Form Fields --- */}
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label className="small font-weight-bold text-dark">Product Name</label>
                                                    <input type="text" className="form-control" defaultValue={product.name} value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Enter product name..." />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="small font-weight-bold text-dark">Category</label>
                                                    <select className="form-control" defaultValue={product.category_id} onChange={e => setData('category_id', e.target.value)}>
                                                        <option value="">Choose Category...</option>
                                                        {categories && categories.map((item) => (
                                                            <option key={item.category_id} value={item.category_id}>
                                                                {item.title}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label className="small font-weight-bold text-dark">Price (MMK)</label>
                                                    <input type="number" className="form-control" value={data.price} onChange={e => setData('price', e.target.value)} placeholder="0.00" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="small font-weight-bold text-dark">Stock Quantity</label>
                                                    <input type="number" className="form-control" value={data.stock} onChange={e => setData('stock', e.target.value)} placeholder="0" />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="small font-weight-bold text-dark">Discount Rate (%)</label>
                                                <input type="number" className="form-control" placeholder="5%" />
                                            </div>

                                            <div className="mb-4">
                                                <label className="small font-weight-bold text-dark">Description</label>
                                                <textarea className="form-control" rows="4" value={data.description} onChange={e => setData('description', e.target.value)} placeholder="Write product details here..."></textarea>
                                            </div>

                                            <div className="mt-4">
                                                <button type="submit" className="btn btn-primary btn-block shadow-sm py-2">
                                                    <i className="fas fa-save mr-2"></i>Edit Product
                                                </button>
                                            </div>
                                        </form>
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

export default ProductEdit;