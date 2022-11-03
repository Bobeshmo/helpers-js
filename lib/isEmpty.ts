import getObjectClass from "./getObjectClass";

const isEmpty = (value: any): boolean => {
    if (getObjectClass(value) === "[object Object]") {
        return !Object.keys(value).length;
    }

    if (getObjectClass(value) === "[object Array]") {
        return !value.length;
    }

    return !value;
};

export default isEmpty;