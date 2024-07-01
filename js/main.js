"use strict";

{
  function open() {
    const properties__item = document.querySelectorAll('.properties__item');
  
    properties__item.forEach(item => {
      item.addEventListener('click', e => {
        // クリックされたproperties__item要素を取得
        const clickedItem = e.currentTarget;
        
        // 子要素のproperties__detailを取得
        const detailElement = clickedItem.querySelector('.properties__detail');
    
        clickedItem.classList.toggle('open');
  
        console.log('fire');
      });
    });
  }
}