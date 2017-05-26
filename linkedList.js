/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;

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
    }else{
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  };

  function remove(number) {





  };

  function get(number) {
    var count = 0;
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

  };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  };
}

var myll = linkedListGenerator();
myll.add("seolhee");

console.log(myll.getHead());