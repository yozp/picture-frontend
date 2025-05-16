/**
 * 空间级别信息常量文件
 * 定义枚举信息、对应的中文映射、以及后续筛选空间级别时要用到的选项数组
 */

//空间级别枚举
export const SPACE_LEVEL_ENUM = {
  COMMON: 0,
  PROFESSIONAL: 1,
  FLAGSHIP: 2,
} as const

//空间级别中文映射
export const SPACE_LEVEL_MAP: Record<number, string> = {
  0: '普通版',
  1: '专业版',
  2: '旗舰版',
}

//空间级别选项数组
export const SPACE_LEVEL_OPTIONS = Object.keys(SPACE_LEVEL_MAP).map((key) => {
  const value = Number(key)
  return {
    label: SPACE_LEVEL_MAP[value],
    value,
  }
})
