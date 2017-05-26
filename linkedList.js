/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var count = 0;

  function getHead() {
    return head;
  };

  function getTail() {
    return tail;
  };

  function add(value) {
    var newNode = {
      value: value,
      next: null
    }

    if(head === null){
      head = newNode;
      tail = newNode;
    }else if(head.next === null){
      tail = newNode;
      head.next = tail;
      count++
    }else{
      tail.next = newNode;
      tail = newNode;
      count++;
    }
    return newNode;
  };

  function remove(number) {
    var currentNode = get(number);
    var previousNode = get(number - 1);

    if(currentNode === false){
      return false;
    //remove the head
    }else if(number === 0){
    //assign the head to old head
      head = currentNode.next;
      count--;
    }if(currentNode.next === null){
      tail = previousNode;
      count--;
    }
    previousNode.next = currentNode.next
  };

  function get(number) {
    var nowNode = head;

    if(nowNode === null){
      return false;
    }

    for(var i = 0; i < number; i++){
      if(nowNode.next !== null){
        nowNode = nowNode.next;
        count++;
      }else{
        return false;
      }
    }
    return nowNode;
  };

  function insert(value, number) {
    var parentNode = get(number - 1)
    var newNode = {
      value: value,
      next: parentNode.next
    }

    if(number === 0){
      newNode.next = parentNode;
      head = newNode;
      count++;
    } else if (number > getLength() || number < 0){
      return false;
    } else {
      parentNode.next = newNode;
      count++;
    }
  };

  function getLength(){
    return count;
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
    getLength: getLength
  };
}


var myll = linkedListGenerator();
myll.add("seolhee");
console.log(myll.getLength());
myll.add("jeff");
console.log(myll.getLength());
myll.add("josh");
console.log(myll.getLength());
console.log(myll.getHead());
