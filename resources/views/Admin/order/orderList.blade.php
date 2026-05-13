@extends('admin.layouts.master')

@section('content')
    <!-- Begin Page Content -->
    <div class="container-fluid">

        <div class=" d-flex justify-content-between my-2">
            <a href=""> <button class=" btn btn-sm btn-secondary  "> Order List</button> </a>
            <div class="">
                <form action="" method="get">
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
                <table class="table table-hover table-bordered border text-center shadow-sm ">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>Date</th>
                            <th>Order Code</th>
                            <th>User Name</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($order as $item)
                        {{-- @dd($order->toArray()) --}}
                            <tr>
                                <input type="hidden" class="orderCode" value="{{ $item->order_code }}">
                                <td>{{ $item->created_at->format('j-F-Y') }}</td>

                                <td><a href="{{ route('admin#orderDetails', $item->order_code) }}">{{ $item->order_code }}</a>
                                </td>

                                <td>{{ $item->user_name }}</td>
                                <td>

                                    <select name="" class="form-select  statusChange" id="">
                                        <option value="0" @if ($item->status == 0) selected @endif>Pending
                                        </option>
                                        <option value="1" @if ($item->status == 1) selected @endif>Accept
                                        </option>
                                        <option value="2" @if ($item->status == 2) selected @endif>Reject
                                        </option>
                                    </select>

                                </td>

                                <td>
                                    @if ($item->status == 0)
                                        <span><i class="fa-regular fa-clock text-warning"></i></span>
                                    @endif
                                    @if ($item->status == 1)
                                        <span><i class="fa-solid fa-check text-success"></i></span>
                                    @endif
                                    @if ($item->status == 2)
                                        <span><i class="fa-regular fa-circle-xmark text-danger"></i></span>
                                    @endif
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>

                <span class=" d-flex justify-content-end"></span>

            </div>
        </div>

    </div>
@endsection
