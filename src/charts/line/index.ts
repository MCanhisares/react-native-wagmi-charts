import { LineChartHoverTrap } from '../line/HoverTrap';
import { LineChart as _LineChart } from './Chart';
import { LineChartPathWrapper } from './ChartPath';
import { LineChartProvider } from './Context';
import { LineChartCursor } from './Cursor';
import { LineChartCursorCrosshair } from './CursorCrosshair';
import { LineChartCursorLine } from './CursorLine';
import { LineChartDatetimeText } from './DatetimeText';
import { LineChartDot } from './Dot';
import { LineChartGradient } from './Gradient';
import { LineChartGroup } from './Group';
import { LineChartHighlight } from './Highlight';
import { LineChartHorizontalLine } from './HorizontalLine';
import { LineChartPriceText } from './PriceText';
import { LineChartTooltip } from './Tooltip';
import { LineChartXAxis } from './XAxis';
import { useLineChartDatetime } from './useDatetime';
import { useLineChart } from './useLineChart';
import { useLineChartPrice } from './usePrice';

export * from './Chart';
export * from './ChartPath';
export * from './Context';
export * from './Cursor';
export * from './CursorCrosshair';
export * from './CursorLine';
export * from './DatetimeText';
export * from './Dot';
export * from './Gradient';
export * from './Highlight';
export * from './Path';
export * from './PriceText';
export * from './Tooltip';
export * from './types';
export * from './useDatetime';
export * from './useLineChart';
export * from './usePrice';

export const LineChart = Object.assign(_LineChart, {
  Chart: _LineChart,
  Dot: LineChartDot,
  Path: LineChartPathWrapper,
  Cursor: LineChartCursor,
  CursorCrosshair: LineChartCursorCrosshair,
  CursorLine: LineChartCursorLine,
  Gradient: LineChartGradient,
  Group: LineChartGroup,
  Highlight: LineChartHighlight,
  HorizontalLine: LineChartHorizontalLine,
  Tooltip: LineChartTooltip,
  Provider: LineChartProvider,
  PriceText: LineChartPriceText,
  DatetimeText: LineChartDatetimeText,
  useDatetime: useLineChartDatetime,
  usePrice: useLineChartPrice,
  useChart: useLineChart,
  HoverTrap: LineChartHoverTrap,
  XAxis: LineChartXAxis,
});
