import LinkedList from 'linked-list-jo';

class HashMap {
    constructor() {
        this.buckets = []; // Array of linked lists
        this.capacity = 16;
        this.loadFactor = this.capacity * 0.75;
    }

    // Takes a key (of type String) and produces a hash code with it
    hash(key) {
        let hashCode = 0;
        const primeNum = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNum * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    // Assigns value to a key
    set(key, value) {
        const hashCode = this.hash(key);
        if (hashCode < 0 || hashCode >= this.capacity) {
            throw new Error('Trying to access index out of bound!');
        }
        const bucket = this.buckets[hashCode];
        if (!bucket) {
            // No keys have been stored in this bucket yet
            const LL = new LinkedList();
            LL.append({ [key]: value });
            this.buckets[hashCode] = LL;
        } else {
            // Iterate over bucket and check if key exists
            let tmp = bucket.getHead();
            while (tmp) {
                if (key in tmp.value) {
                    // Key found, update its value
                    tmp.value[key] = value;
                    return;
                }
                tmp = tmp.next;
            }
            // Key not found
            bucket.append({ [key]: value });
        }
    }

    // Returns the value that is assigned to key or null if key is not found
    get(key) {
        const hashCode = this.hash(key);
        if (hashCode < 0 || hashCode >= this.capacity) {
            throw new Error('Trying to access index out of bound!');
        }
        const bucket = this.buckets[hashCode];
        if (!bucket) return null;
        let tmp = bucket.getHead();
        while (tmp) {
            if (key in tmp.value) return tmp.value[key];
            tmp = tmp.next;
        }
        return null;
    }

    // Returns true or false based on whether or not key is in the hash map
    has(key) {
        return this.get(key) !== null;
    }

    /**
     * If key is in the hash map, it should remove the entry with that key and
     * return true, otherwise it should return false
     */
    remove(key) {
        const value = this.get(key);
        if (value === null) return false;
        const hashCode = this.hash(key);
        if (hashCode < 0 || hashCode >= this.capacity) {
            throw new Error('Trying to access index out of bound!');
        }
        const bucket = this.buckets[hashCode];

        let tmp = bucket.getHead();
        let index = 0;
        while (tmp) {
            if (key in tmp.value) break;
            index++;
            tmp = tmp.next;
        }
        bucket.removeAt(index);
        return true;
    }

    // Returns the number of stored keys in the hash map
    length() {
        return this.entries().length;
    }

    // Removes all entries in the hash map
    clear() {
        this.buckets.length = 0;
    }

    // Returns an array containing all the keys inside the hash map
    keys() {
        return this.entries().map((pair) => pair[0]);
    }

    // Returns an array containing all the values inside the hash map
    values() {
        return this.entries().map((pair) => pair[1]);
    }

    /**
     * Returns an array that contains each key, value pair
     * Format is: [[firstKey, firstValue], [secondKey, secondValue]]
     */
    entries() {
        const outputArr = [];
        for (const bucket of this.buckets) {
            if (!bucket) continue;
            let tmp = bucket.getHead();
            while (tmp) {
                outputArr.push(Object.entries(tmp.value)[0]);
                tmp = tmp.next;
            }
        }
        return outputArr;
    }
}

export default HashMap;
