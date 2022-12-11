var title1=document.createElement("h1")
title1.innerHTML="Channel Information"
document.body.append(title1)


// var input=document.createElement("input")
// input.setAttribute("id","in")
// document.body.append(input)


var btn1=document.createElement("button")
btn1.innerHTML="Check"
btn1.addEventListener("click",getData)
document.body.append(btn1)

var division1=document.createElement("div")
division1.setAttribute("id","details")

document.body.append(division1)

var paragraph=document.createElement("p")
paragraph.setAttribute("id","paragraph")
document.body.append(paragraph)

var title2=document.createElement("h1")
title2.innerHTML="Subscription Details"
document.body.append(title2)

var btn2=document.createElement("button")
btn2.innerHTML="Check"
btn2.addEventListener("click",subScription)
document.body.append(btn2)

var division2=document.createElement("div")
division2.setAttribute("id","details1")
document.body.append(division2)

var title3=document.createElement("h1")
title3.innerHTML="Uploaded videos details"
document.body.append(title3)

var btn3=document.createElement("button")
btn3.innerHTML="Check"
btn3.addEventListener("click",videos)
document.body.append(btn3)

var division3=document.createElement("div")
division3.setAttribute("id","details2")
document.body.append(division3)

var title4=document.createElement("h1")
title4.innerHTML="Channel activity"
document.body.append(title4)

var btn4=document.createElement("button")
btn4.innerHTML="Check"
btn4.addEventListener("click",channelActivity)
document.body.append(btn4)

var division4=document.createElement("div")
division4.setAttribute("id","details3")
document.body.append(division4)


//Retrive channel information:

    async function getData(){
       
        let data1=await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&forUsername=Google&key=AIzaSyAWOtdDbE4mVXjf0ZActqw2_DFeIqqgOD0")
        let res1=await data1.json()
    
        console.log(res1)
    
       
        var result1=document.getElementById("details")
        result1.innerText=`${res1.items[0].snippet.localized.title}`
       
       document.getElementById("paragraph")
        paragraph.innerText= `${res1.items[0].snippet.localized.description}`

       
    }
    //getData();

    //Retrive subscription details:

     async function subScription(){
        let data2=await fetch("https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key=AIzaSyAWOtdDbE4mVXjf0ZActqw2_DFeIqqgOD0")
        let res2=await data2.json()
        console.log(res2)

        var result2=document.getElementById("details1")
        result2.innerHTML=`${res2}`

     }
     subScription()

     // Uploaded videos details:

     async function videos(){

        let data3=await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyAWOtdDbE4mVXjf0ZActqw2_DFeIqqgOD0")
        let res3=await data3.json()
        console.log(res3)

        var result3=document.getElementById("details2")
        result3.innerHTML=`${res3}`
     }
     videos()

   //Channel activity:

   async function channelActivity(){

    let data4=await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyAWOtdDbE4mVXjf0ZActqw2_DFeIqqgOD0")
    let res4=await data4.json()
    console.log(res4)

    var result4=document.getElementById("details3")
    result4.innerHTML=`${res4}`
 }
   channelActivity()