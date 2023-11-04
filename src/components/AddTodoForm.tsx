'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addTodo } from '@/redux/features/todo-slice';

const formSchema = z.object({
  task: z.string().min(1),
});

const AddTodoForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    dispatch(addTodo({ id: Date.now(), name: values.task, done: false }));
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your task" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="sm" type="submit">Add</Button>
      </form>
    </Form>
  );
};

export default AddTodoForm;
