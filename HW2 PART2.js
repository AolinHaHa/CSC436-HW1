class Set {
    constructor() {
      this.set = {};
    }
    add(item) {
      if (typeof item === 'string') {
        if (!this.set[item]) {
          this.set[item] = true;
          console.log('Added \'' + item + '\' to the set.')
        } else {
          console.log('Error - item already exists in this set.')
        }
      } else {
        console.log('Error - invalid input type.');
      }
    }
    remove(item) {
      if (typeof item === 'string') {
        if (this.set[item]) {
          delete this.set[item];
          console.log('Removed \'' + item + '\' from the set.')
        } else {
          console.log('Error - item does not exist in this set.')
        }
      } else {
        console.log('Error - invalid input type.');
      }
    }
    print() {
      console.log(Object.keys(this.set));
    }

  }
