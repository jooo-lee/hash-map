# Hash Map

My implementation of the [hash map project](https://www.theodinproject.com/lessons/javascript-hashmap) from [The Odin Project](https://www.theodinproject.com/).

## Features

-   Implements each bucket as a linked list to handle collisions.
-   Stores `capacity` and `loadFactor` variables to grow bucket size when required.
-   `hash(key)` takes `key` and returns its hash code.
-   `set(key, value)` overwrites `key`'s old value if `key` already exists, otherwise it adds the `key, value` pair to the hash map.
-   `get(key)` returns the value that is assigned to `key`. If `key` is not found, it returns `null`.
-   `has(key)` returns `true` or `false` based on whether or not `key` is in the hash map.
-   `remove(key)` removes the entry with `key` and returns `true` if `key` is in the hash map, otherwise it returns `false`.
-   `length()` returns the number of stored keys in the hash map.
-   `clear()` removes all entries in the hash map.
-   `keys()` returns an array containing all the keys inside the hash map.
-   `values()` returns an array containing all the values inside the hash map.
-   `entries()` returns an array that contains each `key, value` pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`.
