<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

/**
 *@OA\Get(
 *    path="/api/permissions",
 *    summary="Permissions data",
 *    tags={"Permissions"},
 *@OA\Parameter(
 *    name="name",
 *    in="query",
 *    description="",
 *    required=false,
 *    @OA\Schema(type="string")
 *),
 *@OA\Parameter(
 *    name="criteria",
 *    in="query",
 *    description="Some optional other parameter",
 *    required=false,
 *    @OA\Schema(type="string")
 *),
 *@OA\Response(
 *    response="200",
 *    description="Returns some sample category things",
 *    @OA\JsonContent()
 *),
 *@OA\Response(
 *    response="400",
 *    description="Error: Bad request. When required parameters were not supplied.",
 *),
 *)
 */


class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::latest()->get();

        if (is_null($permissions->first())) {
            return response()->json([
                'status' => 'failed',
                'message' => 'No permission found!',
            ], 200);
        }

        $response = [
            'status' => 'success',
            'message' => 'Permissions are retrieved successfully.',
            'data' => $permissions,
        ];

        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'permission' => 'required|string|max:250|unique:permissions,permission'
        ]);

        if ($validate->fails()) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Validation Error!',
                'data' => $validate->errors(),
            ], 403);
        }

        $permission = Permission::create($request->all());

        $response = [
            'status' => 'success',
            'message' => 'Permission is added successfully.',
            'data' => $permission,
        ];

        return response()->json($response, 200);
    }

    public function show($id)
    {
        $permission = Permission::find($id);

        if (is_null($permission)) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Permission is not found!',
            ], 200);
        }

        $response = [
            'status' => 'success',
            'message' => 'Permission is retrieved successfully.',
            'data' => $permission,
        ];

        return response()->json($response, 200);
    }

    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'permission' => 'required'
        ]);

        if($validate->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => 'Validation Error!',
                'data' => $validate->errors(),
            ], 403);
        }

        $permission = Permission::find($id);

        if (is_null($permission)) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Permission is not found!',
            ], 200);
        }

        $permission->update($request->all());

        $response = [
            'status' => 'success',
            'message' => 'Permission is updated successfully.',
            'data' => $permission,
        ];

        return response()->json($response, 200);
    }

    public function destroy($id)
    {
        $permission = Permission::find($id);

        if (is_null($permission)) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Permission is not found!',
            ], 200);
        }

        Permission::destroy($id);
        return response()->json([
            'status' => 'success',
            'message' => 'Permission is deleted successfully.'
        ], 200);
    }
}
