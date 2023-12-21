import React from 'react';

export type StackType = {
  children: React.ReactNode,
  orientation: 'vertical' | 'horizontal',
  gap: number,
}

export const Stack: React.FC<StackType> = ({ children, orientation = 'vertical', gap = 0 }) => {
  const styles = {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    gap: `${gap}px`,
  } as const;

  return <div style={styles}>{children}</div>;
};
