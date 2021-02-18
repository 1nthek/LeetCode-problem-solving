/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let beginNode = null,
    endNode = null;
  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = sum > 9 ? 1 : 0;

    if (beginNode) {
      endNode.next = new ListNode(sum % 10);
      endNode = endNode.next;
    } else {
      beginNode = new ListNode(sum % 10);
      endNode = beginNode;
    }

    l1 = l1?.next;
    l2 = l2?.next;
  }
  return beginNode;
};
