function time(){
    const now = Date();
    const second = now.getSeconds();
    const hand1 = ((second/60)*360) + 90;
    document.getElementById("hand1").style.transform=`rotate (${hand1}deg)`;
    
    const minuts = now.getMinutes();
    const hand2= ((minutes/60)*360)+90;
    document.getElementById("hand2").style.transform=`rotate (${hand2}deg)`;
    
    
    const hour = now.getHour();
    const hand3= ((hour/12)*360)+90;
    document.getElementById.apply("hand3").style.transform=`rotate (${hand3}deg)`;
}