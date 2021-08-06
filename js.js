const myInput = document.querySelector('#myInput');
const myButton = document.querySelector('#myButton');
const mylist = document.querySelector('#mylist');
const mylist_length = document.getElementById('mylist');
const d = document.getElementById('myInput');
var length__output = 1;

let foo = [];


/*myButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = myInput.value;
    
    
    let i = array.length;
    array.push(myInput.value);
    
    localStorage.setItem('item', JSON.stringify(array));
    
    const deleteButton = document.createElement('button'); /*кнопка удалить
    deleteButton.textContent = 'удалить';

    deleteButton.addEventListener('click', function() {
        mylist.removeChild(newItem);
        length__output = mylist_length.children.length; /*длина ul
        document.getElementById('result').innerHTML = length__output; /*вывод в result
    })

    newItem.appendChild(deleteButton); /*добавляем кнопку удалить в каждый li
    mylist.appendChild(newItem); 

    myInput.value = ''; /*чистим строку ввода
    length__output = mylist_length.children.length; /*длина ul
    document.getElementById('result').innerHTML = length__output; /*вывод в result
});*/

function createDo (value) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = value;

    
    let i = foo.length;
    

    const deleteButton = document.createElement('button'); 
    deleteButton.textContent = 'удалить';

    deleteButton.addEventListener('click', function() {
        mylist.removeChild(newItem); 
        deleteDo();
    })

    newItem.appendChild(deleteButton); 
    mylist.appendChild(newItem);

    myInput.value = ' ';
}


myButton.addEventListener('click', function() {
    const newValue = myInput.value;
    foo.push(newValue);
    createDo(newValue);
    localStorage.setItem('item', JSON.stringify(foo));
})


document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem('item')) {
        foo = JSON.parse(localStorage.getItem('item'));
        foo.forEach((item) => {
            createDo(item);
        }) 
    }
})

function deleteDo() {
    let foo1 = {};
    foo1.todo = d;

    foo1 = JSON.parse(localStorage.getItem('item'));
    foo1.splice(this.index, 1);

    localStorage.setItem('item', JSON.stringify(foo1));
}














