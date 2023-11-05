const SearchCoin = document.getElementById('SearchBitCoin')
const SearchButton = document.getElementById('SearchBtn')
const Container = document.getElementById('container');

SearchButton.addEventListener('click',()=>{
    Container.textContent = '';
    fetchData()
})

async function fetchData(){
    let value = SearchCoin.value
    const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${value}`);
    const Jdata = await data.json()

    let Id = 1;
    console.log(Jdata)

    loopData = Jdata.coins
    loopData.forEach(element => {
        BitCards(element,Id);
        Id++;
    });
    
}

function BitCards(Data,Id){

    const Cards = document.createElement('div');
    Cards.classList = `cards`

    //Left Side::
    const Left = document.createElement('div');
    Left.classList = `left`

    Left.innerHTML = `
        <p>${Id}</p>
        <img src = "${Data.large}">
        <h4>${Data.api_symbol}</h4>
        <p>${Data.symbol}</p>
    `
    const inner = document.createElement('div');
    inner.classList = `inner`

    const MoreInfo = document.createElement('a');
    MoreInfo.innerText = "More Info";
    MoreInfo.href = "./more_data.html?id=" + Data.api_symbol;
    MoreInfo.target = "_blank"

    inner.appendChild(MoreInfo)
    Cards.appendChild(Left)
    Cards.appendChild(inner)
    Container.appendChild(Cards)
}

