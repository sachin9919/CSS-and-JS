let btn = document.querySelector("button");
let url = "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_1777.jpg";

btn.addEventListener("click" , async() => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src" , link);
})

async function getImage() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log("error" , e);
        return "/";
    }
}