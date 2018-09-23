// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime-search");
var $cityInput = document.querySelector("#city-search");
var $stateInput = document.querySelector("#state-search");
var $countryInput = document.querySelector("#country-search");
var $shapeInput = document.querySelector("#shape-search");
var $searchBtn = document.querySelector("#search");


// Add an event listener to the searchButton, call handleSearchDateButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to dataSet initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {

    // Get the current sighting object and its fields
    var sighting = filteredData[i];
    console.log(sighting)
    var fields = Object.keys(sighting);

    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);

    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}


function handleSearchButtonClick() {
    //Format the user's search by removing leading and trailing whitespace, lowercase the string
    //Set filteredData to an array of all date whose "datetime" matches the filter
    //If true, add the address to the filteredData, otherwise don't add it to filteredData
    var filterDate = $datetimeInput.value.trim();
	  if(filterDate != ""){
		  filteredData = dataSet.filter(function (sighting){
        var sightingDate = sighting.datetime; 
        return sightingDate === filterDate;
		  });
	  };
    var filterState = $stateInput.value.trim().toLowerCase();
    if(filterState != ""){
		  filteredData = dataSet.filter(function (sighting){
        var sightingState = sighting.state; 
        return sightingState === filterState;
		  });
	  };
    var filterCity = $cityInput.value.trim().toLowerCase();
    if(filterCity != ""){
		  filteredData = dataSet.filter(function (sighting){
        var sightingCity = sighting.city; 
        return sightingCity === filterCity;
		  });
	  };
    var filterCountry = $countryInput.value.trim().toLowerCase();
    if(filterCountry != ""){
		  filteredData = dataSet.filter(function (sighting){
        var sightingCountry = sighting.country; 
        return sightingCountry === filterCountry;
		  });
	  };
    var filterShape = $shapeInput.value.trim().toLowerCase();
    if(filterState != ""){
		  filteredData = dataSet.filter(function (sighting){
        var sightingShape = sighting.shape; 
        return sightingShape === filterShape;
		  });
	  };
  
    renderTable();
  };

  //Render the table for the first time on page load  
  renderTable();
  