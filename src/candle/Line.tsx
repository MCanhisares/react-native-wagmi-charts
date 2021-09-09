import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Line as SVGLine } from 'react-native-svg';

interface LineProps {
  color?: string;
  x: number;
  y: number;
}

export const Line = ({ color = 'gray', x, y }: LineProps) => {
  return (
    <Svg style={StyleSheet.absoluteFill}>
      <SVGLine
        x1={0}
        y1={0}
        x2={x}
        y2={y}
        strokeWidth={2}
        stroke={color}
        strokeDasharray="6 6"
      />
    </Svg>
  );
};