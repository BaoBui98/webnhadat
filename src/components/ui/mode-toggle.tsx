'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }}
      variant="outline"
      size="icon"
    >
      <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 opacity-0 transition-all dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </Button>
  );
}
