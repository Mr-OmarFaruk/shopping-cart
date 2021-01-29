// extra practice

// duplicate function details 


document.getElementById('cover-button-plus').addEventListener('click', function(){
    const caseInput=document.getElementById('cover-value');
    const caseCount=parseInt(caseInput.value);
    const caseNewCount=caseCount +1;
    caseInput.value=caseNewCount;
    const caseTotal=caseNewCount*59;
    document.getElementById('cover-price').innerText=caseTotal;
 });
 document.getElementById('cover-button-minus').addEventListener('click', function(){
    const caseInput=document.getElementById('cover-value');
    const caseCount=parseInt(caseInput.value);
    const caseNewCount=caseCount -1;
    caseInput.value=caseNewCount;
    const caseTotal=caseNewCount*59;
    document.getElementById('cover-price').innerText=caseTotal;
 });