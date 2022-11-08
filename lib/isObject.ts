import getObjectClass from "./getObjectClass";

const isObject = (arg: any): boolean => getObjectClass(arg) === "[object Object]";

export default isObject;