<?php

Route::get('/', function () {
    return view('index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('admin/posts', 'Admin\\PostsController', ['middleware' => [
    'auth'
]]);