<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input;
//use App\Services\CategoryService;
use Category;

class ArticleController extends Controller
{
    //
    public function lists(Request $request){
//        dd(Input::get());
        $data=[
            [
                'title'=>'每日一爆',
                'pub_date'=>'2018-09-12'
            ],
            [
                'title'=>'每日一爆',
                'pub_date'=>'2018-09-13'
            ],
            [
                'title'=>'每日一爆',
                'pub_date'=>'2018-09-14'
            ],
            [
                'title'=>'每日一爆',
                'pub_date'=>'2018-09-15'
            ]
        ];
//        return Response::create($data);
        Category::addCategory(Input::get());
    }
}
