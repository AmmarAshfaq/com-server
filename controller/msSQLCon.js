var sql = require('mssql/msnodesqlv8');
var web3 = require('../middleware/web3');
var Test = require('../middleware/Test');
// var dbConfig = require('../dbonfig/msSQL');
let throwError = require('../middleware/errorMiddleware')
var fs = require('fs');
var pathFile = require('../DbFiles/sqlData.json');
var ipfs = require('../middleware/ipfs');
let dbConfig = {};
class MsSQLCon {
    static connectWithDB(req, res) {
        console.log(req.body,'data comming')
        
        if (req.body.serverName !== "") {
        console.log(req.body,'data comming')

            dbConfig = {
                server: req.body.serverName,
                user: req.body.user,
                pasword: req.body.password,
                database: req.body.database,
                driver: "msnodesqlv8",
                port: 1433,
                options: {
                    encrypt: false,
                    trustedConnection: true,
                    useUTC: true
                }
            }
            return res.json({ connectSuccessfull: 'Connect Successfully' })
        } else {
            return throwError(res, { message: "Please check your provided detail is correct or not" })
        }
    }
    static async getData(req, res) {
        console.log(dbConfig)
        var connection = await new sql.ConnectionPool(dbConfig);
        connection.connect(async function (err) {
            if (err) {
                return throwError(res, { message: err.message })
            };
            var req = await new sql.Request(connection);
            req.query("select * from Persons", async function (err, recordset) {
                if (err) {
                    return throwError(res, { message: err.message })
                }
                else {

                    fs.writeFile('sqlData.json', JSON.stringify(recordset), function (err) {
                        if (err) throw err;
                        console.log('File is created')
                    })
                    return res.json({ sqlData: recordset })

                }


                connection.close();
            })
        })


    }

    static async storeData(req, res) {
        // console.log(values, "jhdajdhjadhjahdjash")
        console.log(req.body, 'daatttttttttttttt')
        // convert file into buffer 
        //////////////////////////////////////////////////  connection with ipfs/////////////////////////

        const buffer = Buffer.from(JSON.stringify(pathFile));
        console.log(buffer)
        try {
            ipfs.files.add(buffer, async (err, result) => {
                if (err) {
                    console.error(err, 'show err')
                    return
                }
                console.log(result[0].hash)
                const account = await web3.eth.getAccounts();
                console.log(account[3])
                let hashFetch = await Test.methods.set(result[0].hash).send({
                    from: account[3]
                })
                console.log(hashFetch, 'b h')
                return res.json({ data: hashFetch, result: 'Data Submit Successfully' })
            })
        } catch (err) {
            return throwError(res, { message: err.message })
        }
        //////////////////////////////////////////////////  connection with ipfs/////////////////////////


        ////////////////////////////////////////////////// sql direct connection /////////////////////////


        ////////////////////////////////////////////////// sql direct connection /////////////////////////
        // let data = JSON.parse(JSON.stringify(req.body.sqlData))
        // const account = await web3.eth.getAccounts();
        // console.log(data, 'parseeeeeeeeeeeeeeeeeeeeeeeee')
        // console.log(account, "jdskfjskjfksdjfksjdkfjsdkfjsdkfjksdjfksdjk")
        // try {
        //     if (data !== null) {
        //         // console.log(data, "xxxxxxxxxxxxxxxxxxxx")
        //         data.recordset.map(async (item, ) => {
        //             console.log(item)
        //             await Test.methods.setValues(item.FirstName, item.LastName, item.Address, item.City)
        //                 .send({
        //                     gas: 3000000,
        //                     from: account[0]
        //                 });
        //             return res.json({ data: 'Data Submit Successfully' })
        //         })
        //     }
        // } catch (err) {
        //     return throwError(res, { message: err.message })
        // }
        ////////////////////////////////////////////////// sql direct connection /////////////////////////

    }


    static async getDataFromBlockchain(req, res) {
        let hashGet = await Test.methods.get().call()
        console.log('ipfsHash', hashGet)
        res.json({ result: hashGet })
    }
}



module.exports = MsSQLCon;