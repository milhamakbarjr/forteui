'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface UserBehaviorMetrics {
  searchQueries: string[];
  pageViews: { path: string; timestamp: number; duration: number }[];
  scrollDepth: number;
  buttonClicks: { target: string; timestamp: number }[];
  componentInteractions: { component: string; action: string; timestamp: number }[];
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [userBehavior, setUserBehavior] = useState<UserBehaviorMetrics>({
    searchQueries: [],
    pageViews: [],
    scrollDepth: 0,
    buttonClicks: [],
    componentInteractions: []
  });

  useEffect(() => {
    // Measure Core Web Vitals
    const measurePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lastEntry.startTime
          }));
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
              ...prev,
              firstInputDelay: entry.processingStart - entry.startTime
            }));
          });
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        new PerformanceObserver((entryList) => {
          let clsValue = 0;
          entryList.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: clsValue
          }));
        }).observe({ entryTypes: ['layout-shift'] });
      }

      // Page Load Time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        setMetrics(prev => ({
          ...prev,
          pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
        }));
      });
    };

    // Track user behavior
    const trackBehavior = () => {
      let scrollDepth = 0;
      let pageStartTime = Date.now();

      // Scroll tracking
      const handleScroll = () => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const trackLength = docHeight - winHeight;
        const percentage = Math.floor(scrollTop / trackLength * 100);
        
        if (percentage > scrollDepth) {
          scrollDepth = percentage;
          setUserBehavior(prev => ({
            ...prev,
            scrollDepth: Math.min(percentage, 100)
          }));
        }
      };

      // Click tracking
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const tagName = target.tagName.toLowerCase();
        const className = target.className;
        const textContent = target.textContent?.slice(0, 50) || '';
        
        setUserBehavior(prev => ({
          ...prev,
          buttonClicks: [
            ...prev.buttonClicks,
            {
              target: `${tagName}${className ? '.' + className.split(' ')[0] : ''}: ${textContent}`,
              timestamp: Date.now()
            }
          ].slice(-50) // Keep last 50 clicks
        }));
      };

      // Page view tracking
      const trackPageView = () => {
        const path = window.location.pathname;
        const duration = Date.now() - pageStartTime;
        
        setUserBehavior(prev => ({
          ...prev,
          pageViews: [
            ...prev.pageViews,
            { path, timestamp: Date.now(), duration }
          ].slice(-20) // Keep last 20 page views
        }));
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('click', handleClick);
      window.addEventListener('beforeunload', trackPageView);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClick);
        window.removeEventListener('beforeunload', trackPageView);
      };
    };

    measurePerformance();
    const cleanup = trackBehavior();

    return cleanup;
  }, []);

  // Send analytics data (in production, this would go to your analytics service)
  useEffect(() => {
    const sendAnalytics = () => {
      if (process.env.NODE_ENV === 'development') {
        console.group('📊 Performance & Analytics Data');
        console.log('Performance Metrics:', metrics);
        console.log('User Behavior:', userBehavior);
        console.groupEnd();
      }
      
      // In production, send to analytics service:
      // analytics.track('page_performance', { metrics, userBehavior });
    };

    // Send data every 30 seconds
    const interval = setInterval(sendAnalytics, 30000);
    
    // Send on component unmount
    return () => {
      clearInterval(interval);
      sendAnalytics();
    };
  }, [metrics, userBehavior]);

  return null; // This is a headless component
}

interface PerformanceIndicatorProps {
  showDetails?: boolean;
}

export function PerformanceIndicator({ showDetails = false }: PerformanceIndicatorProps) {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const measureMetrics = () => {
      if ('PerformanceObserver' in window) {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lastEntry.startTime
          }));
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      }

      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        setMetrics({
          pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
        });
      });
    };

    measureMetrics();
  }, []);

  if (!isVisible) return null;

  const getPerformanceScore = () => {
    const { pageLoadTime = 0, largestContentfulPaint = 0 } = metrics;
    
    if (pageLoadTime < 1000 && largestContentfulPaint < 2500) return 'excellent';
    if (pageLoadTime < 3000 && largestContentfulPaint < 4000) return 'good';
    return 'needs-improvement';
  };

  const performanceScore = getPerformanceScore();
  const scoreColors = {
    excellent: 'bg-green-500',
    good: 'bg-yellow-500',
    'needs-improvement': 'bg-red-500'
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${scoreColors[performanceScore]}`} />
          <span className="text-sm font-medium">Performance</span>
        </div>
        
        {showDetails && (
          <div className="text-xs text-gray-600 space-y-1">
            <div>Load: {Math.round(metrics.pageLoadTime || 0)}ms</div>
            <div>LCP: {Math.round(metrics.largestContentfulPaint || 0)}ms</div>
            <div>FCP: {Math.round(metrics.firstContentfulPaint || 0)}ms</div>
          </div>
        )}
      </div>
    </div>
  );
}

// Custom hook for tracking component interactions
export function useComponentTracking(componentName: string) {
  const trackInteraction = (action: string, data?: any) => {
    // Track component interactions
    if (process.env.NODE_ENV === 'development') {
      console.log(`🎯 Component Interaction: ${componentName}.${action}`, data);
    }
    
    // In production, send to analytics service
    // analytics.track('component_interaction', {
    //   component: componentName,
    //   action,
    //   data,
    //   timestamp: Date.now()
    // });
  };

  return { trackInteraction };
}

// Hook for A/B testing
export function useABTest(testName: string, variants: string[]) {
  const [variant, setVariant] = useState<string>('');

  useEffect(() => {
    // Simple A/B test implementation
    const userId = localStorage.getItem('user-id') || 
      Math.random().toString(36).substring(2, 15);
    
    if (!localStorage.getItem('user-id')) {
      localStorage.setItem('user-id', userId);
    }

    // Hash user ID to consistently assign variant
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      const char = userId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    const variantIndex = Math.abs(hash) % variants.length;
    const selectedVariant = variants[variantIndex];
    
    setVariant(selectedVariant);

    // Track assignment
    if (process.env.NODE_ENV === 'development') {
      console.log(`🧪 A/B Test: ${testName} = ${selectedVariant}`);
    }
  }, [testName, variants]);

  return variant;
}

// Error boundary with analytics
interface ErrorInfo {
  componentStack: string;
  errorBoundary?: string;
}

export function withErrorTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  return function ErrorTrackedComponent(props: P) {
    useEffect(() => {
      const handleError = (error: ErrorEvent) => {
        // Track JavaScript errors
        if (process.env.NODE_ENV === 'development') {
          console.error(`🐛 Error in ${componentName}:`, error);
        }
        
        // In production, send to error tracking service
        // errorTracking.captureException(error, {
        //   component: componentName,
        //   props: JSON.stringify(props)
        // });
      };

      window.addEventListener('error', handleError);
      return () => window.removeEventListener('error', handleError);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
} 