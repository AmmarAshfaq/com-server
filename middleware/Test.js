const  web3  = require('./web3');

const address = '0xB169c70A355a8944e0aacE7E1657548C8c5d38ba'; // sql

// const address = '0x83AD6FEcd8e358714920B18B6696Bada174A225E';
// const abi = [
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_SKU",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_productName",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_weight",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_geolocation",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_date",
// 				"type": "string"
// 			}
// 		],
// 		"name": "createAsset",
// 		"outputs": [],
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_AssetSender",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_AssetReceiver",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_NewOwnerName",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_SKU",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_geolocation",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_date",
// 				"type": "string"
// 			}
// 		],
// 		"name": "transferToOwner",
// 		"outputs": [],
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"name": "_mName",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_origin",
// 				"type": "string"
// 			}
// 		],
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "SKU",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "message",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "date",
// 				"type": "string"
// 			}
// 		],
// 		"name": "AssetCreate",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "SKU",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "message",
// 				"type": "string"
// 			}
// 		],
// 		"name": "RejectCreate",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "message",
// 				"type": "string"
// 			}
// 		],
// 		"name": "AssetDoesNotExist",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "ownerAdd",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "message",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "location",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "_SKU",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "date",
// 				"type": "string"
// 			}
// 		],
// 		"name": "AcceptOwnerships",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "ownerAdd",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "message",
// 				"type": "string"
// 			}
// 		],
// 		"name": "RejectOwnerships",
// 		"type": "event"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_skuNumber",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getCurrentOwnerOfAsset",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "getListOfAssetOwnedByManufacturer",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "getManufacturerName",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_SKU",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getPreviousOwnerOfAsset",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "_skuNumber",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getSpecificProduct",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"name": "geolocation",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
// sql 
const abi = [{"constant":true,"inputs":[],"name":"getValues","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"string"},{"name":"_lastName","type":"string"},{"name":"_address","type":"string"},{"name":"_city","type":"string"}],"name":"setValues","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
// const address = '0x752a4deb02fd43253840b0b15689acf09165986b';
// const abi = [{"constant":true,"inputs":[{"name":"_skuNumber","type":"uint256"}],"name":"getSpecificProduct","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_SKU","type":"uint256"}],"name":"getPreviousOwnerOfAsset","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getManufacturerName","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"owner","outputs":[{"name":"name","type":"string"},{"name":"geolocation","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_SKU","type":"uint256"},{"name":"_productName","type":"string"},{"name":"_weight","type":"uint256"},{"name":"_geolocation","type":"string"},{"name":"_date","type":"string"}],"name":"createAsset","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getListOfAssetOwnedByManufacturer","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_skuNumber","type":"uint256"}],"name":"getCurrentOwnerOfAsset","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_AssetSender","type":"address"},{"name":"_AssetReceiver","type":"address"},{"name":"_NewOwnerName","type":"string"},{"name":"_SKU","type":"uint256"},{"name":"_geolocation","type":"string"},{"name":"_date","type":"string"}],"name":"transferToOwner","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_mName","type":"string"},{"name":"_origin","type":"string"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"},{"indexed":false,"name":"SKU","type":"uint256"},{"indexed":false,"name":"message","type":"string"},{"indexed":false,"name":"date","type":"string"}],"name":"AssetCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"},{"indexed":false,"name":"SKU","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"RejectCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"AssetDoesNotExist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ownerAdd","type":"address"},{"indexed":false,"name":"message","type":"string"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"location","type":"string"},{"indexed":false,"name":"_SKU","type":"uint256"},{"indexed":false,"name":"date","type":"string"}],"name":"AcceptOwnerships","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ownerAdd","type":"address"},{"indexed":false,"name":"message","type":"string"}],"name":"RejectOwnerships","type":"event"}]

module.exports = new web3.eth.Contract(abi,address);

