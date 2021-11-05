var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                
                const poppedItems= stack.pop();
                if (c !== poppedItems) {
                 
                    return false;
                }
           }
        
    }
    
    return stack.length === 0;
};
console.log(isValid("()[]{}"));