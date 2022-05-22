const  companies= [
    {name: "Company one", category: "Finance", start: 1981, end: 2004}, 
    {name: "Company two", category: "Retail", start: 1992, end: 2008}, 
    {name: "Company three", category: "Auto", start: 1999, end: 2007}, 
    {name: "Company four", category: "Retail", start: 1989, end: 2010}, 
    {name: "Company five", category: "Technology", start: 2009, end: 2014}, 
    {name: "Company six", category: "Finance", start: 1987, end: 2010}, 
    {name: "Company seven", category: "Auto", start: 1986, end: 1996}, 
    {name: "Company eight", category: "Technology", start: 2011, end: 2016}, 
    {name: "Company nine", category: "Retail", start: 1981, end: 1989}, 
]; 

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]; 
//forEach- a nicer/more elegant way to loop through data

// for (let i =0; i<companies.length; i++){
//     console.log(companies[i]); 
// }

// companies.forEach(function(company) {
//     console.log(company)
// }); 
//filter

// let canDrink = []; 
// for (let i =0; i < ages.length;i++){
//     if (ages[i] >=21){
//         canDrink.push(ages[i]); 
//     }
// }
// console.log(canDrink); 

// const canDrink = ages.filter(function(age){
//     if(age >=21){
//         return true; 
//     }
// }); 
// console.log(canDrink); 
// const canDrink = ages.filter(age => age >= 21); 
// console.log(canDrink); 

// Filter retail companies
// const retailCompanies = companies.filter(function(company){
//     if (company.category === 'Retail'){
//         return true; 
//     }
// }); 
// console.log(retailCompanies); 

// const retailCompanies = companies.filter(company => company.category === 'Retail'); 
//Get companies that started in the eighties
// const retailCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

//Get companies that lasted at least 10yrs
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10)); 
// console.log(lastedTenYears); 

//map- can create new arrays from a current array
//Create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames); 

//return test of array
// const test = companies.map(function(company){
//     return 1;
// });
// console.log(test); 
// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap); 
// const testMap = companies.map(company=>`${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap); 

// const agesSquare = ages.map(age => Math.sqrt(age)); 
// const ages2X = ages.map(age => age * 2); 
// console.log(ages2X); 

//Chaining .map()
// const agesSquare2X = ages 
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2); 
// console.log(agesSquare2X); 

//sort-  takes 2 values and compares them 
// const sortedCompanies =  companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1; 
//     }else {
//         return -1; 
//     }
// }); 
// console.log(sortedCompanies); //sorted by the start year

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies); 

// Sort ages 
// const sortAges = ages.sort((a, b) => a -b); //ascending order
// const sortAges = ages.sort((a, b) => b -a); //decending order
// console.log(sortAges); 

//reduce

// let ageSum = 0; 
// for(let i = 0; i<ages.length; i++) {
//     ageSum += ages[i]; 
// } 

// const ageSum = ages.reduce(function(total, age){
//     return total + age; 
// }, 0); 

// const ageSum = ages.reduce((total, age)=>total + age, 0); 
// console.log(ageSum); 

//Get total years for all companies 
// const totalYears = companies.reduce(function (total, company){
//     return total + (company.end - company.start)
// }, 0); 
// const totalYears = companies.reduce((total, company)=>total + (company.end - company.start), 0); 
// console.log(totalYears); 

//Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b)=> a-b )
.reduce((total, age) => total + age, 0); 

console.log(combined); 
