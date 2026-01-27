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
const tabDescription = document.querySelectorAll(".design-descr");
const tabImages = document.querySelectorAll(".design-images");

const changeContent = (array, value) => {
  array.forEach((elem) => {
      if (elem.dataset.tabsField === value) {
        elem.classList.remove("hidden");
      } else {
        elem.classList.add("hidden");
      }
    });
};

// console.log(tabButtons);
// console.log(tabDescription);
// console.log(tabImages);

tabButtons.forEach((tabButton, index) => {
  //   tabButton.onclick = function () {
  //     console.log("click");
  //     console.dir(tabButton);
  //   };
  tabButton.addEventListener("click", (event) => {
    // tabButton.dataset.active = '123';
    const dataValue = tabButton.dataset.tabsHandler;
    tabDescription.forEach((descr, indexDescr) => {
      if (descr.dataset.tabsField === dataValue) {
        descr.classList.remove("hidden");
      } else {
        descr.classList.add("hidden");
      }
    });

    // tabImages.forEach((image) => {
    //   if (image.dataset.tabsField === dataValue) {
    //     image.classList.remove("hidden");
    //   } else {
    //     image.classList.add("hidden");
    //   }
    // });
    // console.log(event.target);
    // console.dir(tabButton);
    // event.target.classList.add('active');
    changeContent(tabButtons, dataValue);
    changeContent(tabDescription, dataValue);
    changeContent(tabImages, dataValue);


    tabButtons.forEach((btn) => {
      // console.dir(tabButton);
      // console.log(btn);
      // console.log(event.target);
      if (btn === event.currentTarge) {
        btn.classList.add("design-list_item.active");
      } else {
        btn.classList.remove("design-list_item.active");
      }
    });
  });
  // tabButton.addEventListener('click', () => {
  //     console.log('click2');
  //     console.dir(tabButton);
  // });
});
