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