Array.prototype.bubbleSort = function() {
    let sorted = false
    while(sorted === false){
        sorted = true
        for(let i = 0; i < this.length; i++){
            el = this[i];
            secEl = this[i+1];
            if (el > secEl){
                this[i] = secEl;
                this[i+1] = el;
                sorted = false;
            } 
        }
    }
    return this;
}

arr = [5, 7, 3, 1, 6]
console.log(arr.bubbleSort())

String.prototype.substrings = function(){
    let newArr = []
    for(i = 0; i < this.length-1; i += 1){
        for(j = i+1; j < this.length; j += 1){
            newArr.push(this.slice(i, j))
        }
    }
    return newArr;
}

let str = 'abcd'
console.log(str.substrings());