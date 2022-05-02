/**
 * 在类型系统里实现通用的 Array.push
 */

type Push<T extends any[], U extends any> = [...T, U];
