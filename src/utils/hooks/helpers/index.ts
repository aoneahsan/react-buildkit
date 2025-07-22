import { useMediaQuery } from 'react-responsive';
import { useZMediaQueryScaleReturnInterface } from '@src/types/hooks';
import { mediaScales as defaultMediaScales } from '@utils/constants/hooks';

/**
 * Custom breakpoint options for media queries
 */
export interface MediaQueryScaleOptions {
  /** Custom breakpoints to override defaults */
  breakpoints?: {
    brackpoint_2xl?: string;
    brackpoint_xl?: string;
    brackpoint_lg?: string;
    brackpoint_md?: string;
    brackpoint_sm?: string;
    brackpoint_xs?: string;
  };
  /** Additional custom breakpoints */
  customBreakpoints?: Record<string, string>;
  /** Additional media query options for react-responsive */
  queryOptions?: {
    orientation?: 'portrait' | 'landscape';
    scan?: 'progressive' | 'interlace';
    aspectRatio?: string;
    deviceAspectRatio?: string;
    [key: string]: any;
  };
}

/**
 * A custom hook to determine the media query scale of the screen.
 * @param options - Optional configuration for custom breakpoints
 * @returns an object with boolean values for each defined media scale.
 */
export const useZMediaQueryScale = (
  options?: MediaQueryScaleOptions
): useZMediaQueryScaleReturnInterface & Record<string, boolean> => {
    const mediaScales = {
        ...defaultMediaScales,
        ...options?.breakpoints
    };
    const is2XlScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_2xl})`,
        ...options?.queryOptions
    });

    const isBelow2XlScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_2xl})`,
        ...options?.queryOptions
    });

    const isXlScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_xl})`,
        ...options?.queryOptions
    });

    const isBelowXlScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_xl})`,
        ...options?.queryOptions
    });

    const is1300pxScale = useMediaQuery({
        query: '(min-width: 1300px)',
        ...options?.queryOptions
    });

    const is1250pxScale = useMediaQuery({
        query: '(min-width: 1250px)',
        ...options?.queryOptions
    });

    const is1200pxScale = useMediaQuery({
        query: '(min-width: 1200px)',
        ...options?.queryOptions
    });

    const is1150pxScale = useMediaQuery({
        query: '(min-width: 1150px)',
        ...options?.queryOptions
    });

    const is1100pxScale = useMediaQuery({
        query: '(min-width: 1100px)',
        ...options?.queryOptions
    });

    const is900pxScale = useMediaQuery({
        query: '(min-width: 900px)',
        ...options?.queryOptions
    });

    const isBelow900pxScale = useMediaQuery({
        query: '(max-width: 900px)',
        ...options?.queryOptions
    });

    const isLgScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_lg})`,
        ...options?.queryOptions
    });

    const isBelowLgScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_lg})`,
        ...options?.queryOptions
    });

    const isMdScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_md})`,
        ...options?.queryOptions
    });

    const is768Scale = useMediaQuery({
        query: '(min-width: 768px)',
        ...options?.queryOptions
    });

    const isBelow768Scale = useMediaQuery({
        query: '(max-width: 767px)',
        ...options?.queryOptions
    });

    const isBelowMdScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_md})`,
        ...options?.queryOptions
    });

    const isSmScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_sm})`,
        ...options?.queryOptions
    });

    const isBelowSmScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_sm})`,
        ...options?.queryOptions
    });

    const isXsScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_xs})`,
        ...options?.queryOptions
    });

    const isBelowXsScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_xs})`,
        ...options?.queryOptions
    });

    // Handle custom breakpoints
    const customBreakpointResults: Record<string, boolean> = {};
    if (options?.customBreakpoints) {
        Object.entries(options.customBreakpoints).forEach(([key, value]) => {
            customBreakpointResults[`is${key}`] = useMediaQuery({
                query: `(min-width: ${value})`,
                ...options?.queryOptions
            });
            customBreakpointResults[`isBelow${key}`] = useMediaQuery({
                query: `(max-width: ${value})`,
                ...options?.queryOptions
            });
        });
    }

    return {
        is2XlScale,
        isBelow2XlScale,
        isXlScale,
        isBelowXlScale,
        isLgScale,
        isBelowLgScale,
        isMdScale,
        isBelowMdScale,
        is768Scale,
        isBelow768Scale,
        isSmScale,
        isBelowSmScale,
        isXsScale,
        isBelowXsScale,
        is1300pxScale,
        is1200pxScale,
        is1250pxScale,
        is1150pxScale,
        is1100pxScale,
        is900pxScale,
        isBelow900pxScale,
        ...customBreakpointResults
    };
};