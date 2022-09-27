// const account_det ='{ "AccountName":"CurrentAccount","BankBalance":"XXXXX", "transactionamount":"15000","transactiondate":"2022-08-12 15:55","PaymentType":{"id":"x","Name":"Bank to wallet Transfer"}}';
// const sender_det='{"sender":"Saurabh Sharma","bank":"SBI","IFSC":"SBIN016095","accountno":"XXXXXXXXX5736","transactiondate":"2022-08-12 15:55"}';
// const receiver_det='{ "receiver":"Saurabh Sharma","wallet":"Growpital Wallet","refrenceno":"DBTR/222201998174","transactiondate":"2022-08-12 15:55"}';
// const pay_method='{"paymentmethod":"UPI","transactionID":"DBTR/222201998174"}';


const details='{"AccountName":"CurrentAccount","BankBalance":"XXXXX", "transactionamount":"15000","transactiondate":"12 Aug 2022, 03:55pm","PaymentType":{"id":"x","Name":"Bank to wallet Transfer"}, "sender":"Saurabh Sharma","bank":"SBI","IFSC":"SBIN016095","accountno":"XXXXXXXXX5736","transactiondate":"12 Aug 2022, 03:55pm","receiver":"Saurabh Sharma","wallet":"Growpital Wallet","refrenceno":"DBTR/222201998174","transactiondate":"12 Aug 2022, 03:55pm","paymentmethod":"UPI","transactionID":"DBTR/222201998174"}';

const obj = JSON.parse(details);





function on(){
    document.getElementById("modal").style.display="block";
}
const openModalButtons =document.querySelectorAll('[data-modal-target]')
const closeModalButtons =document.querySelectorAll('[data-modal-close]')
const overlay=document.getElementById('overlay')

openModalButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        const modal=document.querySelector(button.dataset.modalTarget)
        openModalButtons(modal)
    })

})

overlay.addEventListener('click',() =>{
    const modals=document.querySelectorAll('#modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
    
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        const modal= button.closest('#modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal== null) returnmodal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    var element = document.getElementById("main2");
    element.classList.remove("add_js");
  }

  
  
  document.getElementById("amount").innerHTML = "&#x20B9;"+obj.transactionamount;
  document.getElementById("date").innerHTML = obj.transactiondate;
  document.getElementById("date1").innerHTML = obj.transactiondate;
  document.getElementById("date2").innerHTML = obj.transactiondate;

  document.getElementById("date3").innerHTML = obj.paymentmethod;
  document.getElementById("transid").innerHTML = obj.transactionID;
  document.getElementById("name").innerHTML = obj.sender;
  document.getElementById("name1").innerHTML = obj.receiver;
  document.getElementById("ifsc").innerHTML = obj.bank+", IFSC"+obj.IFSC;
  document.getElementById("ifsc1").innerHTML = "A/c No."+obj.accountno;
  document.getElementById("ifsc2").innerHTML = obj.wallet;
  document.getElementById("ifsc3").innerHTML = "Ref No. "+obj.refrenceno;





