async function newsFeed(){
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/`)
    const Jdata = await data.json();

    setInterval(ChartData(Jdata), 2000);
        
}
newsFeed();

function ChartData(data){
    
    const labels = data.map((element) => element.id)
    const chart_values = data.map((element) => element.market_data.current_price.inr)

    const ctx = document.getElementById('MyChart').getContext('2d')
    const values = {
        labels: labels,
        datasets:[{
                label: 'Current Price of crypto currency in inr',
                data:chart_values,
                backgroundColor: "gold",
                borderColor: "red",
                fill: true,
            }
        ],
    }
    console.log(labels)

    new Chart(ctx,{
        type: 'line',
        data: values,
        options:{
            scales: {
                x:{
                    title: {
                        display: true,
                        text: 'Crypto Curreny Names', 
                    },
                },
                y:{
                    min:0,
                    max:3000000,
                    stepSize: 10,
                    title: {
                        display: true,
                        text: 'Current Price',
                    },
                }
            }
        }
    })

}
