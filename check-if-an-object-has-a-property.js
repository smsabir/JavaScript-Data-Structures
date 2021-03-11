let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  const res = ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    obj.hasOwnProperty(name));

    return res;
  // Only change code above this line
}

console.log(isEveryoneHere(users));