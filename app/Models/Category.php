<?php

namespace App\Models;

use Illuminate\Validation\Validator;
use PhpParser\Node\Expr\Array_;

class Category extends BaseModel
{
    //
    protected $table = 'b_category';
    protected $primaryKey = 'cate_id';
    public $timestamps = false;
    protected $fillable = [
      'cate_name',"cate_sort"
    ];
    const VALIDATE_FILED = [1,2,3];
//    protected $dispatchesEvents = [];  //注册观察者 这里用了观察者模式observer 批量操作的时候不触发
//    public function lala(){
//
//    }
//    public function create(Array $data){
//        $validate = Validator::validate($data);
//        if ($validate->fails()){
//
//        }else{
//            return parent::create($data);
//        }
//    }

}
