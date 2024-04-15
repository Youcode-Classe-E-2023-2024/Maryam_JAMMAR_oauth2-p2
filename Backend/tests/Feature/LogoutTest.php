<?php

namespace Tests\Feature;

use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class LogoutTest extends TestCase
{

    /**
     * A basic feature test example.
     */
    public function testLogout()
    {
        $defaultRole = Role::where('role', 'admin')->first();
        $user = User::factory()->create(['role' => $defaultRole->id]);

        $this->actingAs($user, 'api');

        $response = $this->json('POST', '/api/auth/logout');

        // Assert successful logout
        $response->assertStatus(200)
            ->assertJson([
                'message' => 'User logged out successfully'
            ]);

        // Assert the user's token has been revoked
        $this->assertNull($user->refresh()->token());
    }
}
