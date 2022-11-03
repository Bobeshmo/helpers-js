# JavaScript utility library

> Only the most necessary and nothing superfluous.

## Installation

Using npm:
```shell
$ npm i utilities-lib
```

## Usage

Below are examples of using the library

### isEmpty

Checks if value is an empty object, array, or string.
```js
isEmpty(""); // true
isEmpty({}); // true
isEmpty([]); // true
isEmpty([1, 2]); // false
```

### deepClone

Creates a shallow clone of value.
```js
const arr = [1, 2, 3];
const cloned = arr;
const deepCloned = deepClone(arr);

arr === cloned; // true
arr === deepCloned; // false
```