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
        // console.log("hashCode: " + hashCode);
        // console.log("hash code: " + hashCode);
        let node = this.h_map[hashCode];
        // console.log(node.nextNode);
        // console.log("node.nextNode is null: " + `${node.nextNode == null}`);
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
                this.expand_map_array();
            } 

            
        }
        
    }

    get(key) {
        let hashCode = this.hash(key);
        let node = this.h_map[hashCode];
        
        while (node.nextNode != null) {
            node = node.nextNode;
            if (node.value.key === key) {
                return node.value.value;
            }
        }
        return null;
    }

    has(key) {
        let hashCode = this.hash(key);
        let node = this.h_map[hashCode];
        
        while (node.nextNode != null) {
            node = node.nextNode;
            if (node.value.key === key) {
                return true;
            }
        }
        return false;        
    }

    remove(key) {
        let hashCode = this.hash(key);
        let node = this.h_map[hashCode];
        
        while (node.nextNode != null) {
            if (node.nextNode.value.key === key) {
                node.nextNode = node.nextNode.nextNode;
                this.size--;
                return true;
            }
            else {
                node = node.nextNode;
            }
        }
        return false;  
    }

    length() {
        return this.size;
    }
    
    clear() {
        for (let i = 0; i < this.h_map.length; i++) {
            this.h_map[i] = new Node();
        }
        this.size = 0;
    }

    keys() {
        let key_array = [];
        for (let i = 0; i < this.h_map.length; i++) {
            let node = this.h_map[i];
            while (node.nextNode != null) {
                node = node.nextNode;
                key_array.push(node.value.key);
            }
        }    
        return key_array;
    }

    values() {
        let value_array = [];
        for (let i = 0; i < this.h_map.length; i++) {
            let node = this.h_map[i];
            while (node.nextNode != null) {
                node = node.nextNode;
                value_array.push(node.value.value);
            }
        }    

        return value_array;
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
        this.capacity = this.capacity * 2;
        let new_h_map = new Array(this.capacity);
        for (let i = 0; i < new_h_map.length; i++) {
            new_h_map[i] = new Node();
        }

        let keys_values = this.entries();
        // return_array.push([node.value.key, node.value.value]);
        keys_values.forEach((pair) => {
            let key = pair[0];
            let value = pair[1]
            let hashCode = this.hash(key);
            let node = new_h_map[hashCode];

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

                let new_node = new Node();
                let new_entry = {"key": key, "value": value};
                new_node.value = new_entry;
                node.nextNode = new_node;
                
            }
        });
        
        this.h_map = new_h_map;
    }

}

class Node {
    value = null;
    nextNode = null;
}

export{HashMap};