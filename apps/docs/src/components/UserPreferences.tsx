'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button } from '@forteui/core';
import { clsx } from 'clsx';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  codeTheme: 'github' | 'dracula' | 'monokai';
  showLineNumbers: boolean;
  autoComplete: boolean;
  searchHistory: boolean;
  analyticsOptOut: boolean;
  language: 'en' | 'es' | 'fr' | 'de';
  favoriteComponents: string[];
  recentlyViewed: string[];
  keyboardShortcuts: boolean;
  soundEffects: boolean;
}

const defaultPreferences: UserPreferences = {
  theme: 'auto',
  reducedMotion: false,
  fontSize: 'medium',
  codeTheme: 'github',
  showLineNumbers: true,
  autoComplete: true,
  searchHistory: true,
  analyticsOptOut: false,
  language: 'en',
  favoriteComponents: [],
  recentlyViewed: [],
  keyboardShortcuts: true,
  soundEffects: false
};

interface PreferencesContextType {
  preferences: UserPreferences;
  updatePreference: <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => void;
  resetPreferences: () => void;
  exportPreferences: () => string;
  importPreferences: (data: string) => boolean;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function UserPreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('forteui-docs-preferences');
      if (savedPreferences) {
        const parsed = JSON.parse(savedPreferences);
        setPreferences({ ...defaultPreferences, ...parsed });
      }
    } catch (error) {
      console.warn('Failed to load user preferences:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('forteui-docs-preferences', JSON.stringify(preferences));
      } catch (error) {
        console.warn('Failed to save user preferences:', error);
      }
    }
  }, [preferences, isLoaded]);

  // Apply theme to document
  useEffect(() => {
    if (!isLoaded) return;

    const applyTheme = () => {
      const { theme } = preferences;
      const root = document.documentElement;
      
      if (theme === 'auto') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', isDark);
      } else {
        root.classList.toggle('dark', theme === 'dark');
      }
    };

    applyTheme();

    if (preferences.theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }
  }, [preferences.theme, isLoaded]);

  // Apply font size
  useEffect(() => {
    if (!isLoaded) return;

    const root = document.documentElement;
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px'
    };
    
    root.style.fontSize = fontSizeMap[preferences.fontSize];
  }, [preferences.fontSize, isLoaded]);

  // Apply reduced motion
  useEffect(() => {
    if (!isLoaded) return;

    const root = document.documentElement;
    root.classList.toggle('reduce-motion', preferences.reducedMotion);
  }, [preferences.reducedMotion, isLoaded]);

  const updatePreference = <K extends keyof UserPreferences>(
    key: K, 
    value: UserPreferences[K]
  ) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  const exportPreferences = () => {
    return JSON.stringify(preferences, null, 2);
  };

  const importPreferences = (data: string): boolean => {
    try {
      const parsed = JSON.parse(data);
      setPreferences({ ...defaultPreferences, ...parsed });
      return true;
    } catch (error) {
      console.error('Failed to import preferences:', error);
      return false;
    }
  };

  const contextValue: PreferencesContextType = {
    preferences,
    updatePreference,
    resetPreferences,
    exportPreferences,
    importPreferences
  };

  return (
    <PreferencesContext.Provider value={contextValue}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function useUserPreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('useUserPreferences must be used within UserPreferencesProvider');
  }
  return context;
}

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreferencesModal({ isOpen, onClose }: PreferencesModalProps) {
  const { preferences, updatePreference, resetPreferences, exportPreferences, importPreferences } = useUserPreferences();
  const [activeTab, setActiveTab] = useState('appearance');
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImport = () => {
    const success = importPreferences(importText);
    setImportStatus(success ? 'success' : 'error');
    if (success) {
      setImportText('');
      setTimeout(() => setImportStatus('idle'), 3000);
    }
  };

  const handleExport = () => {
    const data = exportPreferences();
    navigator.clipboard.writeText(data);
    // Show toast notification
    console.log('Preferences copied to clipboard');
  };

  if (!isOpen) return null;

  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: '🎨' },
    { id: 'editor', label: 'Code Editor', icon: '💻' },
    { id: 'behavior', label: 'Behavior', icon: '⚙️' },
    { id: 'accessibility', label: 'Accessibility', icon: '♿' },
    { id: 'data', label: 'Data & Privacy', icon: '🔒' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
            <p className="text-sm text-gray-600 mt-1">Customize your documentation experience</p>
          </div>
          <Button variant="outline-default" size="sm" onClick={onClose}>
            ✕
          </Button>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200 p-4">
            <nav className="space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-3",
                    activeTab === tab.id
                      ? "bg-primary-50 text-primary-main border border-primary-200"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Appearance</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['light', 'dark', 'auto'] as const).map(theme => (
                          <button
                            key={theme}
                            onClick={() => updatePreference('theme', theme)}
                            className={clsx(
                              "p-3 rounded-lg border text-sm font-medium capitalize transition-colors",
                              preferences.theme === theme
                                ? "border-primary-main bg-primary-50 text-primary-main"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            {theme}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['small', 'medium', 'large'] as const).map(size => (
                          <button
                            key={size}
                            onClick={() => updatePreference('fontSize', size)}
                            className={clsx(
                              "p-3 rounded-lg border text-sm font-medium capitalize transition-colors",
                              preferences.fontSize === size
                                ? "border-primary-main bg-primary-50 text-primary-main"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'editor' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Code Editor</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Code Theme</label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['github', 'dracula', 'monokai'] as const).map(theme => (
                          <button
                            key={theme}
                            onClick={() => updatePreference('codeTheme', theme)}
                            className={clsx(
                              "p-3 rounded-lg border text-sm font-medium capitalize transition-colors",
                              preferences.codeTheme === theme
                                ? "border-primary-main bg-primary-50 text-primary-main"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            {theme}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Show Line Numbers</label>
                        <p className="text-xs text-gray-500">Display line numbers in code blocks</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.showLineNumbers}
                          onChange={(e) => updatePreference('showLineNumbers', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Auto Complete</label>
                        <p className="text-xs text-gray-500">Enable auto-completion in code editor</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.autoComplete}
                          onChange={(e) => updatePreference('autoComplete', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'behavior' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Behavior</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Search History</label>
                        <p className="text-xs text-gray-500">Remember your search queries</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.searchHistory}
                          onChange={(e) => updatePreference('searchHistory', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Keyboard Shortcuts</label>
                        <p className="text-xs text-gray-500">Enable keyboard navigation shortcuts</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.keyboardShortcuts}
                          onChange={(e) => updatePreference('keyboardShortcuts', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Sound Effects</label>
                        <p className="text-xs text-gray-500">Play sounds for interactions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.soundEffects}
                          onChange={(e) => updatePreference('soundEffects', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'accessibility' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Accessibility</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Reduced Motion</label>
                        <p className="text-xs text-gray-500">Minimize animations and transitions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.reducedMotion}
                          onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Data & Privacy</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Analytics Opt-out</label>
                        <p className="text-xs text-gray-500">Disable usage analytics collection</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analyticsOptOut}
                          onChange={(e) => updatePreference('analyticsOptOut', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"></div>
                      </label>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Import/Export Preferences</h4>
                      
                      <div className="space-y-3">
                        <div>
                          <Button 
                            variant="outline-default" 
                            size="sm" 
                            onClick={handleExport}
                            className="w-full"
                          >
                            Export Preferences
                          </Button>
                        </div>
                        
                        <div>
                          <textarea
                            value={importText}
                            onChange={(e) => setImportText(e.target.value)}
                            placeholder="Paste exported preferences here..."
                            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md text-sm resize-none"
                          />
                          <div className="flex items-center gap-2 mt-2">
                            <Button 
                              variant="primary" 
                              size="sm" 
                              onClick={handleImport}
                              disabled={!importText.trim()}
                            >
                              Import
                            </Button>
                            {importStatus === 'success' && (
                              <span className="text-xs text-green-600">✓ Imported successfully</span>
                            )}
                            {importStatus === 'error' && (
                              <span className="text-xs text-red-600">✗ Import failed</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <Button 
                        variant="outline-default" 
                        size="sm" 
                        onClick={resetPreferences}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        Reset All Preferences
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Quick preferences toggle component
export function PreferencesToggle() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button
        variant="outline-default"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="text-gray-600 hover:text-gray-900"
        aria-label="Open preferences"
      >
        ⚙️
      </Button>
      
      <PreferencesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
} 