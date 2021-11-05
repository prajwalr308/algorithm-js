var mergeTwoLists = function(l1, l2) {
    let tempNode = new ListNode(0);
    let currNode = tempNode;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            currNode.next = l1;
            l1 = l1.next;
        } else {
            currNode.next = l2;
            l2 = l2.next;
        }
        currNode = currNode.next;
    }

    if (l1) {
        currNode.next = l1;
        l1 = l1.next;
    } else {
        currNode.next = l2;
        l2 = l2.next;
    }
    return tempNode.next;
};