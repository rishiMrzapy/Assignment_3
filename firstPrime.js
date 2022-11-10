const vnu=require('readline-sync');
let a=vnu.questionInt("Enter a number : ");
let i,j;
 let counter=0;
for(i=2;i<=a;i++)
{
    for(j=2;j<=i;j++)
    {
        if(i%j==0)
        {
            //console.log(i);
            break; // current loop se hi bahar nikal deta hai vhi se loop stop kra k
            //continue; particular condition ko skip kr k loop continue rkhta hai 
        }
        // else
        // {
        //      continue; 
        // }
    }
    if(i==j)
    {
        console.log(i);
    }
}
