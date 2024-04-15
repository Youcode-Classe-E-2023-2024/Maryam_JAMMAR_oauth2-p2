<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testRegister()
    {
        $userData = [
            'name' => 'Sara',
            'email' => 'sara5020@gmail.com',
            'password' => 'password123',
            'role' => 2,
        ];

        $response = $this->json('POST', '/api/auth/signup', $userData);

        $response->assertStatus(201)
            ->assertJson([
                'message' => 'User registered successfully'
            ]);
    }

}
