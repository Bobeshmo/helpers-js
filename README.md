# JavaScript utility library

> Only the most necessary and nothing superfluous

## Installation

Using npm:
```shell
$ npm i utillite
```

## Usage

```js
import utils from "utillite"
```

### isEmpty

This method returns true when the value is null
```js
utils.isEmpty(""); // true
utils.isEmpty({}); // true
utils.isEmpty([]); // true
utils.isEmpty([1, 2]); // false
```

### deepClone

This method returns the deep cloned value
```js
const arr = [1, 2, 3];
const cloned = arr;
const deepCloned = utils.deepClone(arr);

arr === cloned; // true
arr === deepCloned; // false
```

### deepEqual

This method returns a Boolean value(Returns true if the two values are equal, else false)
```js
utils.deepEqual({a: {b: "foo"}}, {a: {b: "foo"}}) // true
utils.deepEqual({a: {b: "foo"}}, {a: {b: "foo"}}) // false

utils.deepEqual([1, 2], [1, 2]) // true
utils.deepEqual([1, 2], [1, "2"]) // false
```

### uniq

Creates a duplicate-free version of an array
```js
utils.uniq([1, 2, 3, 2]) // [1, 2, 3]
utils.uniq([1, 2, 3, "2", "5", 3, 5, "2"]) // [1, 2, 3, "2", "5", 5]
```

### get

Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place
```js
const obj = {
    name: "foo",
    info: {
        address: "bar",
        age: 20
    }
}

utils.get(obj, "name") // "foo"
utils.get(obj, "info", {}) // {address: "bar", age: 20}
utils.get(obj, "info.address", {}) // "bar"

utils.get(obj, "phone") // undefined
utils.get(obj, "phone", {}) // {}
utils.get(obj, "phone", "") // ""
```