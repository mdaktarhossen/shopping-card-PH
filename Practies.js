const mobileAdd=document.getElementById('addMobile')
mobileAdd.addEventListener('click', function(){
    const mobileInput=document.getElementById('mobile-Number');
    const mobileNumber=parseFloat(mobileInput.value);
    const totalMobile=mobileNumber+1;
    mobileInput.value=totalMobile;
    const totalPrice=totalMobile*1219;
    document.getElementById('total-tk').innerText=totalPrice;
})

const mobileMinu=document.getElementById('minusMobile')
mobileMinu.addEventListener('click', function(){
    const mobileInput=document.getElementById('mobile-Number');
    const mobileNumber=parseFloat(mobileInput.value);
    const totalMobile=mobileNumber-1;
    mobileInput.value=totalMobile;
    const totalMobilePrice=totalMobile*1219;
    document.getElementById('total-tk').innerText=totalMobilePrice;
})

// ----------------------------second section
const coverAdd=document.getElementById('addCover')
coverAdd.addEventListener('click', function(){
    const coverInput=document.getElementById('cover-number');
    const coverNumber=parseFloat(coverInput.value);
    const totalCover=coverNumber+1;
    coverInput.value=totalCover;
    const totalCoverPrice=totalCover*59;
    document.getElementById('cover-tk').innerText=totalCoverPrice;
})

const minusCover=document.getElementById('minus-cover')
minusCover.addEventListener('click', function(){
    const coverInput=document.getElementById('cover-number');
    const coverNumber=parseFloat(coverInput.value);
    const totalCover=coverNumber-1;
    coverInput.value=totalCover;
    const totalCoverPrice=totalCover*59;
    document.getElementById('cover-tk').innerText=totalCoverPrice;
})

