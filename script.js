const fromAmountElement = document.querySelector('.amount');
const convertedAmounElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container')

const countries = [
    { code : "USD" , name : "united State doller"},
    {code : "INR" , name : "Indian Rupees"}
];

// showing country to select tag

countries.forEach(country =>{
    const option1 = document.createElement('option');
    option1.value = option2.value =  country.code;
    option1.textContent = '${country.code} (${country.name})';
    fromCurrencyElement.appendChild(option1);
    
    const option2 = document.createElement("option2");
    option2.textContent = '${country.code} (${country.name})';
    toCurrencyElement.appendChild(option2);

    // setting default value of select tag
    fromCurrencyElement.value = "USD";
    toCurrencyElement.value  = "INR";
    
});

 // Function to get exchange rate using API
 const getexchangeRate = async() =>{
    const amount = parseFloat(fromAmountElement.value);
    const toCurrency = toCurrencyElement.value;
    resultElement.textContent = "Fetch exchange retes.....";

    try{
    // fetch data from API
    
    const response  = await fetch('https://www.exchangerate-api.com/${fromCurrency}');
    // this fetch function return a promise
    
    const data = await response.json();
    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate);
    convertedAmount.valueOf = convertedAmount;
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} $(toCurrency}`
    }
    catch (error){
        
    }
}
getexchangeRate();

// fetching exchnage rate when user inputs the amount
fromAmountElement.addEventListener('input' , getexchangeRate);
// fetching exchnage rate when user change currency
fromAmountElement.addEventListener('change' , getexchangeRate);
toCurrencyElement.addEventListener('change' , getexchangeRate);
window.addEventListener('load' , getexchangeRate);