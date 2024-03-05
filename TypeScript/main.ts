let message:string="hello world"
console.log(message);

function add(n1:number,n2?:number)
{   
    if (n2) {
        return n1+n2
    }
    else {
        return n1
    }
}

console.log(add(10,20));
