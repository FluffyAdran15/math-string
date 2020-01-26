//global var 
var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");


//function for largest number
function largeNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var large = first;
     
    // finding the largest number
    if(first === large){
        output.innerHTML =  first +   " number is the largest number";
    }
    if( large < second){
        large = second;
        output.innerHTML = second  + " number is the largest number"
    } if( large < third){
        large = third;
        output.innerHTML = third  + " number is the largest number";
    } if(large < fourth){
        large = fourth;
        output.innerHTML = fourth + "number is the largest number";
    } if(large < fifth){
        large = fifth;
        output.innerHTML = fifth + " number is the largest number";
    } if( large < sixth){
        large = sixth;
        output.innerHTML =   sixth + " number is the largest number";
    } 
    return large;
}

//smallest number function
function smallNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var smallest = first;
     
    //finding the smallest number
    if(first === smallest){
        output.innerHTML =    first +   " number is the smallest number";
    }
    if( smallest > second){
        smallest = second;
        output.innerHTML = second + " number is the smallest number"
    } if( smallest > third){
        smallest = third;
        output.innerHTML = third + " number is the smallest number";
    } if(smallest > fourth){
        smallest = fourth;
        output.innerHTML =   fourth + " number is the smallest number";
    } if(smallest > fifth){
        smallest = fifth;
        output.innerHTML =   fifth + " number is the smallest number";
    } if( smallest > sixth){
        smallest = sixth;
        output.innerHTML =   sixth +  "number is the smallest number";
    } 
    return smallest;
}

//function the mean
function mean(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    //adding the numbers together and dividing by six
    var mean  = (first + second + third +  fourth + fifth + sixth) / 6 ;
    output.innerHTML = mean   +  " is the mean";
 
 
}

//function for finding range
function rang(){
    //solving the range
    var rang = largeNum() - smallNum();
    output.innerHTML = rang + " is the range";
}
//making a function that puts numbers in order
function order(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    
    var a1 = 0;
    var a2 = 0;
    var a3 = 0; 
    var a4 = 0;
    var a5 = 0 ;
    var a6 = 0; 

    //finding the min and and removing from the order
    a1 = Math.min(first,second,third,fourth,fifth,sixth);

    if(a1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a1 = fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a1 === fifth){
        fifth = sixth;
    }

    a2 = Math.min(first,second,third,fourth,fifth);

    if(a2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === fifth){
        fifth = sixth;
    }

    a3 = Math.min(first,second,third,fourth);

    if(a3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === fifth){
        fifth = sixth;
    }

    a4 = Math.min(first,second,third);

    if(a4 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === fifth){
        fifth = sixth;
    }

    a5 = Math.min(first,second);

    if(a5 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a5 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a5 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a5 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a5 === fifth){
        fifth = sixth;
    }


    a6 = Math.min(first);

    if(a6 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a6 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a6 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a6 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a6 = fifth){
        fifth === sixth;
    }
    //telling how to put it in 
    output.innerHTML = a1 + "," + a2 + "," + a3 + "," + a4 + "," + a5 + "," + a6;
    
}

//finding the middle number and median
function mid(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);



    var a1 = 0;
    var a2 = 0;
    var a3 = 0; 
    var a4 = 0;
   
//puting numbers in order but only using 4 variables
    a1 = Math.min(first,second,third,fourth,fifth,sixth);

    if(a1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a1 = fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a1 === fifth){
        fifth = sixth;
    }

    a2 = Math.min(first,second,third,fourth,fifth);

    if(a2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a2 === fifth){
        fifth = sixth;
    }

    a3 = Math.min(first,second,third,fourth);

    if(a3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a3 === fifth){
        fifth = sixth;
    }

    a4 = Math.min(first,second,third);

    if(a4 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(a4 === fifth){
        fifth = sixth;
    }

    //writing the output of the answer
    output.innerHTML = a3 + " and " + a4 + " are the middle numbers. " + (a3 + a4) / 2 + " is the median";

}


