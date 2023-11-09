const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the 'active' class on each click
    });
}
if(close)
{
    close.addEventListener('click',()=>
    {
        nav.classList.toggle('active');
    });
}
