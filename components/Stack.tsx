import React from 'react';
import { Property } from "csstype";
import FlexDirection = Property.FlexDirection;

export type StackType = {
  children: React.ReactNode,
  orientation: 'vertical' | 'horizontal',
  gap: number,
}

export const Stack: React.FC<StackType> = ({ children, orientation = 'vertical', gap = 0 }) => {
  const styles = {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row' as FlexDirection,
    gap: `${gap}px`,
  };

  return <div style={styles}>{children}</div>;
};
