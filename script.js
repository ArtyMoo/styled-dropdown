const maxx_btn_dropdown = document.querySelector('.maxx-btn-dropdown');
const maxx_dropdown = document.querySelector('.maxx-wrap');
const maxx_dropdown_border = document.querySelector('.maxx-dropdown');
const maxx_arrow = document.querySelector('.fa');
const maxx_option = document.querySelector('.maxx-option');
const maxx_btn = document.querySelector('.maxx-btn');

maxx_btn_dropdown.addEventListener('click', () => {

    if(!maxx_dropdown.classList.contains('maxx-d-none')) {
        maxx_dropdown.classList.add('maxx-d-none');
        maxx_dropdown_border.style.paddingBottom = '12px';
        maxx_dropdown_border.style.borderBottomRightRadius = '0';
        maxx_arrow.style.transform = "rotate(" + 360 + "deg)";
    } else {
        maxx_dropdown.classList.remove('maxx-d-none');
        maxx_dropdown_border.style.paddingBottom = '0px';
        maxx_dropdown_border.style.borderBottomRightRadius = '0.5em';
        maxx_arrow.style.transform = "rotate(" + 180 + "deg)";
    }
});

let listItems = document.querySelectorAll('.maxx-option');

listItems.forEach( (item) => {
    item.onclick = (e) => {
        maxx_select(item);
    }
} )

function maxx_select(selected) {
    document.querySelector('.maxx-selected').innerHTML = selected.innerText;
    document.querySelector('.maxx-btn').href = selected.querySelector('a').href;
}
