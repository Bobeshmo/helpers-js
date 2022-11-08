import getObjectClass from "./getObjectClass";
import isObject from "./isObject";

const isEmpty = (value: any): boolean => {
    if (isObject(value)) {
        return !Object.keys(value).length;
    }

    if (getObjectClass(value) === "[object Array]") {
        return !value.length;
    }

    return !value;
};

export default isEmpty;