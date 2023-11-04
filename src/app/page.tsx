'use client';

import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="md:col-span-1 col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Add Todo</CardTitle>
            <CardDescription>Type and save your task</CardDescription>
          </CardHeader>
          <CardContent>
            <AddTodoForm />
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-1 col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Todo List</CardTitle>
            <CardDescription>Manage your tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <TodoList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
