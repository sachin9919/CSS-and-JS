function saveToDb(data , success, failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1; 
    if(internetSpeed > 4){
        success();
    }
    else{
        failure();
    }
}

saveToDb("apna" ,  // we have nesting of callbacks here and callinng function again and agin if we get success
    () => {
        console.log("data saved-1 successfully");
        saveToDb("hello sam" ,
            ()=>{
                console.log("data saved-2 successfully");
                saveToDb("hii again" ,
                    ()=>{
                        console.log("data saved-3 successfully");
                    },
                    ()=>{
                        console.log("weak signal-3");
                    }
                );
            },
            ()=>{
                console.log("weak signal-2");
            }
        );
    },
    () =>{
        console.log("weak signal-1");
    }
);