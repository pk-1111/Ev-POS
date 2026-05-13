@extends('admin.layouts.master')



@section('content')
    <div class="container">
        <div class=" d-flex justify-content-between my-2">
            <a href=""> <button class=" btn btn-sm btn-secondary  "> Admin List</button> </a>
            <div class="">
                <form action="{{ route('adminListPage') }}" method="get">
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Role</th>
                            <th>Created Date</th>
                            <th>Platform</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($admin as $item)
                            <tr>
                                <td>{{ $item['id'] }}</td>
                                <td>{{ $item['name'] }}</td>
                                <td>{{ $item['email'] }}</td>
                                <td>{{ $item['phone'] }}</td>
                                <td>{{ $item['address'] }}</td>
                                <td><span class="text-danger">{{ $item['role'] }}</span></td>

                                <td>{{ $item->created_at->format('j-F-Y') }}</td>
                                <td>

                                    {{ $item->provider ?? 'simple'}}
                                    @if ($item->provider == 'google')
                                        <i class="fa-brands fa-google"></i>
                                   
                                      @elseif($item->provider == 'simple' || $item->provider == null )
                                       <i class="fa-solid fa-user"></i>
                                    @endif
                                </td>
                                <td>
                                    @if ($item->role != 'superadmin')
                                        <a href=""
                                            class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></a>
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
