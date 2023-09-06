const wrapper = document.querySelector("sliderWrapper");
const menuItems = document.querySelectorAll("menuItem");
menuItems.forEach(item,index)=> {
    item.addventListener("click",()=>{
        wrapper.computedStyleMap.transform = 'translateX'(${-100*index}vw);
    });
})
    }
}