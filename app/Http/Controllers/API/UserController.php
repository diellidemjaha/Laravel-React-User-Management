<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function index()
    {
        $users = User::all();
        return response()->json([
            'status'=> 200,
            'users'=>$users,
        ]);

    }

   public function store(Request $request)
   {
    $student = new User;
    $student->name = $request->input('name');
    $student->profession = $request->input('profession');
    $student->email = $request->input('email');
    $student->phone = $request->input('phone');
    $student->save();

    return response()->json([
        'status'=> 200,
        'message'=>'User added successfully'
    ]);
   }

   public function edit(Request $request, $id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json([
            'status' => 404,
            'message' => 'User not found',
        ]);
    }

    // Update user data
    $user->name = $request->input('name');
    $user->profession = $request->input('profession');
    $user->email = $request->input('email');
    $user->phone = $request->input('phone');
    $user->save();

    return response()->json([
        'status' => 200,
        'message' => 'User updated successfully',
    ]);
}

public function destroy($id)
{
    $user = User::find($id);
    $user->delete();
    return response()->json([
        'status' => 200,
        'message' => 'User deleted successfully',
    ]);

}

}
