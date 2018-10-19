<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBArticle extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("b_article",function(Blueprint $table){
            $table->increments('article_id');
            $table->integer('article_cate_id')->nullable();
            $table->string('article_title',50)->nullable();
            $table->string('article_sub_content',200)->default('');
            $table->text('article_content');
            $table->string('article_from',20)->default('');
            $table->string('article_author',20)->default('');
            $table->timestamp('pubtime')->useCurrent();
            $table->timestamp('updatetime')->useCurrent();
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
        Schema::drop("b_article");
    }
}
