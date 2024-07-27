const kholiImages=[
    "https://tse3.mm.bing.net/th?id=OIP._OSwWZXF94td2cLKa7FGWgHaEo&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.defmtwl1SFwOTbtE3mV8cAHaEc&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.4MlX_XP4-qEN-WLfCxaFfwHaHa&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.ljODMlOSVuNJEUp43TkyvgHaE8&pid=Api&P=0&h=180",
    "https://tse3.explicit.bing.net/th?id=OIP.n2TkP26NAVDF9QW9rQJBtgHaEP&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.Jxu8U50cpROZ3r7tBb9taQHaE7&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.j4E6Si0lROxSJ4EryUr3UgHaEz&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.5ZK8YhsXA90Q5al--48bewHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.LEFPqKCbXaMj6iOL6em4CgHaE8&pid=Api&P=0&h=180https://tse3.mm.bing.net/th?id=OIP.LEFPqKCbXaMj6iOL6em4CgHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.8wFl6johXF38qUU-L1yNagHaLH&pid=Api&P=0&h=180"

]

let imgs=document.querySelectorAll("img");

let allTags=[
    document.querySelectorAll("h1"),
    document.querySelectorAll("h2"),
    document.querySelectorAll("h3"),
    document.querySelectorAll("h4"),
    

]

imgs.forEach((img)=>{
    
    const randomImg = Math.floor(Math.random() * kholiImages.length)
    
    img.src=kholiImages[randomImg];
})


allTags.forEach((tags)=>{
    tags.forEach((tag)=>{
        tag.innerHTML="Kholi"
    })

})