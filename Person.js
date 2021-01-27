class Person {
    constructor(){
      this.index = null;
      //this.distance = 0;
      this.name = null;
      this.answer = null;
    }
  
    getCount(){
      var personCountRef = database.ref('contestantCount');
      personCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "Contestants/Person" + this.index;
      database.ref(contestantIndex).set({
        name: this.name,
        answer:this.answer
      });
    }
  
    static getPersonInfo(){
      var personInfoRef = database.ref('Contestants');
      personInfoRef.on("value",(data)=>{
        allPeople = data.val();
      })
    }






  }//end of js file
  