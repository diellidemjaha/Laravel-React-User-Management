<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DatabaseTestController extends Controller
{
    //
    public function test()
    {
        try {
            DB::connection()->getPdo();
            return 'Database connection established.';
        } catch (\Exception $e) {
            return 'Database connection failed: ' . $e->getMessage();
        }
    }
}


// ...

