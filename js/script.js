// Variables

let countrySelect = document.querySelector('.countrySelect'),
    citySelect = document.querySelector('.citySelect'),
    cities = {
        Iran: ['Tehran', 'Shiraz', 'Isfahan', 'Tabriz', 'Rasht'],
        Turkey: ['Istanbul', 'Izmir', 'Ankara', 'Antalya'],
        USA: ['Los Angeles', 'San Diego', 'New York', 'Boston', 'Washington DC'],
        PleaseSelect: ['Select City ...']
    };

// Real purpose of the project 
alert(' - هدف اصلی این پروژه کار کردن با ایونت چینج است.'
    + '\n' + '- The real purpose of this project is working with the change event ')

// Events
countrySelect.addEventListener('change', country => {
    country = countrySelect.value // Iran ~> For Example 
    const mainData = cities[country] // cities of Iran
    citySelect.innerHTML = ``
    mainData.forEach(city => {
        // adding the cities in options
        citySelect.innerHTML += `<option>${city}</option>`
    });
})