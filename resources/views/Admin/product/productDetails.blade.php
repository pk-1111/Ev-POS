@extends('admin.layouts.master')

@section('content')
    <!-- Begin Page Content -->
    <div class="container-fluid px-4 py-3 mt-5">

        <a href="{{ route('productList') }}" class=" text-black m-3 "> <i class="fa-solid fa-arrow-left-long"></i>
            Back</a>


        <!-- DataTales Example -->
        <div class="card shadow  col mt-3">

            <form action="" method="post">
                @csrf
                <div class="card-body">
                    <div class="row">
                        <div class="col-3 ">

                            <img class="img-profile img-thumbnail w-100 h-4"
                                src="{{ asset('product/' . $productDetails->image) }}" id="">





                        </div>
                        <div class="col">

                            <div class="row mt-3">

                                <div class="col-2 h5">Name </div>
                                <div class="col-1">-</div>
                                <div class="col h5">
                                    {{ $productDetails->name }}
                                </div>

                            </div>


                            <div class="row mt-3">
                                <div class="col-2 h5">Category </div>
                                <div class="col-1">-</div>
                                <div class="col h5">
                                    {{ $productDetails->category_name }}
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-2 h5">Stock </div>
                                <div class="col-1">-</div>
                                <div class="col h5">
                                    {{ $productDetails->available_item }}
                                </div>
                            </div>



                            <div class="row mt-3">
                                <div class="col-2 h5">Price </div>
                                <div class="col-1">-</div>
                                <div class="col h5">
                                    {{ $productDetails->price }}
                                </div>
                            </div>




                            <div class="row mt-3">
                                <div class="col-2 h5">Description </div>
                                <div class="col-1">-</div>
                                <div class="col h5">
                                    {{ $productDetails->description }}
                                </div>
                            </div>








                        </div>





                    </div>



                </div>
        </div>
    </div>
    </form>
    </div>

    </div>
    <!-- /.container-fluid -->
@endsection
