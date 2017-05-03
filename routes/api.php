<?php

$postApiConfig = [
    'prefix'        => 'post',
    'as'            => 'api.post',
    'namespace'     => 'Admin'
];

Route::group($postApiConfig, function () {
    Route::get('all', ['as' => 'all', 'uses' => 'PostsController@all']);
});