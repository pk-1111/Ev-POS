@extends('admin.layouts.master')


@section('content')
   <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Category Update</h1>



        </div>

        <div class="">
            <div class="row">
                <div class="col-4 offset-2">

                  <a href="{{route('categoryListPage')}}" class="mt-3  border borderd-gray-800 rounded-sm text-gray-800 px-10 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors duration-300 ">Back</a>

                    <div class="card mt-3">
                        <div class="card-body shadow">
                            <form action="{{route('updateCategory',$categoryUpdate->category_id)}}" class="p-3 rounded" method="post">
                                @csrf
                                <input type="text"
                                    class="form-control   @error('categoryName')
                                    is-invalid @enderror"
                                    value="{{old('CategoryName', $categoryUpdate->title)}}" name="categoryName" placeholder="Category Name ...">

                                @error('categoryName')
                                    <small class="invalid-feedback">{{$message}}</small>
                                @enderror

                                <input type="submit" class="btn btn-outline-primary mt-3" value="Update" id="">
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
@endsection
