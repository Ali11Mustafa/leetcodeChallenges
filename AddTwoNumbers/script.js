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
 var addTwoNumbers = function(l1, l2) {
    let carry=0;
    let head=new ListNode(0);
    let node=head;
    //this is how you return it.
   
    while(l1||l2){
    let val1=l1?l1.val:0;
    let val2=l2?l2.val:0;
        
        let sum=val1+val2+carry;
        carry=0
        let newValue=sum;
        if(sum>9){
           
            newValue=sum%10;
            // lerada dw zhmaray naw arrayaka ko dakatawa
            // 5+6=10
            // 9 mod 10 =9 yani har dakyatawa ba 9 +carray daka
            carry=1;
            
            
        }
         node.next=new ListNode(newValue);
        node=node.next;
        if(l1){
            l1=l1.next;
        }
        if(l2){
            l2=l2.next
        }
       
       
        
        
    }
    if(carry){
        node.next=new ListNode(carry);
        
    }
    return head.next
     

    
};