const dropdowns = document.querySelectorAll('.cabecera .menu-obras');
const supportsHover = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');

for (const dropdown of dropdowns) {
    dropdown.addEventListener('pointerenter', (event) => {
        if (supportsHover.matches && event.pointerType === 'mouse') {
            dropdown.open = true;
        }
    });
    dropdown.addEventListener('pointerleave', (event) => {
        if (supportsHover.matches && event.pointerType === 'mouse' &&
            !dropdown.matches(':focus-within')) {
            dropdown.open = false;
        }
    });
    dropdown.addEventListener('focusout', (event) => {
        if (!dropdown.contains(event.relatedTarget) && !dropdown.matches(':hover')) {
            dropdown.open = false;
        }
    });
    dropdown.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && dropdown.open) {
            event.preventDefault();
            dropdown.open = false;
            dropdown.querySelector('summary').focus();
        }
    });
}

document.addEventListener('pointerdown', (event) => {
    for (const dropdown of dropdowns) {
        if (!dropdown.contains(event.target)) dropdown.open = false;
    }
});

const mobileLayout = window.matchMedia('(max-width: 767px)');
const navigation = document.querySelector('.cabecera nav');
const drawer = document.querySelector('.menu-movil');
const openMenu = document.querySelector('.menu-movil-abrir');
const closeMenu = document.querySelector('.menu-movil-cerrar');

function placeNavigation() {
    if (mobileLayout.matches) {
        drawer.append(navigation);
    } else {
        drawer.close();
        drawer.after(navigation);
    }
    for (const dropdown of dropdowns) dropdown.open = false;
}

openMenu.addEventListener('click', () => {
    drawer.showModal();
    openMenu.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-movil-activo');
});
closeMenu.addEventListener('click', () => drawer.close());
drawer.addEventListener('click', (event) => {
    const bounds = drawer.getBoundingClientRect();
    if (event.target === drawer && event.clientX < bounds.left) drawer.close();
    if (event.target.closest('a')) drawer.close();
});
drawer.addEventListener('close', () => {
    document.body.classList.remove('menu-movil-activo');
    openMenu.setAttribute('aria-expanded', 'false');
    if (mobileLayout.matches) openMenu.focus();
});
mobileLayout.addEventListener('change', placeNavigation);
placeNavigation();
