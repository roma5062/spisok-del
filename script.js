const myButton = document.querySelector('#myButton')
const nameInput = document.querySelector('#nameInput')
const list = document.querySelector('#list')

myButton.addEventListener('click', ()=> {
    let newItem = document.createElement('li')
   
    newItem.textContent = nameInput.value
   
    list.appendChild(newItem)
   //добавить класс итем элементу ньюитем
    newItem.classList.add('item')
    const deleteButton = document.createElement('Button')
    newItem.appendChild(deleteButton)
    deleteButton.textContent = 'Удалить'
   
   
   
   
    deleteButton.addEventListener('click', () => {
       list.removeChild(newItem)
    })
})   