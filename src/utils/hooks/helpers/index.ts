import { useMediaQuery } from 'react-responsive';
import { useZMediaQueryScaleReturnInterface } from '@src/types/hooks';
import { mediaScales } from '@utils/constants/hooks';

/**
 * A custom hook to determine the media query scale of the screen.
 * @returns an object with boolean values for each defined media scale.
 */
export const useZMediaQueryScale = (): useZMediaQueryScaleReturnInterface => {
    const is2XlScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_2xl})`
    });

    const isBelow2XlScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_2xl})`
    });

    const isXlScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_xl})`
    });

    const isBelowXlScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_xl})`
    });

    const is1300pxScale = useMediaQuery({
        query: '(min-width: 1300px)'
    });

    const is1250pxScale = useMediaQuery({
        query: '(min-width: 1250px)'
    });

    const is1200pxScale = useMediaQuery({
        query: '(min-width: 1200px)'
    });

    const is1150pxScale = useMediaQuery({
        query: '(min-width: 1150px)'
    });

    const is1100pxScale = useMediaQuery({
        query: '(min-width: 1100px)'
    });

    const is900pxScale = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const isBelow900pxScale = useMediaQuery({
        query: '(max-width: 900px)'
    });

    const isLgScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_lg})`
    });

    const isBelowLgScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_lg})`
    });

    const isMdScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_md})`
    });

    const is768Scale = useMediaQuery({
        query: '(min-width: 768px)'
    });

    const isBelow768Scale = useMediaQuery({
        query: '(max-width: 767px)'
    });

    const isBelowMdScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_md})`
    });

    const isSmScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_sm})`
    });

    const isBelowSmScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_sm})`
    });

    const isXsScale = useMediaQuery({
        query: `(min-width: ${mediaScales.brackpoint_xs})`
    });

    const isBelowXsScale = useMediaQuery({
        query: `(max-width: ${mediaScales.brackpoint_xs})`
    });

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
        isBelow900pxScale
    };
};