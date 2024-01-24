import * as React from 'react';
import Animated from 'react-native-reanimated';
import type { TextProps, ViewProps } from 'react-native';
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
export declare function LineChartXAxis({ children, ticks, textProps, textStyle, dateFormat, ...props }: XAxisProps): React.JSX.Element;
export declare namespace LineChartXAxis {
    var displayName: string;
}
//# sourceMappingURL=XAxis.d.ts.map