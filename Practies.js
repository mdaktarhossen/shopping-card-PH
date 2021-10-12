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
    const totalPrice=totalMobile*1219;
    document.getElementById('total-tk').innerText=totalPrice;
})