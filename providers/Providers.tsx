'use client';

// react
import { PropsWithChildren } from 'react';

// redux-toolkit
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@/lib/redux';

// nmext-themes
import { ThemeProvider } from 'next-themes';

// framer-motion
import { LazyMotion, domAnimation } from 'framer-motion';

// react-scroll-parallax
import { ParallaxProvider } from 'react-scroll-parallax';

// Monkey patch ParallaxProvider to prevent unmount crash on client
if (typeof window !== 'undefined' && ParallaxProvider.prototype) {
  const originalUnmount = ParallaxProvider.prototype.componentWillUnmount;
  ParallaxProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.controller && typeof this.controller.destroy === 'function') {
      try {
        this.controller.destroy();
      } catch (e) {
        console.warn('Error during ParallaxProvider unmount:', e);
      }
    }
  };
}

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <LazyMotion features={domAnimation}>
      <ReduxProvider store={reduxStore}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </ReduxProvider>
    </LazyMotion>
  );
};

export default Providers;
