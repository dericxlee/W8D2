Array.prototype.bubbleSort = function() {
    let sorted = false
    // console.log(sorted, "first")
    while(sorted === false){
       console.log(sorted, 'second')
        for(let i = 0; i < this.length-1; i++){
            el = this[i];
            secEl = this[i+1];
            if (el > secEl){
                this[i] = secEl;
                this[i+1] = el;
                sorted = false;
            } else {
                sorted = true;
            }
        }
    }
   console.log(sorted, 'third')
    return this;
}

arr = [5, 7, 3, 1, 6]
console.log(arr.bubbleSort())