//making a function to find any duplicates
function dup(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var b1 = 1;
    var b2 = 1;
    var b3 = 1; 
    var b4 = 1;
    var b5 = 1;
    var b6 = 1;


    //storing number 
    if(first === second){
        b1 ++;
    }if(first === third){
        b1 ++;
    }if(first === fourth){
        b1 ++;
    }if(first === fifth){
        b1 ++;
    }if(first === sixth){
        b1 ++;
    }if(second === third){
        b2 ++;
    }if(second === fourth){
        b2 ++;
    }if(second === fifth){
        b2 ++;
    }if(second === sixth){
        b2 ++;
    }if(third === fourth){
        b3 ++;
    }if(third === fifth){
        b3 ++;
    }if(third === sixth){
        b3 ++;
    }if(fourth === fifth){
        b4 ++;
    }if(fourth === sixth){
        b4 ++;
    }if(fifth = sixth){
        b5 ++;
    }

    if(b1 === 1 && b2 === 1 && b3 === 1 && b4 === 1 && b5 === 1 && b6 === 1){
        output.innerHTML += "there is no duplicates"
    }
    if(b1 !== 1){
        output.innerHTML += " " + first + " is a duplicate and it appears " + b1 + " times. ";
    }
    if(b2 !== 1 && second !== first){
        output.innerHTML += " " + second + " is a duplicate and it appears " + b2 + " times. ";
    }
    if(b3 !== 1 && third !== second && third !== first){
        output.innerHTML += " " + third + " is a duplicate and it appears " + b3 + " times. ";
    }
    if(b4 !== 1 && fourth !== third && fourth !== second && fourth !== first){
        output.innerHTML += " " + fourth + " is a duplicate and it appears " + b4 + " times. ";
    }
    if(b5 !== 1 && fifth !== fourth && fifth !== third && fifth !== second && fifth !== first){
        output.innerHTML += " " + fifth + " is a duplicate and it appears " + b5 + " times. ";
    }
    if(b6 !== 1 && sixth !== fifth && sixth !== fourth && sixth !== third && sixth !== second && sixth !== first){
        output.innerHTML += " " + sixth + " is a duplicate and it appears " + b6 + " times. ";
    }

}


//finding the number that repeats the most
function mode(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
     
    var b1 = 1;
    var b2 = 1;
    var b3 = 1; 
    var b4 = 1;
    var b5 = 1;
    var b6 = 1;

    if(first === second){
        b1 ++;
    }if(first === third){
        b1 ++;
    }if(first === fourth){
        b1 ++;
    }if(first === fifth){
        b1 ++;
    }if(first === sixth){
        b1 ++;
    }if(second === third){
        b2 ++;
    }if(second === fourth){
        b2 ++;
    }if(second === fifth){
        b2 ++;
    }if(second === sixth){
        b2 ++;
    }if(third === fourth){
        b3 ++;
    }if(third === fifth){
        b3 ++;
    }if(third === sixth){
        b3 ++;
    }if(fourth === fifth){
        b4 ++;
    }if(fourth === sixth){
        b4 ++;
    }if(fifth = sixth){
        b5 ++;
    }

    var max = Math.max(b1, b2, b3, b4, b5, b6)

    if(b1 === 1 && b2 === 1 && b3 === 1 && b4 === 1 && b5 === 1 && b6 === 1){
        output.innerHTML += "there is no mode"
    }
    if(max === b1){
        output.innerHTML += " " + first + " is the mode and it appears " + b1 + " times. ";
    }
    else if(max === b2){
        output.innerHTML += " " + second + " is the mode and it appears " + b2 + " times. ";
    }
    else if(max === b3){
        output.innerHTML += " " + third + " is the mode and it appears " + b3 + " times. ";
    }
    else if(max === b4){
        output.innerHTML += " " + fourth + " is the mode and it appears " + b4 + " times. ";
    }
    else if(max === b5){
        output.innerHTML += " " + fifth + " is the mode and it appears " + b5 + " times. ";
    }else if(max === b6){
        output.innerHTML += " " + fifth + " is the mode and it appears " + b6 + " times. ";
    }

    

}


//unique function
function uni(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    
    output.innerHTML = "";
    if(first !== second && first !== third && first !== fourth && first !== fifth && first !== sixth){
        output.innerHTML += " " + first; 
    }
    if (second !== first && second !== third && second !== fourth && second !== fifth && second !== sixth){
        output.innerHTML += " " + second; 
    }
    if (third !== first && third !== second && third !== fourth && third !== fifth && third !== sixth){
        output.innerHTML += " " + third; 
    }
    if (fourth !== first && fourth !== second && fourth !== third && fourth !== fifth && fourth !== sixth){
        output.innerHTML += " " + fourth; 
    }
    if(fifth !== first && fifth !== second && fifth !== third && fifth !== fourth && fifth !== sixth){
        output.innerHTML += " " + fifth; 
    }
    if (sixth !== first && sixth !== second && sixth !== third && sixth !== fourth && sixth !== fifth){
        output.innerHTML += " " + sixth; 
    }
    if (output.innerHTML === "") {
        output.innerHTML = "There are no unique numbers";
    }  
}


