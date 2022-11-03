// const btn = document.querySelector('#btn-menu');
// const btnClose = document.querySelector('#btn-menu-close');

// btn.addEventListener('click', () => {

//     document.querySelector('#nav').classList.remove('hidden');
//     document.querySelector('#opacity').classList.remove('hidden');
// });

// btnClose.addEventListener('click', () => {

//     document.querySelector('#nav').classList.add('hidden');
//     document.querySelector('#opacity').classList.add('hidden');
// });

document.querySelectorAll('.header__btn').forEach((el) => {
    el.addEventListener('click', () => {

        document.querySelector('#nav').classList.toggle('hidden');
        document.querySelector('#opacity').classList.toggle('hidden');
    })
})