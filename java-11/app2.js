h1 = document.querySelector("h1");

function colorChange(color , delay){
    return new Promise((resolve , reject) => { // AGAR RESOLVE HO TO POMISE RETURN AUR AHAR REJECT HUA TO PROMISE RETURN HOGA
        setTimeout(() => {
            let n = Math.floor(Math.random()*10) +1;
            if(n > 5) reject("promise rejected");
            else {
                h1.style.color = color;
                resolve("color changed");
            }
        }, delay);
    });
}

async function demo() {
    try{
        await colorChange("green" , 1000);
        await colorChange("black" , 1000);
        await colorChange("red" , 2000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
}

// NOW CALLING FUNCTION BY PROMISE CHAINING USING THEN AND CATCH AND ALTERNATE FOR THIS IS WRITTEN JUST ABOVE

// colorChange("red",1000)
//     .then(() => { // THEN MEANS SUCCESSFUL AB YE SUCCESSFUL HOGYA TO AGLI CALL BHI LAGEGEI
//         console.log("red color applied");
//         return colorChange("orange",1000);
//     })
//     .then(() => {
//         console.log("orange color applied");
//         return colorChange("blue",1000);
//     })
//     .then(() => {
//         console.log("blue color applied");
//     })

//     .catch(() =>{
//         console.log("no color found");
//     });

