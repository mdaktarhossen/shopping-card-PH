const addMobile=document.getElementById('addMobile')
addMobile.addEventListener('click', function(){
    const mobileNumber=document.getElementById('mobile-Number').value;
    const total=parseFloat(mobileNumber);
    const addMobile=total+1;
    document.getElementById('mobile-Number').value=addMobile;
    const totalPtices=addMobile*1219;
    document.getElementById('cash-total').innerText='$'+totalPtices;
})

const minusMobile=document.getElementById('minus-mobile')
minusMobile.addEventListener('click', function(){
    // const mobileNumber=document.getElementById('mobile-Number').value;
    // const total=parseFloat(mobileNumber);
    // const addMobile=total-1;
    // document.getElementById('mobile-Number').value=addMobile;
    // const totalPtices=addMobile*1219;
    // document.getElementById('cash-total').innerText=totalPtices;
// })

function mobilePricesUpdated(pricesMinusPlush){
    const mobileNumber=document.getElementById('mobile-Number').value;
    const total=parseFloat(mobileNumber);
    if(pricesMinusPlush==true){
        addMobile=total+1;
    }
    if(pricesMinusPlush==false && addMobile>0 ){
        addMobile=total-1;      
    }
    document.getElementById('mobile-Number').value=addMobile;
    const totalPtices=addMobile*1219;
    document.getElementById('cash-total').innerText=totalPtices;
}