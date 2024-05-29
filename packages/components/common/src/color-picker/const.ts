import type { TdColorPickerProps } from '.';

export * from '@td/common/js/color-picker/constants';

// 非透明色格式化类型
export const FORMATS: TdColorPickerProps['format'][] = ['HEX', 'RGB', 'HSL', 'HSV', 'CMYK', 'CSS'];
