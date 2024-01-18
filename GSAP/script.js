gsap.to(".panda",{
    y:300,
    duration:1,
    //ease:"bounce",
   
    //repeat:-1,
   // yoyo:true,
    OnUpdate:()=>{
        document.querySelector(".panda").setAttribute("src",("1.png"))
    },
    stagger:0.8,
    each:1,
    repeat:-1,
   yoyo:true,
   from:'center',
})
//gsap.from(".panda",{y:100})
//gsap.to(".panda",{y:50})
//gsap.fromTo(".panda",{y:0},{y:500})
//gsap.set(".panda",{y:0},{y:500})