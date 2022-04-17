function hash(string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  return hash % max;
}

function HashTable() {
  const storage = [];
  const storageLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    const index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    const index = hash(key, storageLimit);

    if (storage[index] === null) {
      return null;
    }

    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
          break;
        }
      }
    }
  };

  this.lookup = function (key) {
    const index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
}

const hashTable = new HashTable();

hashTable.add("dhruv", 23);
hashTable.add("dhruv", 14);
hashTable.add("john", 25);
hashTable.print();
hashTable.remove("john");
hashTable.print();
console.log(hashTable.lookup("dhruv"));
