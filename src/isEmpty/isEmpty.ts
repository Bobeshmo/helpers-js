const isEmpty = (value: any): boolean => {
    if (Array.isArray(value)) {
        return !value.length
    }

    if (typeof value === "object") {
        return !Object.keys(value).length;
    }

    return !value
};

export default isEmpty