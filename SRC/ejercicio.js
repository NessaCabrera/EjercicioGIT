let i =0;

for (i=0; i<=100; i++){
    let multitres;
    multitres=i%3;
    multicinco=i%5;
    if(multitres==0)
    {
        console.log("FIZZ");
    }else{
        if (multicinco==0)
        {
            console.log ("BUZZ");
        }else{
            console.log (i);
        }
        
    }
}