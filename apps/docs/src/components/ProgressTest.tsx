import React from 'react';
import { Progress } from '@forteui/core';

// Simple test component to verify Progress is working
export function ProgressTest() {
  return (
    <div className="p-4 space-y-4">
      <h3>Progress Test</h3>
      <Progress value={50} variant="linear" color="primary" />
      <Progress value={75} variant="circular" color="success" />
    </div>
  );
}
