import isObject from "./isObject";
import isArray from "./isArray";

const isEmpty = (value: any): boolean => {
    if (isObject(value)) {
        return !Object.keys(value).length;
    }

    if (isArray(value)) {
        return !value.length;
    }

    return !value;
};

export default isEmpty;