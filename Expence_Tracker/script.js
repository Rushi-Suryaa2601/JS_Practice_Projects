const expenseform=document.getElementById('expenseform')

const expenseList=document.getElementById('expenseList')

expenseform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const description=document.getElementById('description').value;

    const category=document.getElementById('category').value;
    const amount=document.getElementById('amount').value;
     
  


    if(description && category && !isNaN(amount)){
        const newRow=document.createElement('tr');

        newRow.innerHTML=`<td>${description}</td>
        <td>${category}</td>
       <td>${amount}</td>`

       expenseList.appendChild(newRow)

       document.getElementById('description').value=""
       document.getElementById('category').value=""
       document.getElementById('amount').value=""
    }
    else{
        alert('Please fill out all the fields with valid date')
    }
})