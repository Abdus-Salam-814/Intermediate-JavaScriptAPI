function add(num1=0, num2=0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}



add( );




function fullname(first, last = ''){
    const full =first + " " + last;
    return full;
}


const result = fullname("Abdus", "Salam");
console.log(result);

