'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@forteui/core';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { clsx } from 'clsx';

interface PlaygroundProps {
  code: string;
  scope?: Record<string, any>;
  title?: string;
  description?: string;
  showEditor?: boolean;
  editable?: boolean;
}

export function InteractivePlayground({ 
  code, 
  scope = {}, 
  title,
  description,
  showEditor = true,
  editable = true
}: PlaygroundProps) {
  const [isEditorVisible, setIsEditorVisible] = useState(showEditor);
  const [codeState, setCodeState] = useState(code);

  const playgroundScope = useMemo(() => ({
    React,
    useState,
    Button,
    clsx,
    ...scope
  }), [scope]);

  const resetCode = () => {
    setCodeState(code);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {(title || description) && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}

      <LiveProvider code={codeState} scope={playgroundScope} noInline={false}>
        {/* Preview Area */}
        <div className="p-6 bg-white min-h-32 flex items-center justify-center border-b border-gray-100">
          <div className="w-full">
            <LiveError className="text-red-600 text-sm font-mono bg-red-50 p-3 rounded border border-red-200 mb-4" />
            <div className="flex items-center justify-center">
              <LivePreview />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="outline-default"
              size="sm"
              onClick={() => setIsEditorVisible(!isEditorVisible)}
              className="text-xs"
            >
              {isEditorVisible ? 'Hide Code' : 'Show Code'}
            </Button>
            {editable && (
              <Button
                variant="outline-default"
                size="sm"
                onClick={resetCode}
                className="text-xs"
              >
                Reset
              </Button>
            )}
          </div>
          <div className="text-xs text-gray-500">
            Live Preview • Edit code to see changes
          </div>
        </div>

        {/* Code Editor */}
        {isEditorVisible && (
          <div className="relative">
            <LiveEditor
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                padding: '16px',
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                minHeight: '200px',
                outline: 'none',
              }}
              onChange={setCodeState}
              disabled={!editable}
            />
            {!editable && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded shadow text-sm">
                  Read-only example
                </div>
              </div>
            )}
          </div>
        )}
      </LiveProvider>
    </div>
  );
}

interface PropControllerProps {
  component: string;
  props: Array<{
    name: string;
    type: 'string' | 'boolean' | 'number' | 'select';
    default: any;
    options?: any[];
    description?: string;
  }>;
  onPropsChange: (props: Record<string, any>) => void;
}

export function PropController({ component, props, onPropsChange }: PropControllerProps) {
  const [currentProps, setCurrentProps] = useState<Record<string, any>>(
    props.reduce((acc, prop) => ({ ...acc, [prop.name]: prop.default }), {})
  );

  const updateProp = (name: string, value: any) => {
    const newProps = { ...currentProps, [name]: value };
    setCurrentProps(newProps);
    onPropsChange(newProps);
  };

  return (
    <div className="bg-gray-50 p-6 border-t border-gray-200">
      <h4 className="text-sm font-semibold text-gray-900 mb-4">
        {component} Props
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.map((prop) => (
          <div key={prop.name} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {prop.name}
              {prop.description && (
                <span className="text-xs text-gray-500 font-normal block">
                  {prop.description}
                </span>
              )}
            </label>
            
            {prop.type === 'boolean' && (
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={currentProps[prop.name] || false}
                  onChange={(e) => updateProp(prop.name, e.target.checked)}
                  className="rounded border-gray-300 text-primary-main focus:ring-primary-main"
                />
                <span className="ml-2 text-sm">
                  {currentProps[prop.name] ? 'true' : 'false'}
                </span>
              </label>
            )}

            {prop.type === 'string' && (
              <input
                type="text"
                value={currentProps[prop.name] || ''}
                onChange={(e) => updateProp(prop.name, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary-main focus:border-transparent"
                placeholder={`Enter ${prop.name}`}
              />
            )}

            {prop.type === 'number' && (
              <input
                type="number"
                value={currentProps[prop.name] || 0}
                onChange={(e) => updateProp(prop.name, parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary-main focus:border-transparent"
              />
            )}

            {prop.type === 'select' && prop.options && (
              <select
                value={currentProps[prop.name] || prop.default}
                onChange={(e) => updateProp(prop.name, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary-main focus:border-transparent"
              >
                {prop.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  copyable?: boolean;
}

export function CodeBlock({ children, language = 'tsx', title, copyable = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group">
      {(title || copyable) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-t-lg">
          <span>{title || language}</span>
          {copyable && (
            <Button
              variant="outline-default"
              size="sm"
              onClick={copyToClipboard}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-xs border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          )}
        </div>
      )}
      <pre className={clsx(
        "overflow-x-auto p-4 text-sm",
        "bg-gray-900 text-gray-100",
        title || copyable ? "rounded-b-lg" : "rounded-lg"
      )}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
} 