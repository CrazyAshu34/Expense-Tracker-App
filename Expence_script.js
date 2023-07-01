let myform = document.getElementById("myform")
let myname = document.getElementById('name')
let mydate = document.getElementById('date')
let myfees = document.getElementById('fees')
let mytable = document.getElementById("mytable")
let noExpensesRow = document.querySelector('.mytr');

myform.addEventListener("submit", function (e) {
    e.preventDefault()
    let messages = [
        'bhai, Dhung se likh le kuch, it won\'t work like this.',
        'bhai, Andha hai ky mere bhai/ write something?',
        'Values dall bhai properly, .',
        'Jada soch mat, mere Dost. Just enter the details.',
        'bro javascript Nahi padhi kya tune alert समझता है'
    ];
    let randomAlert = Math.floor(Math.random() * messages.length);

    if (myname.value.trim() === '' || mydate.value.trim() === '' || myfees.value.trim() === '') {
        alert(messages[randomAlert])
    }

    else {
        let newTd = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = myname.value;

        let dateCell = document.createElement('td');
        dateCell.textContent = mydate.value;

        let feesCell = document.createElement('td');
        feesCell.textContent = "$" + myfees.value;

        let deleteBtn = document.createElement('span');
        deleteBtn.className = 'myspan';
        deleteBtn.innerHTML = "✂";



        deleteBtn.addEventListener('click', function (d) {
            if (d.target.classList.contains('myspan')) {
                d.target.parentElement.parentElement.remove();
            }
        });

        let deleteCell = document.createElement('td')
        deleteCell.style.textAlign = "right";
        deleteCell.appendChild(deleteBtn)

        newTd.appendChild(nameCell)
        newTd.appendChild(dateCell)
        newTd.appendChild(feesCell)
        newTd.appendChild(deleteCell)

        mytable.appendChild(newTd)

        myname.value = '';
        mydate.value = '';
        myfees.value = '';

        // Toggle visibility of "No expenses added yet!" message
        noExpensesRow.style.display = 'none';// this will be Gaayab your code

    }

}, false);

