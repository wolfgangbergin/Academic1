'use strict'
class creatRoom {
  constructor(props){

    this.table = `${props} table`;
   
  }
 cleanTable = function(param1){
    console.log(`cleaning ${this.table} using ${param1}`)
  }

}

let josRoom = new creatRoom('jo')
let edsRoom = new creatRoom('ed')

josRoom.cleanTable('soap')
edsRoom.cleanTable('soap')