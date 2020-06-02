let homepage= function(){

    let first_textbox=element(by.model('first'));
    let second_textbox=element(by.model('second'));
    let gobutton=element(by.css('[ng-click="doAddition()"]'));

    
    this.get= function(URL){
       browser.get(URL)
    };
    
    this.enterfirstnumber=function(first){

    
       first_textbox.sendKeys(first);

    };

    this.entersecondnumber=function(second){

        second_textbox.sendKeys(second);
    };

    this.gobutton= function(){
        gobutton.click();
    };
      
       this.verify= function (result){

      let output= element(by.cssContainingText('.ng-binding' ,result));
        expect(output.getText()).toEqual(result);
       };
};

module.exports = new homepage();