const btn = document.querySelector('#btn-menu');

btn.addEventListener('click', () => {

    btn.classList.toggle('btn__icon-close');
    document.querySelector('#nav').classList.toggle('hidden');
    document.querySelector('#opacity').classList.toggle('hidden');
});