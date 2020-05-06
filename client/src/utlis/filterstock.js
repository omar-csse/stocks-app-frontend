

const isType = (type, val) => !!(val.constructor && val.constructor.name.toLowerCase() === type.toLowerCase());


const filterstock = (data) => {

    let stocks = isType("array", data) ? data : [data]

    const filteredStocks = stocks.map(stock => {
        delete stock.symbol;
        delete stock.name;
        stock.timestamp = stock.timestamp.split('T')[0]
        return stock
    });
    
    return filteredStocks
}

const prepChartData = (data) => {

    let stocks = isType("array", data) ? data : [data]

    let config = {}
    let labels = []

    const filteredData = stocks.map(stock => {
        let time = stock.timestamp.split('T')[0]
        labels.unshift(time)
        return stock.close
    });

    config.labels = labels;
    config.datasets = [{
        label: 'Closing Price',
        fill: false,
        lineTension: 0,
        data: filteredData.reverse(),
        borderColor: ['#e535ab'],
    }]

    return config
}


export { filterstock, prepChartData }