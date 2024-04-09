import './style.css';

const sidebarBtn = document.querySelector('#sidebarBtn') as HTMLButtonElement;
const sidebarMenu = document.querySelector('#sidebarMenu') as HTMLUListElement;

const navbarMenuClasses = "flex menu-vertical absolute top-[100%] right-0 p-2 bg-base-300 shadow-lg px-1 z-[100]"

function toggleNavbar() {
  sidebarMenu.classList.toggle('hidden');
  sidebarMenu.classList.toggle('menu-horizontal');
  
  navbarMenuClasses.split(' ').forEach((cls: string) => {
    sidebarMenu.classList.toggle(cls);
  })
}

sidebarBtn.addEventListener('click', toggleNavbar);