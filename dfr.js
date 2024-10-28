const fs = require('fs'); 
function fileExists(filename) {
  // returns true or false
}
// Task 1
function validNumber(value) { // value can be string or numeric
// returns a boolean 
{ 
  return typeof value === 'number' && isFinite(value); // a value is equal to a number or a realistic value 
} }

// Task 2
function dataDimensions(dataframe) {
  // returns a list [rows (int), cols (int)]
}

// Task 3
function calculateMean(dataset) {
  // returns a float or false
  
}

// Task 4
function findTotal(dataset) {
  // returns float or false
  
} 

// Task 5
function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  
}

// Task 6
function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  
}

// Task 7
function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}

// Task 8 
function calculateMedian(dataset) {
  // return float or false 
  
}

// Task 9
function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}









module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 