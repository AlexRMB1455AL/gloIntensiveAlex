// const main1 = document.getElementById('main');
// const main2= document.querySelector('.main > div');
// const main3= document.querySelector('#main');
// const li1 = document.querySelectorAll('li');
// console.log(main1, main2, main3, li1);

// for(lis = 0; lis <= li1.length; lis++){
//     console.log(Document.querySelectorAll('li'));
// }
// li1.forEach((element, index) => {
//     console.log(element);
//     console.log(index);
//     // console.log(array);
// })

const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescription = document.querySelectorAll('.design-descr');
// console.log(tabButtons);
console.log(tabDescription);

tabButtons.forEach((tabButton, index) => {
  //   tabButton.onclick = function () {
  //     console.log("click");
  //     console.dir(tabButton);
  //   };
  tabButton.addEventListener("click", (event) => {
    tabDescription.forEach((descr, indexDescr) => {
       if(index === indexDescr) {
        
            descr.classList.remove('hidden')
        } else {
            descr.classList.add('hidden')
        }
       
    })
    // console.log(event.target);
    // console.dir(tabButton);
    // event.target.classList.add('active');
    tabButtons.forEach((btn) => {
        // console.dir(tabButton);
        // console.log(btn);
        // console.log(event.target);
        if(btn === event.target){
            btn.classList.add('design-list_item.active')
        } else {
            btn.classList.remove('design-list_item.active')

        }
    })
  });
  // tabButton.addEventListener('click', () => {
  //     console.log('click2');
  //     console.dir(tabButton);
  // });
});
