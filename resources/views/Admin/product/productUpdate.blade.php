@extends('admin.layouts.master')

@section('content')
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            {{-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus illum earum deserunt,
            laudantium natus fuga aliquid maiores, quasi dolorum ipsum magni ut dolores. Eaque laborum deleniti in dolorem blanditiis voluptatum.
 --}}
            <div class="container">
                <div class="row">
                    <div class="col-8 offset-2 card p-3 shadow-sm rounded">

                        <form action="{{ route('updateProduct') }}" method="post" enctype="multipart/form-data">
                            @csrf
                            <input type="hidden" name="oldPhoto" value="{{ $product->image }}">
                            <input type="hidden" name="productId" value="{{ $product->id }}">
                            <div class="card-body">
                                <div class="mb-3">
                                    <img class="img-profile w-50  " id="output"
                                        src="{{ asset('product/' . $product->image) }}">


                                    <input type="file" name="image" id=""
                                        class="form-control mt-1  @error('image') is-invalid @enderror "
                                        onchange="loadFile(event)">

                                    @error('image')
                                        <small class="invalid-feedback">{{ $message }}</small>
                                    @enderror

                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label class="form-label">Name</label>
                                            <input type="text" name="name" value="{{ old('name', $product->name) }}"
                                                class="form-control  @error('name') is-invalid @enderror"
                                                placeholder="Enter Name...">
                                            @error('name')
                                                <small class="invalid-feedback">{{ $message }}</small>
                                            @enderror

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3">
                                            <label class="form-label">Category Name</label>
                                            <select name="categoryId" id=""
                                                class="form-control  @error('categoryId') is-invalid @enderror ">
                                                <option value="">Choose Category...</option>

                                                @foreach ($categories as $item)
                                                    <option value="{{ $item->category_id }}"
                                                        @if (old('categoryId', $product->category_id) == $item->category_id) selected @endif>
                                                        {{ $item->title }}</option>
                                                @endforeach

                                            </select>

                                            @error('categoryId')
                                                <small class="invalid-feedback">{{ $message }}</small>
                                            @enderror

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label class="form-label">Price</label>
                                            <input type="text" name="price"
                                                value="{{ old('price', $product->price) }}"
                                                class="form-control  @error('price') is-invalid @enderror"
                                                placeholder="Enter Email...">

                                            @error('price')
                                                <small class="invalid-feedback">{{ $message }}</small>
                                            @enderror

                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3">
                                            <label class="form-label">Stock</label>
                                            <input type="text" name="stock"
                                                value="{{ old('stock', $product->stock) }}"
                                                class="form-control  @error('stock') is-invalid @enderror"
                                                placeholder="Enter Email...">
                                            @error('stock')
                                                <small class="invalid-feedback">{{ $message }}</small>
                                            @enderror

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label class="form-label">Discount</label>
                                            <input type="number" name="rate" class="form-control "
                                                value="{{ old('rate', $product->rate) }}" placeholder="Enter discount...">



                                        </div>
                                    </div>

                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea name="description" id="" cols="30" rows="10"
                                        class="form-control  @error('description') is-invalid @enderror" placeholder="Enter Password...">{{ old('description', $product->description) }}</textarea>
                                    @error('description')
                                        <small class="invalid-feedback">{{ $message }}</small>
                                    @enderror

                                </div>

                                <div class="mb-3">
                                    <input type="submit" value="Create Product"
                                        class=" btn btn-primary w-100 rounded shadow-sm">
                                </div>
                            </div>
                        </form>


                    </div>

                </div>
            </div>

        </div>


    </div>
@endsection
