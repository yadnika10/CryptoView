// -----Fetch Bitcoin Id from url-----:
const url = new URL(window.location.href);
const coinid = url.searchParams.get("id");
const Details = document.getElementById('details');

async function fetchMoredata(){
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    const Jdata = await data.json()
    console.log(Jdata)

    console.log(Jdata)
    makeCard(Jdata)
}
fetchMoredata()

function makeCard(Data){
    // Image Div::
    const image = document.createElement('div');
    image.classList = `Image`

    image.innerHTML = `
        <img src = "${Data.image.large}">
        <div class = "currencies">
            <p>₹ ${Data.market_data.current_price.inr}</p>
            <p>$ ${Data.market_data.current_price.usd}</p>
            <p>€ ${Data.market_data.current_price.eur}</p>
            <p>£ ${Data.market_data.current_price.gbp}</p>
        </div>
        
    `
    // Text Div::
    const text = document.createElement('div');
    text.classList = `text`

    text.innerHTML = `
        <h2>${Data.name} (${Data.symbol})</h2>
        <p>Description:<br>${Data.description.en}</p>
    `
    Details.appendChild(image);
    Details.appendChild(text)
}