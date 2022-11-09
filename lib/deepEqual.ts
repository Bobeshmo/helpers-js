import isObject from "./isObject";
import isArray from "./isArray";

const isObjectOrArray = (arg: any) => isObject(arg) || isArray(arg);

function deepEqual(x: any, y: any) {
    if (x === y) return true;

    if ((isObjectOrArray(x) && x !== null) && (isObjectOrArray(y) && y !== null)) {
        if (Object.keys(x).length !== Object.keys(y).length) return false;

        for (const prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) return false;
            }
            else
                return false;
        }

        return true;
    }

    return false;
}

export default deepEqual;