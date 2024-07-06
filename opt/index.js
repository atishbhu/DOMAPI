const dayArray = [
  "Monday",
  "Tueseday",
  "Wednesday",
  "Thurseday",
  "Friday",
  "Saturday",
  "Sunday",
];

const tempRef = document.querySelector("#temp-container");
const locationRef = document.querySelector("#location-container");
const imageRef = document.querySelector("#image-container");
const dateRef = document.querySelector("#date-container");

function renderWheatherData(whetheData) {
  tempRef.innerText = whetheData.current.temp_c;
  locationRef.innerText = whetheData.location.name;
  imageRef.src = whetheData.current.condition.icon;
  dateRef.innerText = getTimeInFormate(
    whetheData.current.last_updated,
    whetheData.current.is_day
  );
}

function getTimeInFormate(date, day) {
  const dateArray = date.split(" ");
  const result = dateArray[1] + " " + dayArray[day] + " " + dateArray[0];
  return result;
}

const fetchWheatherData = (location) => {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => renderWheatherData(res))
    .catch((err) => console.error(err));
};

const formRef = document.querySelector("#form");
formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputRef = document.querySelector("#location-input");
  const inputValue = inputRef.value;
  fetchWheatherData(inputValue);
});
