// Write your solution in this file!
var customerName = 'bob';  
  
function upperCaseCustomerName() {  
  return customerName.toUpperCase();  
}  
  
function setBestCustomer() {  
  bestCustomer = 'not bob';  
}  
  
function overwriteBestCustomer() {  
  bestCustomer = 'aybe bob';  
}  
  
const leastFavoriteCustomer = 'alice';  
  
function changeLeastFavoriteCustomer() {  
  leastFavoriteCustomer = 'charlie'; // This will throw an error  
}  

