// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime-search");
var $cityInput = document.querySelector("#city-search");
var $stateInput = document.querySelector("#state-search");
var $countryInput = document.querySelector("#country-search");
var $shapeInput = document.querySelector("#shape-search");
var $searchDateBtn = document.querySelector("#dateSearchBtn");
var $searchCityBtn = document.querySelector("#citySearchBtn");
var $searchStateBtn = document.querySelector("#stateSearchBtn");
var $searchCountryBtn = document.querySelector("#countrySearchBtn");
var $searchShapeBtn = document.querySelector("#shapeSearchBtn");

// Add an event listener to the searchButton, call handleSearchDateButtonClick when clicked
$searchDateBtn.addEventListener("click", handleSearchDateButtonClick);
$searchCityBtn.addEventListener("click", handleSearchCityButtonClick);
$searchStateBtn.addEventListener("click", handleSearchStateButtonClick);
$searchCountryBtn.addEventListener("click", handleSearchCountryButtonClick);
$searchShapeBtn.addEventListener("click", handleSearchShapeButtonClick);

// Set filteredData to dataSet initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderDateTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get the current date object and its fields
    var date = filteredData[i];
    var fields = Object.keys(date);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the date object, create a new cell at set its inner text to be the current value at the current date's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = date[field];
    }
  }
}

function renderCityTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var cityd = filteredData[i];
    var fields = Object.keys(cityd);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = cityd[field];
    }
  }
}

function renderStateTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var stated = filteredData[i];
    var fields = Object.keys(stated);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = stated[field];
    }
  }
}

function renderCountryTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var countryd = filteredData[i];
    var fields = Object.keys(countryd);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = countryd[field];
    }
  }
}

function renderShapeTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var shaped = filteredData[i];
    var fields = Object.keys(shaped);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = shaped[field];
    }
  }
}

function handleSearchDateButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $datetimeInput.value.trim();
  
    // Set filteredData to an array of all date whose "date time" matches the filter
    filteredData = dataSet.filter(function(date) {
      var dateData = date.datetime.toLowerCase();
  
      // If true, add the address to the filteredData, otherwise don't add it to filteredData
      return dateData === filterDate;
    });
    renderDateTable();
  }
// Render the table for the first time on page load
renderDateTable();

function handleSearchCityButtonClick() {
  var filterCity = $cityInput.value.trim();
  filteredData = dataSet.filter(function(cityd) {
    var cityData = cityd.city.toLowerCase();
    return cityData === filterCity;
  });
  renderCityTable();
}
renderCityTable();

function handleSearchStateButtonClick() {
  var filterState = $stateInput.value.trim();
  filteredData = dataSet.filter(function(stated) {
    var stateData = stated.state.toLowerCase();
    return stateData === filterState;
  });
  renderStateTable();
}
renderStateTable();

function handleSearchCountryButtonClick() {
  var filterCountry = $countryInput.value.trim();
  filteredData = dataSet.filter(function(countryd) {
    var countryData = countryd.country.toLowerCase();
    return countryData === filterCountry;
  });
  renderCountryTable();
}
renderCountryTable();

function handleSearchShapeButtonClick() {
  var filterShape = $shapeInput.value.trim();
  filteredData = dataSet.filter(function(shaped) {
    var shapeData = shaped.shape.toLowerCase();
    return shapeData === filterShape;
  });
  renderShapeTable();
}
renderShapeTable();