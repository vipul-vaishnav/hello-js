'use strict';

const myUrl = `https://randomuser.me/api/?results=40`;
const userList = document.querySelector('.main__container__body__list');
const searchInput = document.querySelector('#search-input');
const listItems = [];

searchInput.addEventListener('keyup', filterData);

const getData = async () => {
  const response = await fetch(myUrl);
  const data = await response.json();
  return data.results;
};

getData().then((response) => {
  const users = response;

  users.forEach((user) => {
    const userBlock = document.createElement('li');
    userBlock.classList.add('main__container__body__list__item');
    userBlock.innerHTML = `
    <div class="img animated__bg animated__bg--image">
        <img src="${user.picture.large}" alt="">
    </div>
    <div class="content">
        <h2 class="name animated__bg animated__bg--name">
            ${user.name.first} ${user.name.last}
        </h2>
        <p class="badge animated__bg animated__bg--badge">
            ${user.location.city}, ${user.location.country}
        </p>
    </div>
    `;

    userList.insertAdjacentElement('beforeend', userBlock);
    listItems.push(userBlock);
  });
});

function filterData() {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
