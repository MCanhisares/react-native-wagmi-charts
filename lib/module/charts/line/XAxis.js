function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useMemo } from 'react';
import { Text } from 'react-native';
import { formatDatetime } from '../../utils/formatDatetime';
import { LineChartDimensionsContext } from './Chart';
import { useLineChart } from './useLineChart';
LineChartXAxis.displayName = 'XAxis';
export function LineChartXAxis({
  children,
  ticks = 5,
  textProps,
  textStyle,
  dateFormat,
  ...props
}) {
  const {
    height
  } = React.useContext(LineChartDimensionsContext);
  const {
    xLength,
    data
  } = useLineChart();
  const tickLabelCount = useMemo(() => xLength < ticks ? xLength : ticks, []);
  const texts = Array.from(Array(tickLabelCount).keys()).map(tick => {
    const index = Math.floor(tick / tickLabelCount * xLength);
    const formattedTime = formatDatetime({
      value: data[index].timestamp,
      ...dateFormat
    });
    return formattedTime;
  });
  const animatedCursorStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: 0
      }, {
        translateY: height - 15
      }]
    };
  }, [height]);
  return /*#__PURE__*/React.createElement(Animated.View, _extends({}, props, {
    style: [{
      position: 'absolute',
      flexDirection: 'row',
      padding: 4,
      alignSelf: 'flex-start',
      justifyContent: 'space-between',
      height: 30,
      width: '100%'
    }, animatedCursorStyle, props.style]
  }), texts.map(text => /*#__PURE__*/React.createElement(Text, _extends({
    style: [textStyle]
  }, textProps), text)));
}
//# sourceMappingURL=XAxis.js.map