<?php
namespace App\Services;

use App\Models\Category;

class CategoryService{

    public function addCategory(Array $data){
        return Category::create($data);
    }
}