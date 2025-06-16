'use client';

import React from 'react';

interface ComponentPageWrapperClientProps {
  children: React.ReactNode;
}

export default function ComponentPageWrapperClient({ children }: ComponentPageWrapperClientProps) {
  return <>{children}</>;
}
