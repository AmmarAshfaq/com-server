var sql = require('mssql/msnodesqlv8');
var web3 = require('../middleware/web3');
var Test = require('../middleware/Test');
var dbConfig = require('../dbonfig/msSQL');
let throwError = require('../middleware/errorMiddleware')


class MsSQLCon {
    static async getData(req, res) {
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
                    return res.json({ sqlData: recordset })

                }


                connection.close();
            })
        })


    }

    static async storeData(req, res) {
        // console.log(values, "jhdajdhjadhjahdjash")
        console.log(req.body, 'daatttttttttttttt')
        let data = JSON.parse(JSON.stringify(req.body.sqlData))
        const account = await web3.eth.getAccounts();
        console.log(data, 'parseeeeeeeeeeeeeeeeeeeeeeeee')
        console.log(account, "jdskfjskjfksdjfksjdkfjsdkfjsdkfjksdjfksdjk")
        try {
            if (data !== null) {
                // console.log(data, "xxxxxxxxxxxxxxxxxxxx")
                data.recordset.map(async (item, ) => {
                    console.log(item)
                    await Test.methods.setValues(item.FirstName, item.LastName, item.Address, item.City)
                        .send({
                            gas: 3000000,
                            from: account[0]
                        });
                    return res.json({ data: 'Data Submit Successfully' })
                })
            }
        } catch (err) {
            return throwError(res, { message: err.message })
        }
    }


    static async getDataFromBlockchain(req, res) {
        const result = await Test.methods.getValues().call()
        console.log(result)
        res.json({ result: result })
    }
}



module.exports = MsSQLCon;