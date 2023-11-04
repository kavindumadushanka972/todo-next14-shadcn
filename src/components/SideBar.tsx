'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button';

const SideBar = () => {
  return (
    <div className="p-2 bg-white dark:bg-gray-900 w-60 hidden md:block fixed top-0 left-0 bottom-0 z-20">
      <div className="ml-5">
        <Image
          src="/assets/logo.webp"
          alt="logo"
          width={100}
          height={100}
          style={{ width: '100px', height: 'auto' }}
          priority
        />
      </div>

      <div className="mt-4">
        <Button className="w-full" variant="secondary">
          Home
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
