'use client';

import { useEffect, useState } from 'react';

interface ClientBodyProps {
  children: React.ReactNode;
  className: string;
}

export default function ClientBody({ children, className }: ClientBodyProps) {
  return (
    <body className={className} suppressHydrationWarning>
      {children}
    </body>
  );
} 