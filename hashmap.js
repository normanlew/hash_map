class HashMap {
    constructor() {
        this.load_factor = .75;
        this.capacity = 16;
        this.h_map = new Array(this.capacity);
        this.size = 0;
        for (let i = 0; i < this.h_map.length; i++) {
            this.h_map[i] = new Node();
        }
    }
    // load_factor = .75;
    // capacity = 16;
    // // size = 0;
    // h_map = new Array(this.capacity).fill(new Node());

    

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        
        return hashCode;
    } 

    set(key, value) {
        let hashCode = this.hash(key);
        console.log("hashCode: " + hashCode);
        // console.log("hash code: " + hashCode);
        let node = this.h_map[hashCode];
        console.log(node.nextNode);
        console.log("node.nextNode is null: " + `${node.nextNode == null}`);
        // console.log(node.nextNode);
        let key_exists = false;

        while (node.nextNode != null) {
            node = node.nextNode;
            if (node.value.key === key) {
                key_exists = true;
                node.value.value = value;
                break;
            }
        }

        if (!key_exists) {
            // console.log("state of array: " + this.entries());
            let new_node = new Node();
            let new_entry = {"key": key, "value": value};
            new_node.value = new_entry;
            node.nextNode = new_node;
            this.size++;

            if (this.size > (this.load_factor * this.capacity)) {
                expand_map_array();
            }
        }
        
    }
// takes two arguments: the first is a key, and the second is a value that is assigned 
// to this key. If a key already exists, then the old value is overwritten, and we 
// can say that we update the key’s value (e.g. Carlos is our key but it is called 
//     twice: once with value I am the old value., and once with value I am the new value.. 
//     Following this logic, Carlos should contain only the latter value).

// Recall that collisions occur when TWO DIFFERENT keys generate the same hash code 
// and get assigned to the same bucket. (e.g. Rama and Sita are both hashed to 3, 
//     so 3 becomes a location for Rama AND Sita. However, we know that this is
//  not an update because the keys are different). Review the dealing with collisions 
//  section of the previous lesson to find a way to handle our collisions.

// Remember to grow your buckets to double their capacity when your hash map reaches 
// the load factor. The methods mentioned later in this assignment can help you 
// handle the growth logic, so you may want to implement this feature near the end. 
// However, we mention this with set() because it’s important to grow buckets exactly 
// as they are being expanded.


// takes one argument as a key and returns the value 
// that is assigned to this key. If a key is not found, return null.
    get(key) {
        let hashCode = this.hash(key);
        let node = this.h_map[hashCode];
        
        while (node.nextNode != null) {
            node = node.nextNode;
            if (node.key === key) {
                return node.value;
            }
        }
        return null;
    }

    entries() {
        let return_array = [];
        for (let i = 0; i < this.h_map.length; i++) {
            let node = this.h_map[i];
            while (node.nextNode != null) {
                node = node.nextNode;
                // console.log("pushing: " + node.value);
                return_array.push([node.value.key, node.value.value]);
            }
        }
        return return_array;
    }

    expand_map_array() {

    }

}

class Node {
    value = null;
    nextNode = null;
}

export{HashMap};