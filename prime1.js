const vnu=require('readline-sync');
let i,a=vnu.questionInt("Enetr any number to check number prime or not : ");
let counter=0;
if(a>0){
if(a==0)
{console.log("0 is niether prime nor a composite number")}
else if(a==2){console.log("prime number")}
else 
{
     for(i=2;i<a;i++)
     {
        if(a%i==0)
        {
            //console.log(`${a}`,"composite");
            counter++;
               
        }
        
        // else
        // {
        //     console.log("prime")
        //     continue;
        // }
        //break;
        //continue;

     }
     //console.log("prime");
     if(counter==0){console.log("prime")}
     else{console.log("composite")}
     }
    }
    else{
        console.log("By the usual defination negative integers can not be prime or composite")
    }