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

                <div class="col">

                    <table class="table table-hover  table-bordered border text-center shadow-sm">
                        <thead class="bg-primary text-white">
                            <tr>

                                <th>Customer Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Reason</th>
                                <th>Created Date</th>

                            </tr>
                        </thead>
                        <tbody>

                            @foreach ($customer_contacts as $item)
                                <tr>

                                    <td>{{ $item->user_name }}</td>
                                    <td>{{ $item->phone }}</td>
                                    <td>{{ $item->address }}</td>
                                     <td> <img src="{{ asset('contact/' .$item->image) }}" class=" img-thumbnail rounded shadow-sm"
                                            style="width:100px" alt="">
                                    </td>
                                    <td>{{ $item->reason }}</td>
                                    <td>{{ $item->created_at->format('j-F-Y') }}</td>
                            @endforeach


                        </tbody>
                    </table>
                    {{-- <span class="d-flex justify-end text-black">{{ $categories->links() }}</span> --}}
                </div>
            </div>
        </div>


    </div>
@endsection
