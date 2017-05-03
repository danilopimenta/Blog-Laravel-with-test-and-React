<?php

namespace tests\Feature;

use App\User;
use Tests\TestCase;

class PostTest extends TestCase
{
    public function testPosts()
    {
        $response = $this->json('GET', '/api/post/all');

        $response->assertStatus(200);
    }

    public function testRedirectByWithoutAuth()
    {
        foreach ($this->routesToTestWithoutAuth() as $route) {

            $response = $this->call('GET', $route);
            $response->assertStatus(302);
            $response->assertRedirect('login');

        }
    }

    public function routesToTestWithoutAuth()
    {
        return [
            'admin/posts',
            'admin/posts/create',
            'admin/posts/1',
            'admin/posts/1/edit',
        ];
    }

    public function testCrud()
    {
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->call('GET', 'admin/posts');

        $response->assertStatus(200);
        $response->assertViewHas('posts');

        $posts = $response->original->getData()['posts'];

        $this->assertInstanceOf('Illuminate\Pagination\LengthAwarePaginator', $posts);
    }
}
