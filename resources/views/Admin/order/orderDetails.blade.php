@extends('admin.layouts.master')

@section('content')
    <!-- Begin Page Content -->
    <div class="container-fluid">


        <a href="{{ route('admin#orderList') }}" class=" text-black m-3"> <i class="fa-solid fa-arrow-left-long"></i> Back</a>

        <!-- DataTales Example -->


        <div class="row">
            <div class="card col-5 shadow-sm m-4 col">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-5">Name :</div>
                        <div class="col-7">{{ $payslipData->user_name }}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-5">Phone :</div>
                        <div class="col-7">
                            @if ($payslipData->phone != $order[0]->user_phone)
                                {{ $payslipData->phone }}
                            @endif {{ $order[0]->user_phone }}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-5">Addr :</div>
                        <div class="col-7">
                            {{ $payslipData->address }}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-5">Order Code :</div>
                        <div class="col-7" id="orderCode">{{ $payslipData->order_code }}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-5">Order Date :</div>
                        <div class="col-7">{{ $payslipData->created_at->format('j-F-Y') }}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-5">Total Price :</div>
                        <div class="col-7">
                            {{ $payslipData->total_amt }} mmk<br>
                            <small class=" text-danger ms-1">( Contain Delivery Charges )</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card col-5 shadow-sm m-4 col">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-5">Contact Phone :</div>
                        <div class="col-7">{{ $payslipData->phone }}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-5">Payment Method :</div>
                        <div class="col-7">{{ $payslipData->payment_method }}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-5">Purchase Date :</div>
                        <div class="col-7">{{ $payslipData->created_at->format('j-F-Y h:m:s') }}</div>
                    </div>
                    <div class="row mb-3">
                        <img style="width: 150px" src="{{ asset('payslip/' . $payslipData->payslip_image) }}"
                            class=" img-thumbnail">
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="d-flex justify-content-between">
                    <div class="">
                        <h6 class="m-0 font-weight-bold text-primary">Order Board</h6>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover text-center shadow-sm " id="productTable">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th class="col-2">Image</th>
                                <th>Name</th>
                                <th>Order Count</th>
                                <th>Available Stock</th>
                                <th>Product Price (each)</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            @foreach ($order as $item)
                                <tr>
                                    <input type="hidden" class="productId" value="{{ $item->product_id }}">
                                    <input type="hidden" class="productOrderCount" value="{{ $item->order_count }}">

                                    <td>
                                        <img src="{{ asset('product/' . $item->product_image) }}"
                                            class=" w-50 img-thumbnail">
                                    </td>
                                    <td>{{ $item->product_name }}</td>
                                    <td>{{ $item->order_count }}@if ($item->available_stock < $item->order_count)
                                            <span class="text-danger">(out of stock)</span>
                                        @endif
                                    </td>
                                    <td>{{ $item->available_stock }}
                                         @if ($item['stock'] <= 3)
                                                <span
                                                    class="  text-white p-1  rounded-pill bg-danger" style="font-size:0.8rem;" >
                                                    Low amt stock
                                                </span>
                                            @endif
                                    </td>
                                    <td>{{ $item->product_price }} mmk</td>
                                    <td>{{ $item->order_count * $item->product_price }} mmk</td>

                                </tr>
                            @endforeach

                        </tbody>

                    </table>

                </div>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <div class="">
                    <input type="button" @if (!$status) disabled @endif id="btn-order-confirm"
                        class="btn btn-success rounded shadow-sm" value="Confirm ">

                    <input type="button" id="btn-order-cancle" class="btn btn-danger rounded shadow-sm" value="Cancle ">
                </div>
            </div>
        </div>

    </div>
    <!-- /.container-fluid -->
@endsection
