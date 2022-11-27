
// The program should take the currency which the user currently has and the currency in which they would like to receive, 
// as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) 
// in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint.
//  Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the converm sion was froEUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.


async function getCountryList() {
    try {
        const countryListObject = await fetch('https://v6.exchangerate-api.com/v6/ceb6fb845382ca95175b3a13/codes')
        if (countryListObject.status === 200) {
            const countryListToJson = await countryListObject.json();
            const listObject = countryListToJson.supported_codes;
            listObject.forEach((element) => {
                return createOptionCountry(element)
            })
        } else {
            throw new Error("wronglist")
        }
    } catch (err) {
        console.log(`TheError is:${err}`);
    }
}
getCountryList()


function createOptionCountry(countryDetail) {
    const countryListPositionSelect = ['#countryListFromID', "#countryListToID"]
    countryListPositionSelect.forEach((element) => {
        const selecteCountry = document.querySelector(element);
        const createCountryCodeOption = document.createElement('option');
        createCountryCodeOption.setAttribute("value", countryDetail[0]);
        const createTextTag = document.createElement('p');
        createTextTag.textContent = countryDetail;
        createCountryCodeOption.appendChild(createTextTag);
        selecteCountry.appendChild(createCountryCodeOption);
    })

}


const collectUserRequest = (event) => {
    event.preventDefault();
    const fromCountryEx = event.srcElement.countryListFrom.value;
    const fromAmountEx = event.srcElement.amountFromInput.value;
    const toCountryEx = event.srcElement.countryListTo.value;
    getCurrencies(fromCountryEx, fromAmountEx, toCountryEx)

}
// check the event to be 'change" event 

async function getCurrencies(fromCountryEx, fromAmountEx,toCountryEx) {
    try {
        const convert = await fetch(`https://v6.exchangerate-api.com/v6/ceb6fb845382ca95175b3a13/pair/${fromCountryEx}/${toCountryEx}/${fromAmountEx}`)
        const usdCurrencytoJson = await convert.json()
        const getConversionRate = usdCurrencytoJson.conversion_rate;
        const getFinalAmount = usdCurrencytoJson.conversion_result;
        displayResults(getConversionRate, getFinalAmount, toCountryEx)
    }catch{
        throw new Error("error here")
    }
    }


function displayResults(conversionRate, totalAmount, toCountryEx) {
    const displayresultsToUser = document.querySelector('#results');
    const createDiv = document.createElement('div');
    createDiv.setAttribute('id', 'results_display');
    const createTextRate = document.createTextNode(`Your conversion Rate is: ${conversionRate}`);
    const createTextTotalAmount = document.createTextNode(`Total amount ${totalAmount}${toCountryEx}`);
    createDiv.appendChild(createTextRate);
    createDiv.appendChild(createTextTotalAmount);
    displayresultsToUser.appendChild(createDiv);
}



const invertRate = (event)=>{
    event.preventDefault();
    const originalCountryFrom =document.querySelector('#countryListFromID').value;
    const originalCountryTo =document.querySelector('#countryListToID').value;
    const amount = document.querySelector('#amountFromInput').value
    // getCurrencies(originalCountryTo, originalCountryFrom, amount )
}


const getFormExchange = document.querySelector('#form_exchange')
getFormExchange.addEventListener("submit", collectUserRequest)

const exchangeRateInput = document.querySelector('#changeRateID')
exchangeRateInput.addEventListener("click",invertRate)