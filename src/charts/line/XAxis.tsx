import * as React from 'react';

import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useMemo } from 'react';
import type { TextProps, ViewProps } from 'react-native';
import { Text } from 'react-native';
import { formatDatetime } from '../../utils/formatDatetime';
import { LineChartDimensionsContext } from './Chart';
import { useLineChart } from './useLineChart';

export type XAxisProps = Animated.AnimateProps<ViewProps> & {
  children?: React.ReactNode;
  textProps?: TextProps;
  textStyle?: TextProps['style'];
  ticks?: number;
  dateFormat?: {
    locale?: string;
    options?: Intl.DateTimeFormatOptions;
  };
};

LineChartXAxis.displayName = 'XAxis';

export function LineChartXAxis({
  children,
  ticks = 5,
  textProps,
  textStyle,
  dateFormat,
  ...props
}: XAxisProps) {
  const { height } = React.useContext(LineChartDimensionsContext);
  const { xLength, data } = useLineChart();

  const tickLabelCount = useMemo(() => (xLength < ticks ? xLength : ticks), []);

  const texts = Array.from(Array(tickLabelCount).keys()).map((tick) => {
    const index = Math.floor((tick / tickLabelCount) * xLength);

    const formattedTime = formatDatetime({
      value: data[index].timestamp,
      ...dateFormat,
    });
    return formattedTime;
  });

  const animatedCursorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: 0 },
        {
          translateY: height - 15,
        },
      ],
    };
  }, [height]);

  return (
    <Animated.View
      {...props}
      style={[
        {
          position: 'absolute',
          flexDirection: 'row',
          padding: 4,
          alignSelf: 'flex-start',
          justifyContent: 'space-between',
          height: 30,
          width: '100%',
        },
        animatedCursorStyle,
        props.style,
      ]}
    >
      {texts.map((text) => (
        <Text style={[textStyle]} {...textProps}>
          {text}
        </Text>
      ))}
    </Animated.View>
  );
}
