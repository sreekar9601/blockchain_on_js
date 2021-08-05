const SHA256 = require('crypto-js/sha256');

class myBlock{
    constructor(index, timestamp, data, preceedingHash=" "){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.preceedingHash = preceedingHash;
        this.hash = this.makeHash();
    }

     makeHash(){

        return SHA256(this.index + this.timestamp + this.preceedingHash +JSON.stringify(this.data)).toString();

    }

}
class mainChain{

    constructor()
    {
        this.blockchain = [this.startGenesisBlock()];

    }

    startGenesisBlock(){
        return new myBlock(0,"1/1/2020","This is the first block", "0");
    }

    latestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }

    addNewBlock(newBlock){
        newBlock.preceedingHash = this.latestBlock().hash;
        newBlock.hash = newBlock.makeHash();
        this.blockchain.push(newBlock);
    }

}

//Create new blockchain here

let sreekchain = new mainChain();
sreekchain.addNewBlock(new myBlock(1, "01/06/2020", {sender: "Sreek", recipient: "Vitalik", quantity: 50}));
sreekchain.addNewBlock(new myBlock(2, "5/8/2021", {sender:"vaibhav", recipient:"gaurav", quantity:12}));
console.log(JSON.stringify(sreekchain,null,4));