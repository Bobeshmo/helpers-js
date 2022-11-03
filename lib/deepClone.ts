const deepClone = (arg: Object | Array<any>) => JSON.parse(JSON.stringify(arg));

export default deepClone;