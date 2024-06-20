@extends('layouts.master')
@section('content')
<body>
    <div class="container-fluid">
        <div class="row intro">
            <div class="col-md-5 intro-content">
                <div class="intro-text">
                    <h1 class="text-left" >THIS IS ELVIS HAVI</h1>
                    <h1 class="headline"></h1>
                </div>
            </div>
            <div class="col-md-4">
                <div class="img">
                    <img src=" {{asset('images/image1.jpg')}} " alt="">
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</body>

@endsection