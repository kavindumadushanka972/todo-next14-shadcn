'use client';
import React from 'react';
import { removeTodo, toggleTodo } from '@/redux/features/todo-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Trash2 } from 'lucide-react';

const TodoList = () => {
  const { list } = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {list.map((todo) => (
        <div className="flex mb-2 justify-between" key={todo.id}>
          <div>
            <p>{todo.name}</p>
          </div>

          <div className="flex space-x-1">
            <div className="my-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Checkbox
                      checked={todo.done}
                      onClick={() => handleToggle(todo.id)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle Task Status</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="my-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Trash2
                      size={16}
                      className="cursor-pointer"
                      onClick={() => handleDelete(todo.id)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete Task</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
