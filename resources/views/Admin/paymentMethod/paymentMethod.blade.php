

@extends('admin.layouts.master')

@section('content')
    <!-- Begin Page Content -->
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Category List</h1>

        </div>

        <div class="">
            <div class="row">
                <div class="col-5 ">
                    <div class="card">
                        <div class="card-body shadow">
                            <form action="{{route("paymentMethodCreate")}}" class="p-3 rounded" method="post">
                                @csrf
                                <label for="">Account No.</label>
                                <input type="text"
                                    class="form-control  @error('accountNumber')
                                    is-invalid @enderror"
                                    value="" name="accountNumber" placeholder="Account No. ...">

                                @error('accountNumber')
                                    <small class="invalid-feedback">{{ $message }}</small>
                                @enderror
                                  <label for=""  class="mt-3">Account Name.</label>
                                <input type="text"
                                    class="form-control  @error('accountName')
                                    is-invalid @enderror"
                                    value="" name="accountName" placeholder="Account Name ...">

                                @error('accountName')
                                    <small class="invalid-feedback">{{ $message }}</small>
                                @enderror
                                  <label for="" class="mt-3">Type</label>

                                         <input type="text"
                                    class="form-control  @error('accountType')
                                    is-invalid @enderror"
                                    value="" name="accountType" placeholder="Account Type ...">


                                            @error('accountType')
                                                <small class="invalid-feedback">{{ $message }}</small>
                                            @enderror

                                <input type="submit" class="btn btn-outline-primary mt-3" value="Create Payment" id="">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-7">

                    <table class="table table-hover  table-bordered border text-center shadow-sm">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>Account No.</th>
                                <th>Account Name</th>
                                <th>Type</th>
                                <th>Created at</th>

                            </tr>
                        </thead>
                        <tbody>

                        @foreach ($payments as $item )
                                    <tr>
                                        <td>{{$item['id']}}</td>
                                        <td>{{ $item['account_number'] }}</td>
                                        <td>{{ $item['account_name'] }}</td>
                                        <td>{{$item['type']}}</td>
                                        <td>{{ $item->created_at->format('j-F-Y') }}</td>



                                            {{-- <a href="{{ route('category#updatePage', $item['category_id']) }}"><i
                                                    class="fas fa-pen-to-square btn btn-sm btn-outline-primary"></i></a>
                                            <a href="{{ route('category#delete', $item['category_id']) }}"
                                                class="btn btn-sm  btn-outline-danger"><i class="fas fa-trash "></i></a> --}}

                                    </tr>
                                @endforeach

                            {{-- @if (count() != 0)
                                @foreach ( as )
                                    <tr>
                                        <td>{{ $item['category_id'] }}</td>
                                        <td>{{ $item['title'] }}</td>
                                        <td>{{ $item->created_at->format('j-F-Y') }}</td>
                                        <td>{{ $item->updated_at->format('j-F-Y') }}</td>

                                        <td>
                                            <a href="{{ route('category#updatePage', $item['category_id']) }}"><i
                                                    class="fas fa-pen-to-square btn btn-sm btn-outline-primary"></i></a>
                                            <a href="{{ route('category#delete', $item['category_id']) }}"
                                                class="btn btn-sm  btn-outline-danger"><i class="fas fa-trash "></i></a>
                                        </td>
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td colspan="4">
                                        <h3 class="text-muted">There is no data...</h3>
                                    </td>
                                </tr>
                            @endif --}}

                        </tbody>
                    </table>
                    {{-- <span class="d-flex justify-end text-black">{{ $categories->links() }}</span> --}}
                </div>
            </div>
        </div>


    </div>
@endsection
