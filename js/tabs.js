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
// console.log(tabButtons);

tabButtons.forEach((tabButton, index) => {
  //   tabButton.onclick = function () {
  //     console.log("click");
  //     console.dir(tabButton);
  //   };
  tabButton.addEventListener("click", (event) => {
    console.log(event.target);
    //console.dir(tabButton);
  });
  // tabButton.addEventListener('click', () => {
  //     console.log('click2');
  //     console.dir(tabButton);
  // });
});
