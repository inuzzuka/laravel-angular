<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function getTodos()
    {
        return response()->json(Todo::all());
    }

    public function getTodoId($id)
    {
        $todo = Todo::find($id);
        if (is_null($todo)) {
            return response()->json(['message' => 'Todo not found'], 404);
        }
        return response()->json($todo, 200);
    }

    public function addTodo(Request $request)
    {
        $todo = Todo::create($request->all());
        return response($todo, 201);
    }

    public function deleteTodo($id)
    {
        $todo = Todo::find($id);
        if (is_null($todo)) {
            return response()->json(['message' => 'Todo not found'], 404);
        }
        $todo->delete();
        return response()->json(null, 204);
    }

    public function editTodo(Request $request, $id)
    {
        $todo = Todo::find($id);
        if (is_null($todo)) {
            return response()->json(['message' => 'Todo not found'], 404);
        }
        $todo->update($request->all());
        return response($todo, 201);
    }
}
