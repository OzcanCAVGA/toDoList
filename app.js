const clock = document.querySelector('.clock')
const to_doParagraph = document.querySelector('.to-doParagraph')
setInterval(() => {
    const time = new Date();

    const html = `
        <span>${time.getHours()}:${time.getMinutes()}</span>
    `
    clock.innerHTML = html;
}, 1000)


const form = document.querySelector('.input-container');
const toDoContent = document.querySelector('.toDo');
const main_content = document.querySelector('.main-content')
form.todoAdd.value.textContent = 'deneme';
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(form.todoAdd.value)
    html = `
    <div class="toDo">
    <p class="to-doParagraph">${form.todoAdd.value}</p>
    <p class="to-doParagraph"><i class="fa-solid fa-xmark" style="color:rgb(219, 84, 97); font-size: large;"></i></p>
</div>
    `
    main_content.innerHTML += html
    form.todoAdd.value = ''

})



to_doParagraph.addEventListener('click', e => {

    e.target.style.textDecoration = 'line-through'

})
to_doParagraph.addEventListener('dblclick', e => {

    e.target.style.textDecoration = 'none'

})