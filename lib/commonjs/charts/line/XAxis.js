"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChartXAxis = LineChartXAxis;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNative = require("react-native");
var _formatDatetime = require("../../utils/formatDatetime");
var _Chart = require("./Chart");
var _useLineChart = require("./useLineChart");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
LineChartXAxis.displayName = 'XAxis';
function LineChartXAxis({
  children,
  ticks = 5,
  textProps,
  textStyle,
  dateFormat,
  ...props
}) {
  const {
    height
  } = React.useContext(_Chart.LineChartDimensionsContext);
  const {
    xLength,
    data
  } = (0, _useLineChart.useLineChart)();
  const tickLabelCount = (0, _react.useMemo)(() => xLength < ticks ? xLength : ticks, []);
  const texts = Array.from(Array(tickLabelCount).keys()).map(tick => {
    const index = Math.floor(tick / tickLabelCount * xLength);
    const formattedTime = (0, _formatDatetime.formatDatetime)({
      value: data[index].timestamp,
      ...dateFormat
    });
    return formattedTime;
  });
  const animatedCursorStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateX: 0
      }, {
        translateY: height - 15
      }]
    };
  }, [height]);
  return /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, _extends({}, props, {
    style: [{
      position: 'absolute',
      flexDirection: 'row',
      padding: 4,
      alignSelf: 'flex-start',
      justifyContent: 'space-between',
      height: 30,
      width: '100%'
    }, animatedCursorStyle, props.style]
  }), texts.map(text => /*#__PURE__*/React.createElement(_reactNative.Text, _extends({
    style: [textStyle]
  }, textProps), text)));
}
//# sourceMappingURL=XAxis.js.map