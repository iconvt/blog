<?php

namespace App\Providers;

use App\Services\CategoryService;
use Illuminate\Support\ServiceProvider;

// include the class facade binded
use App\Facades\Category;

class FacadesServiceProvider extends ServiceProvider
{
    /**
     * 在容器中注册绑定。
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('CategoryService', function ($app) {
            return new CategoryService($app);
        });
    }
}
?>