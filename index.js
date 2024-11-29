
// here I will make event to navbar
var lists=document.querySelectorAll(".list")
for(var i=0; i<lists.length;i++){
    lists[i].parentNode.addEventListener('mouseover',function(el){
        var list=this.querySelector(".list");
        list.style.visibility='visible'
    })
    lists[i].parentNode.addEventListener('mouseout',function(el){
        var list=this.querySelector(".list");
        list.style.visibility='hidden'
    })
}
// slider for background
var land=document.querySelector(".land")
var i=0;
var images=[]
images[0]= "https://i.postimg.cc/pL6WKRHm/1.jpg";
images[1]="https://i.postimg.cc/Fsr6y6Nc/14.jpg";

    function changeimage(){
    land.style.backgroundImage = "url(" + images[i] + ")";
    if(i<images.length-1){
        i++;
    }
    else{
        i=0
    }
}
changeimage();

// Set an interval to automatically change the image every 5 seconds
setInterval(changeimage, 5000);

// active animation of  images 
const imas = document.querySelectorAll('.one img');

imas.forEach((image) => {
 image.addEventListener('mouseover', () => {
    image.classList.add('animate'); 
  })
 image.addEventListener('mouseout', () => {
     image.classList.remove('animate');

});
})
// make daily  offer
const offers=[{
image:"https://i.postimg.cc/mgPbHh9t/giant-cupcake.jpg",
descriotion:'giant-cupcake',
price:50 ,

},{
    image:"https://i.postimg.cc/wvh9KNsN/3.jpg",
descriotion:"magic box",
price:95,

},
{
    image:"https://i.postimg.cc/GhXsJB5R/kaleidoscope-cake-2.jpg",
descriotion:"princes cake",
price:75,

},{
    image:"https://i.postimg.cc/HLzcyj2b/15.jpg",
descriotion:"passen cupcake",
price:5,

}] 
const discount=50;
function updateoffer(){
    const offer=offers[Math.floor(Math.random()*offers.length)];
 
 const disco=(offer.price *(1 - discount / 100))
    document.querySelector(".details h4").textContent=offer.descriotion;
    document.querySelector(".price h3").textContent=`${offer.price}$`;
    document.querySelector(".price h2").textContent=`${disco}$`
    document.querySelector(".foto img").src=offer.image

}

// make countdown
var endtime=new Date();
endtime.setDate(endtime.getDate()+1);
endtime.setHours(0,0,0,0);
function updatecountdown(){
    const now=new Date();
    const remainingtime=endtime - now;
 const hours=Math.floor(remainingtime / 3600000);
 const minutes=Math.floor((remainingtime % 3600000)/60000)
 const seconds=Math.floor((remainingtime %60000)/1000) 


 document.querySelector(".cuntdown").innerHTML=`${hours < 10 ? '0':''}${hours}:${minutes < 10 ? '0':''}${minutes}:${seconds < 10 ?'0':''}${seconds}`
 coundowninterval=setInterval(updatecountdown,1000);
 if(remainingtime <=0){
    updateoffer()
    endtime.setTime(endtime.getDate()+1);
    endtime.setHours(0,0,0,0)
 }
}
updateoffer()
updatecountdown()
const pressbutton=document.querySelector(".press button")
const audi=document.getElementById("myauio")
function iu(){
    pressbutton.style.animationPlayState='paused';
    audi.play()
  
}


