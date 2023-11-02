// slider
const swiper = new Swiper('.swiper', {
    loop:true,
    navigation: {
      nextEl: '.main-block__arrow.swiper-button-next',
      prevEl: '.main-block__arrow.swiper-button-prev',
    },
  });



// tabs

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click",tabSwitcher);


function tabSwitcher(event){

  let currentActiveTabIndex = null;
  let nextActiveTabIndex = null;
  
  const targetElement = event.target;
  if( targetElement.closest(".tabs-deals__button")){
    tabNavItems.forEach((tabNavItem,index)=>{
      if(tabNavItem.classList.contains('active'))
      {
        currentActiveTabIndex = index;
        tabNavItem.classList.remove('active');
      }
      if(tabNavItem === targetElement){
        nextActiveTabIndex = index;
      }
      })
  }
  targetElement.classList.add('active');
  tabItems[currentActiveTabIndex].classList.remove('active');
  tabItems[nextActiveTabIndex].classList.add('active');
}