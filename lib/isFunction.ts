import getObjectClass from "./getObjectClass";

const isFunction = (arg: any): boolean => getObjectClass(arg) === "[object Function]";

export default isFunction;