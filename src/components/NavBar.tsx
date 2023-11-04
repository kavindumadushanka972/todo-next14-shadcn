'use client';

import React from 'react';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavBar = () => {
  const { setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 shadow w-full p-2 flex md:flex-row-reverse justify-between items-center fixed top-0 right-0 z-10 md:pl-60 ml-0 h-[60px]">
      <div className="ml-5 block md:hidden">
        <Image
          src="/assets/logo.webp"
          alt="logo"
          width={100}
          height={100}
          style={{ width: '80px', height: 'auto' }}
          priority
        />
      </div>

      <div className="flex">
        <div className="my-auto mx-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
