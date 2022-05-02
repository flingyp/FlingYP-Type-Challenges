/**
 * 实现类型版本的 Array.unshift
 */

type Unshift<T extends any[], U extends any> = [U, ...T];
