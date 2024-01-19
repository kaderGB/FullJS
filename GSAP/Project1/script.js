var transi = gsap.timeline();
transi.from(".logo",1, {y:200,opacity:0});

transi.from(".elmnt", 1, {
    y:500, 
    stagger:0.2,
    opacity:0,
});


transi.from(".img1 img", 1, {
    y:500, 
    stagger:0.2,
    scale:1.4,
    opacity:0,
});

transi.from(".img1 img", 2, {
    y:-200, 
    stagger:0.2,
    
});

