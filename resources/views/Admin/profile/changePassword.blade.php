@extends('admin.layouts.master')

@section('content')
    <!-- Begin Page Content -->
    <div class="container-fluid">

        <!-- Page Heading -->

        <div class="">
            <div class="row">
                <div class="col-5 offset-2 ">



                    <div class="card">
                        <div class="card-body shadow">
                            <form action="{{route('changePassword')}}" class="p-3 rounded" method="post">
                                @csrf

                                <div class="mb-3">
                                    <label for="exampleFormControlInpull"
                                        class="form-lable ">Old Password</label>
                                    <input type="password" name="oldPassword" class="form-control @error('oldPassword') is-invalid @enderror"
                                        id="exampleFormControlInput1" placeholder="Enter Old Password ...">

                                    @error('oldPassword')
                                        <small class="invalid-feedback">{{ $message }}</small>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInpull" class="form-lable">New Password</label>
                                    <input type="password" name="newPassword"
                                        class="form-control @error('newPassword') is-invalid @enderror"
                                        id="exampleFormControlInput1" placeholder="Enter New Password ...">

                                    @error('newPassword')
                                        <small class="invalid-feedback">{{ $message }}</small>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInpull" class="form-lable">Confirm Password</label>
                                    <input type="password" name="confirmPassword"
                                        class="form-control @error('confirmPassword') is-invalid @enderror"
                                        id="exampleFormControlInput1" placeholder="Enter Confirm Password ...">

                                    @error('confirmPassword')
                                        <small class="invalid-feedback">{{ $message }}</small>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <input type="submit" class="btn btn-primary text-white" value="Change">
                                </div>

                            </form>
                        </div>
                    </div>
                </div>



            </div>
        </div>


    </div>
@endsection
