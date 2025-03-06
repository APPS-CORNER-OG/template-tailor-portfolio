
export type AnimationVariant = 'fade' | 'slide-up' | 'slide-down' | 'scale' | 'blur';

// Animation utility to apply consistent animations throughout the app
export const applyAnimation = (
  element: HTMLElement, 
  variant: AnimationVariant = 'fade', 
  show: boolean = true, 
  duration: number = 400,
  delay: number = 0
): Promise<void> => {
  // Remove any existing animations
  element.classList.remove(
    'animate-fade-in', 'animate-fade-out',
    'animate-slide-up', 'animate-slide-down',
    'animate-scale-in', 'animate-scale-out',
    'animate-blur-in', 'animate-blur-out'
  );
  
  // Select animation based on variant and show state
  let animationClass = '';
  
  switch (variant) {
    case 'fade':
      animationClass = show ? 'animate-fade-in' : 'animate-fade-out';
      break;
    case 'slide-up':
      animationClass = show ? 'animate-slide-up' : 'animate-fade-out';
      break;
    case 'slide-down':
      animationClass = show ? 'animate-slide-down' : 'animate-fade-out';
      break;
    case 'scale':
      animationClass = show ? 'animate-scale-in' : 'animate-scale-out';
      break;
    case 'blur':
      animationClass = show ? 'animate-blur-in' : 'animate-blur-out';
      break;
    default:
      animationClass = show ? 'animate-fade-in' : 'animate-fade-out';
  }
  
  // Apply animation
  element.style.animationDuration = `${duration}ms`;
  element.style.animationDelay = `${delay}ms`;
  element.classList.add(animationClass);
  
  // Return promise that resolves when animation completes
  return new Promise((resolve) => {
    setTimeout(resolve, duration + delay);
  });
};

// Helper to stagger animations of multiple elements
export const staggerAnimations = async (
  elements: HTMLElement[],
  variant: AnimationVariant = 'fade',
  show: boolean = true,
  duration: number = 400,
  staggerDelay: number = 100
): Promise<void> => {
  const promises = elements.map((element, index) => 
    applyAnimation(element, variant, show, duration, index * staggerDelay)
  );
  
  await Promise.all(promises);
};

// Helper for scroll reveal animations
export const createScrollObserver = (
  selector: string, 
  variant: AnimationVariant = 'fade',
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -100px 0px'
): IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          applyAnimation(entry.target as HTMLElement, variant, true);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );
  
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });
  
  return observer;
};
