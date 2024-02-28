//geeting tags of HTML
const tempratureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField =document.querySelector(".searchfild");
const form = document.querySelector("form");

//Event call
form.addEventListener("submit", search);

//Default Location(target)
let target= "ranchi";

//fetch API and see data in console
const fetchData = async (target) => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=d6b0bf3610e742138bd125626231408&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

//Destructuring API Data
    const {
        current:{ 
            temp_c,
            condition: { text, icon},
        },
        location: { name, localtime },
    } = data;

//Update DOM function Call
    updateDom(temp_c,name,localtime, icon, text, );
    } catch (error) {
        alert("Location Not Found");
        
    }
};

//Fuction for update DOM
function updateDom(temprature, city, date, emoj, weather){
    tempratureField.innerText = temprature;
    cityField.innerText = city;
    dateField.innerText = date;
    emojiField.src = emoj;
    weatherField.innerText = weather;
}

fetchData(target);

//Fuction for  Location Search
function search(e){
    e.preventDefault();

    target = searchField.value;
    console.log(target);
    fetchData(target);
}


//Getting day details
function getDayFullName(num){
    switch(num){
        case 0:
        return "Sunday";

        case 1:
            return "Monday";

        case 2:
        return "Tuesday";
        
        case 3:
        return "Wednesday";

        case 4:
        return "Thrusday";
                
        case 5:
        return "Friday";

        case 6:
        return "Saturday";
    }
}