// slid
// start set prodects 
// set all date
let cake=[{
    id:1,
    discription:'chocola',
    price:'20$',
    imgurl:'https://i.postimg.cc/mgPbHh9t/giant-cupcake.jpg'
},{
    id:1,
    discription:'unicorn',
    price:'20$',
    imgurl:'https://i.postimg.cc/GhXsJB5R/kaleidoscope-cake-2.jpg'
},{
    id:1,
    discription:'strobarray',
    price:'20$',
    imgurl:'https://i.postimg.cc/vB2kV2N8/h4a7255-500x500-1-1.png'
}
,{
    id:1,
    discription:'magec',
    price:'20$',
    imgurl:'https://i.postimg.cc/5NJ8QJJD/2.jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/Gp6yLwz7/1.jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/VsZBTpPh/images-9.jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/4dPksZQV/images-8.jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/rFx6wSjq/images-7.jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/Dztd0bBK/3.jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/FzPYfMNJ/images-6.jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/q7GqCKdJ/images_(18).jpg'
},{
    id:1,
    discription:'cake',
    price:'20$',
    imgurl:'https://i.postimg.cc/G34D6MCv/images_(17).jpg'
}]
let cupcake=[{
    id:1,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/pdHJsQFf/IMG-5918-e1549218661984-300x300.jpg'
},{
    id:2,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/SQX6VgKM/vanness-06.jpg'
},{
    id:3,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/2jFbmTTd/images-2.jpg'}
,{
    id:4,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/k5bGHyBb/images-1.jpg'
},{
    id:5,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/bYTJ4rN3/images.jpg'
},{
    id:6,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/dtV1FFhv/4.jpg'
},{
    id:7,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/Wzb2smbS/3.jpg'
},{
    id:8,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/Fsz9qx6H/2.jpg'
},{
    id:9,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/VLnH1KNF/images-3.jpg'
},{
    id:10,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/q7nPFp3p/images-5.jpg'
},{
    id:11,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/BvX7fj0D/image.jpg'
},{
    id:12,
    discription:'cupcake',
    price:'5$',
    imgurl:'https://i.postimg.cc/Y2VxvYPy/images-2.jpg'
}]
let vegancake=[{
    id:1,
    discription:'vegan',
    price:'60$',
    imgurl:'https://i.postimg.cc/G34D6MCv/images_(17).jpg'


},{
    id:1,
    discription:'vegan',
    price:'60$',
    imgurl:'https://i.postimg.cc/yYzNnnY1/_تنزيل_(8).jpg'
},{
    id:1,
    discription:'vegan',
    price:'60$',
    imgurl:'https://i.postimg.cc/q7GqCKdJ/images_(18).jpg'
},{
    id:1,
    discription:'vegan',
    price:'60$',
    imgurl:'https://i.postimg.cc/VLnH1KNF/images-3.jpg'
}]
let carts=[{
    id:1,
    discription:'card',
    price:'3$',
    imgurl:'https://i.postimg.cc/LX2h0XvC/images_(13).jpg'
},{
    id:1,
    discription:'card',
    price:'5$',
    imgurl:'https://i.postimg.cc/MZtfNyCy/images_(14).jpg'
},{
    id:1,
    discription:'card',
    price:'2$',
    imgurl:'https://i.postimg.cc/zBrRZpDk/images_(15).jpg'
},
{
    id:1,
    discription:'card',
    price:'3$',
    imgurl:'https://i.postimg.cc/kGwSy8mv/_تنزيل_(9).jpg'
},
    {
        id:1,
        discription:'candle',
        price:'5$',
        imgurl:'https://i.postimg.cc/cLzQjQ8D/images_(16).jpg'
}]
// add data into html
let cupcakes=document.querySelector(".cupcake .container")
function drow1(){
let prodect=cupcake.map((item)=>{
    return ` 
      <div class="prodect" id="cupcake">
        <img src="${item.imgurl}" alt="">
        <h3>${item.discription}</h3>
        <h2>${item.price}</h2>
        <button>ordernow</button>
      </div>
  
  `
}).join("");
cupcakes.innerHTML=prodect

}

function drow2(){
    let prodect=cake.map((item)=>{
        return ` 
          <div class="prodect">
            <img src="${item.imgurl}" alt="">
            <h3>${item.discription}</h3>
            <h2>${item.price}</h2>
            <button>ordernow</button>
          </div>
      
      `
    }).join("");
    cupcakes.innerHTML=prodect
   
    
}
    function drow3(){
        let prodect=vegancake.map((item)=>{
            return ` 
              <div class="prodect">
                <img src="${item.imgurl}" alt="">
                <h3>${item.discription}</h3>
                <h2>${item.price}</h2>
                <button>ordernow</button>
              </div>
          
          `
        }).join("");
        cupcakes.innerHTML=prodect
         
    }
        function drow4(){
            let prodect=carts.map((item)=>{
                return ` 
                  <div class="prodect">
                    <img src="${item.imgurl}" alt="">
                    <h3>${item.discription}</h3>
                    <h2>${item.price}</h2>
                    <button>ordernow</button>
                  </div>
              
              `
            }).join("");
            cupcakes.innerHTML=prodect
          
            }

    const choosecake=document.querySelector(".opencake")
    const choosecupcake=document.querySelector(".opencupcake")
    const choosevagencake=document.querySelector(".openvagencake")
    const choosecard=document.querySelector(".opencards")
choosecake.addEventListener('click',drow2)
choosecupcake.addEventListener('click',drow1)
choosevagencake.addEventListener('click',drow3)
choosecard.addEventListener('click',drow4)
    
// widding slider

var wedding=document.querySelector(".right")
var i=0;
var image=[]
image[0]= "https://i.postimg.cc/522hNJhq/4.jpg";
image[1]="https://i.postimg.cc/65tsgnzP/5.jpg";
image[2]="https://i.postimg.cc/2yds3SjT/6.jpg";
image[3]="https://i.postimg.cc/65tsgnzP/5.jpg";
image[4]="https://i.postimg.cc/43qkS0Fv/images-10.jpg"

    function weddingcake(){
    wedding.style.backgroundImage = "url(" + image[i] + ")";
    if(i<image.length-1){
        i++;
    }
    else{
        i=0
    }
   

}


drow2()
// Set an interval to automatically change the image every 1 seconds
setInterval(weddingcake, 1000);
// make email condition
const emailinput=document.querySelector('.emil');
const emailerror=document.querySelector('#email-error')
function validateemail(){
    const email=emailinput.value;
    const emailREgex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/g
    if(email.match(emailREgex)){
        emailerror.textContent=""
    }else{
        emailerror.textContent="please enter  a vaild email address"
    }
}




// event on navbar
const navcake=document.querySelector(".dad-2")

navcake.addEventListener('click',drow2)
const navcupcake=document.querySelector(".dad-1")

navcupcake.addEventListener('click',drow1)

const navcards=document.querySelector(".dad-3")

navcards.addEventListener('click',drow4)
const vago=document.querySelector(".vago")
vago.addEventListener('click',drow3)



// scrollup

var scrollup=document.querySelector('.scroll')
window.addEventListener('scroll',()=>{
    return window.scrollY >= 1000?scrollup.style.visibility='visible':scrollup.style.visibility='hidden'
})
scrollup.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
