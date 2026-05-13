@extends('admin.layouts.master')

@section('content')
    <div class="container">
        <div class=" d-flex justify-content-between my-2">
            {{-- <div class="">
                <button class=" btn btn-secondary rounded shadow-sm"> <i class="fa-solid fa-database"></i>
                    Product Count ( {{ count($products) }}) </button>
                <a href="{{ route('List#productsList') }}" class=" btn btn-outline-primary  rounded shadow-sm">All
                    Products</a>
                <a href="{{ route('List#productsList', 'lowAmt') }}" class=" btn btn-outline-danger  rounded shadow-sm">Low
                    Amount
                    Product List</a>
            </div> --}}
            <div class="">
                <form action="{{route('productList')}}" method="get">
                    @csrf
                    <div class="input-group">
                        <input type="text" name="searchKey" value="{{ request('searchKey') }}" class=" form-control"
                            placeholder="Enter Search Key...">
                        <button type="submit" class=" btn bg-dark text-white"> <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-hover  table-bordered border text-center shadow-sm ">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>


                            @foreach ($products as $item)
                                <tr>
                                    <td>{{ $item['id'] }}</td>
                                    <td> <img src="{{ asset('product/' .$item->image) }}" class=" img-thumbnail rounded shadow-sm"
                                            style="width:100px" alt="">
                                    </td>
                                    <td>{{ $item['name'] }}</td>
                                    <td>

                                @if($item->rate > 0)

                                 <span style="text-decoration: line-through; color: gray;">
                                   {{ number_format($item->price) }} Ks
                                   </span><br>

                                     @php
                                      $discountPrice = $item->price - ($item->price * ($item->rate / 100));
                                     @endphp

                                     <b class="text-danger">{{ number_format($discountPrice) }} Ks</b>
                                   <span class="badge text-white bg-danger">{{ $item->rate }}% OFF</span>
                                    @else

                                <b>{{ number_format($item->price) }} Ks</b>
                                 @endif
                                </td>

                                    <td class="col-2">
                                        <button type="button" class="btn btn-secondary position-relative">
                                            {{ $item['stock'] }}
                                            @if ($item['stock'] <= 3)
                                                <span
                                                    class="   position-absolute top-0  translate-middle badge rounded-pill bg-danger">
                                                    Low amt stock
                                                </span>
                                            @endif


                                        </button>
                                    </td>
                                    <td>{{ $item['category_name'] }}</td>
                                    <td>

                                        <a href="{{route('productDetails',$item->id)}}" class="btn btn-sm btn-outline-primary"> <i
                                                class="fa-solid fa-eye"></i>
                                        </a>
                                        <a href="{{route('updateProductPage',$item->id)}}"
                                            class="btn btn-sm btn-outline-secondary"> <i
                                                class="fa-solid fa-pen-to-square"></i> </a>
                                        <a href="{{route('deleteProduct',$item->id)}}" class="btn btn-sm btn-outline-danger"> <i
                                                class="fa-solid fa-trash"></i>
                                        </a>
                                    </td>

                                </tr>
                            @endforeach
                        {{-- @else
                            <tr>
                                <td colspan="7">
                                    <h5 class="text-muted text-center">There is no products</h5>
                                </td>
                            </tr>
                        @endif --}}



                    </tbody>
                </table>



            </div>
        </div>
    </div>
@endsection
