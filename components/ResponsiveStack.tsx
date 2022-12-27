import React, { useState, useEffect } from 'react';
import { Stack, StackType } from "./Stack";

export const ResponsiveStack: React.FC<ResponsiveStackType> = ({ children, gap = 0, breakpoint = 768 }) => {
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>();

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerWidth > breakpoint ? 'horizontal' : 'vertical');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Stack orientation={orientation} gap={gap}>
      {children}
    </Stack>
  );
};

export type ResponsiveStackType = Omit<StackType, 'orientation'> & {
  breakpoint?: number,
}