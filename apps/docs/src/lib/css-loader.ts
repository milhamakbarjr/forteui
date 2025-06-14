/**
 * CSS Loader utility for ensuring ForteUI styles are available in production
 * This helps with monorepo CSS loading issues in production environments
 */

export function injectForteUIStyles(): void {
  if (typeof window === 'undefined') return; // Server-side render check
  
  // Check if styles are already loaded
  const existingStyle = document.querySelector('[data-forteui-styles]');
  if (existingStyle) return;
  
  // Check if CSS variables are loaded by testing for a known variable
  const testElement = document.createElement('div');
  testElement.style.color = 'var(--color-primary-main)';
  document.body.appendChild(testElement);
  
  const computedColor = window.getComputedStyle(testElement).color;
  document.body.removeChild(testElement);
  
  // If CSS variable is not resolved (fallback to transparent or initial), inject styles
  if (computedColor === 'var(--color-primary-main)' || computedColor === '' || computedColor === 'rgba(0, 0, 0, 0)') {
    console.warn('ForteUI CSS variables not found, injecting fallback styles...');
    
    const style = document.createElement('style');
    style.setAttribute('data-forteui-styles', 'true');
    style.textContent = `
      :root {
        --color-base-white: #ffffff;
        --color-base-black: #0B0C0E;
        --color-base-transparent: transparent;
        --color-primary-8: rgba(6, 144, 244, 0.08);
        --color-primary-12: rgba(6, 144, 244, 0.12);
        --color-primary-16: rgba(6, 144, 244, 0.16);
        --color-primary-20: rgba(6, 144, 244, 0.20);
        --color-primary-24: rgba(6, 144, 244, 0.24);
        --color-primary-32: rgba(6, 144, 244, 0.32);
        --color-primary-40: rgba(6, 144, 244, 0.40);
        --color-primary-48: rgba(6, 144, 244, 0.48);
        --color-primary-lighter: #D2F5FE;
        --color-primary-light: #6BCEFA;
        --color-primary-main: #0690F4;
        --color-primary-dark: #0253B1;
        --color-primary-darker: #012C7A;
        --color-secondary-8: rgba(145, 56, 255, 0.08);
        --color-secondary-12: rgba(145, 56, 255, 0.12);
        --color-secondary-16: rgba(145, 56, 255, 0.16);
        --color-secondary-20: rgba(145, 56, 255, 0.20);
        --color-secondary-24: rgba(145, 56, 255, 0.24);
        --color-secondary-32: rgba(145, 56, 255, 0.32);
        --color-secondary-40: rgba(145, 56, 255, 0.40);
        --color-secondary-48: rgba(145, 56, 255, 0.48);
        --color-secondary-lighter: #F1DBFF;
        --color-secondary-light: #C98AFF;
        --color-secondary-main: #9138FF;
        --color-secondary-dark: #5319BE;
        --color-secondary-darker: #290981;
        --color-info-8: rgba(0, 190, 224, 0.08);
        --color-info-12: rgba(0, 190, 224, 0.12);
        --color-info-16: rgba(0, 190, 224, 0.16);
        --color-info-20: rgba(0, 190, 224, 0.20);
        --color-info-24: rgba(0, 190, 224, 0.24);
        --color-info-32: rgba(0, 190, 224, 0.32);
        --color-info-40: rgba(0, 190, 224, 0.40);
        --color-info-48: rgba(0, 190, 224, 0.48);
        --color-info-lighter: #CEFDF6;
        --color-info-light: #66F4F4;
        --color-info-main: #00BEE0;
        --color-info-dark: #0071A3;
        --color-info-darker: #00396B;
        --color-success-8: rgba(34, 185, 84, 0.08);
        --color-success-12: rgba(34, 185, 84, 0.12);
        --color-success-16: rgba(34, 185, 84, 0.16);
        --color-success-20: rgba(34, 185, 84, 0.20);
        --color-success-24: rgba(34, 185, 84, 0.24);
        --color-success-32: rgba(34, 185, 84, 0.32);
        --color-success-40: rgba(34, 185, 84, 0.40);
        --color-success-48: rgba(34, 185, 84, 0.48);
        --color-success-lighter: #D8FAE8;
        --color-success-light: #80E4A4;
        --color-success-main: #22B954;
        --color-success-dark: #0F7030;
        --color-success-darker: #06361A;
        --color-warning-8: rgba(255, 176, 25, 0.08);
        --color-warning-12: rgba(255, 176, 25, 0.12);
        --color-warning-16: rgba(255, 176, 25, 0.16);
        --color-warning-20: rgba(255, 176, 25, 0.20);
        --color-warning-24: rgba(255, 176, 25, 0.24);
        --color-warning-32: rgba(255, 176, 25, 0.32);
        --color-warning-40: rgba(255, 176, 25, 0.40);
        --color-warning-48: rgba(255, 176, 25, 0.48);
        --color-warning-lighter: #FFF4D6;
        --color-warning-light: #FFE299;
        --color-warning-main: #FFB019;
        --color-warning-dark: #CC6600;
        --color-warning-darker: #663300;
        --color-error-8: rgba(255, 86, 48, 0.08);
        --color-error-12: rgba(255, 86, 48, 0.12);
        --color-error-16: rgba(255, 86, 48, 0.16);
        --color-error-20: rgba(255, 86, 48, 0.20);
        --color-error-24: rgba(255, 86, 48, 0.24);
        --color-error-32: rgba(255, 86, 48, 0.32);
        --color-error-40: rgba(255, 86, 48, 0.40);
        --color-error-48: rgba(255, 86, 48, 0.48);
        --color-error-lighter: #FFEDE8;
        --color-error-light: #FFB3A0;
        --color-error-main: #FF5630;
        --color-error-dark: #DE350B;
        --color-error-darker: #BF2600;
      }
    `;
    
    document.head.appendChild(style);
  }
}

// Auto-inject styles when module is imported (for production safety)
if (typeof window !== 'undefined') {
  // Use setTimeout to ensure DOM is ready
  setTimeout(injectForteUIStyles, 0);
}
