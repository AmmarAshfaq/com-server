var web3 = require('../middleware/web3');
var Test = require('../middleware/Test');
let throwError = require('../middleware/errorMiddleware');

class ContractApi {
    static async fetchBySKU(req, res) {
        console.log(req.body.SKU_NO)
        if (req.body.SKU_NO !== undefined) {
            const product = await Test.methods.getSpecificProduct(req.body.SKU_NO).call();
            console.log(product);
            const onlyValues = Object.values(product);
            console.log(onlyValues);
            if (
                onlyValues[0] !== "" &&
                onlyValues[1] !== "" &&
                onlyValues[2] !== "" &&
                onlyValues[3] !== "" &&
                onlyValues !== ""
            ) {
                // console.log
                return res.json(onlyValues)
            } else {
                return throwError(res, { message: "error not match" })
            }
        } else {
            return throwError(res, { message: "error undefined" })
        }
    }
}

module.exports = ContractApi;