async function fetchData(){
    const data = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
    const Jdata = await data.json()

    const Data = Jdata.coins
    Data.forEach(element => {
        console.log(element)
        fetchMoredata(element,element.item.id)
    });
    
}
fetchData();

const slide_cont = document.getElementById('flex-slide-cont')

async function fetchMoredata(data,coinid){
    const Info = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    const Jdata = await Info.json()
    
   
    console.log(Jdata)

    const flex_side = document.createElement('div');
    flex_side.classList = `flex-slide`

    flex_side.innerHTML = `
        <img src = "${data.item.small}">
        <h2>${data.item.name} (${data.item.symbol})</h2>
        <p>₹ ${Jdata.market_data.current_price.inr}</p>
    `

    flex_side.addEventListener('click',()=>{
        const url = "./more_data.html?id=" + data.item.id;
        window.open(url,'_blank')
    })
    slide_cont.appendChild(flex_side);
}
