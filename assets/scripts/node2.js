'use strict'


this.firstName = 'kim'


this.cleanTable = function(param1){
    let banana = this
    
    function wolfFunc(){
        return `1 cleaning ${banana.firstName}'s table with ${param1}`
    }

   return wolfFunc()
}

this.cleanTable.jobob = function(param1){
    console.log(this)

    return `1 cleaning ${this.firstName}'s table with ${param1}` 
}

 console.log(this.cleanTable.jobob.call(this, 'soap'))
//console.log(this.cleanTable('soap'))

