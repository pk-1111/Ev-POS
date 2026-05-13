import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import '/public/Admin/css/sb-admin-2.min.css';
import Sidebar from '../Siderbar/Siderbar';
import Topbar from '../Topbar/Topbar';

const EditCategory = ({categories}) => {
   

    // form data နဲ့ post method ကို setup လုပ်တာပါ
    const { data, setData, post, processing, errors, reset } = useForm({
        categoryName: categories.title || '', // input ရဲ့ name နဲ့ တူရပါမယ်
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('editCategory',categories.category_id), { // Controller ဆီပို့မယ့် URL (Route လမ်းကြောင်း)
            onSuccess: () => reset(), // အောင်မြင်ရင် input field ကို ပြန်ရှင်းတာပါ
        });
    };
  return (
    <div id="wrapper">
        
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

           <div className="container-fluid">
      
      {/* --- Page Heading --- */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Category List</h1>
      </div>

      <div className="row">
        {/* --- Left Side: Create Category Form --- */}
        <div className="col-lg-4 col-md-5 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Add New Category</h6>
            </div>
            <div className="card-body">
            <form onSubmit={submit} className="p-2" >
    <div className="form-group">
        <input 
            type="text" 
            className="form-control"
            placeholder="Category Name..."
            value={data.categoryName}
            onChange={e => setData('categoryName', e.target.value)}
        />
        {/* Error ရှိရင် ပြဖို့ (optional) */}
        {errors.categoryName && <div className="text-danger small">{errors.categoryName}</div>}
    </div>
    
    <button type="submit" disabled={processing} className="btn btn-primary btn-block mt-3">
        <i className="fas fa-plus fa-sm mr-2"></i> 
        {processing ? 'Updating...' : 'Update'}
    </button>
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

export default EditCategory;