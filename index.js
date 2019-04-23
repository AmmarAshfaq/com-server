const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
let server = require('http').Server(app);

var web3 = require('./middleware/web3');
var Test = require('./middleware/Test');




const dbConfig = require('./dbonfig/msSQL');
let ContractApi = require('./controller/ContractApi')
let SQLConn = require('./controller/msSQLCon');
app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());



async function getData() {

}
// fetch SQL DATA
app.get('/fetchSQLData', (req, res) => {
    // console.log(req)
    // res.send('Hello')
    SQLConn.getData(req, res)
})

// store Data in Blockchain
app.post('/pushSQLData', (req, res) => {
    // console.log(JSON.parse(req.body))
    SQLConn.storeData(req, res);
})


// fetch blockchain data
app.get('/getBlockchainData', (req, res) => {

    SQLConn.getDataFromBlockchain(req, res);
})

app.post('/fetchAssetSearch', (req, res) => {
    console.log(req.body)
    ContractApi.fetchBySKU(req, res);
})
server.listen(app.get('port'), () => {
    console.log('server is running on port 8080');
});
// , '10.0.0.186' || 'localhost'