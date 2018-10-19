<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBCategory20181019 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create("b_category",function(Blueprint $table){
            $table->increments('cate_id');
            $table->integer('cate_parent_id')->nullable()->comment('父id')->default(0);
            $table->string('cate_name')->nullable()->charset('utf8')->comment('分类名称');
            $table->smallInteger('cate_sort')->nullable()->default(0)->comment('分类排序');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('b_category');
    }
}
