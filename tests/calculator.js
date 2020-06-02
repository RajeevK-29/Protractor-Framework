let action = require('../pages/homepage');

describe('calculator ', function(){

     it ('addition', function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
          action.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
          action.enterfirstnumber('4');
        //element(by.model('second')).sendKeys('2');
          action.entersecondnumber('5')
        //element(by.css('[ng-click="doAddition()"]')).click();
          action.gobutton();
        // let result= element(by.cssContainingText('.ng-binding' ,'4'));
        // expect(result.getText()).toEqual('9');
         action.verify('9')

        browser.sleep(5000);

     });

     

});