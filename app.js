let url="http://universities.hipolabs.com/search?country=";
let btn=document.querySelector(".nav-search button");
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    document.querySelector("input").value="";
    colleges=await getCollege(country);
    showResult(colleges , country);
    
});

async function getCollege(country){
    try {
        let res=await axios.get(url+country);
        return res;
    } catch (error) {
        
    }
}

showResult=(colleges ,country)=>{
    let title=`Search result for ${country}:- <span>total ${colleges.data.length} result found</span>`
    document.querySelector(".result-title").innerHTML=title;
    document.querySelector("ol").innerHTML="";
    for (college of colleges.data){
        let li=document.createElement("li");
        li.innerHTML='<a href='+college.web_pages[0]+' target="_blank">'+college.name+'</a';
        document.querySelector("ol").appendChild(li);

    }

}
