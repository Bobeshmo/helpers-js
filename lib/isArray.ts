import getObjectClass from "./getObjectClass";

const isArray = (arg: any): boolean => getObjectClass(arg) === "[object Array]";

export default isArray;