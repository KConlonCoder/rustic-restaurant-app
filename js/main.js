document.getElementById('link-breakfast').addEventListener('click',showBreakfast)
document.getElementById('link-lunch').addEventListener('click',showLunch)
document.getElementById('link-dinner').addEventListener('click',showDinner)
document.getElementById('link-sides').addEventListener('click',showSides)
document.getElementById('link-drinks').addEventListener('click',showDrinks)


function hideAll() {
    const all = document.querySelectorAll(".click-hide");

    all.forEach(function(item) {
        item.style.display='none';
        });
}

function showBreakfast() {
    hideAll();
    document.getElementById('menu-breakfast').style.display='block';
}

function showLunch() {
    hideAll();
    document.getElementById('menu-lunch').style.display='block';
}

function showDinner() {
    hideAll();
    document.getElementById('menu-dinner').style.display='block';
}

function showSides() {
    hideAll();
    document.getElementById('menu-sides').style.display='block';
}

function showDrinks() {
    hideAll();
    document.getElementById('menu-drinks').style.display='block';
}