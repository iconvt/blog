<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Validator;
use Illuminate\Validation\ValidationException;

class BaseModel extends Model
{
    //
    const VALIDATE_FILED=[];
    public function validate(){
        $validate = Validator::make($this->getAttributes(),static::VALIDATE_FILED['rules'],static::VALIDATE_FILED['massages'],static::VALIDATE_FILED['attributes']);
        if ($validate->fails()){
            return new ValidationException($validate);
        }
    }
}
