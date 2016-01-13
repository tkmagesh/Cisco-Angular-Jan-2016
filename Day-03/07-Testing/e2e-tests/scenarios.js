'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    describe("greeter", function(){
        beforeEach(function(){
            browser.get("index.html#/greet");
        });
        it("Should be able to greet the user", function(){
            var txtBox = element(by.model("name"));
            txtBox.sendKeys("Magesh");

            var greetBtn = element(by.buttonText("Greet"));
            greetBtn.click();

            var div = element(by.binding("message"));
            expect(div.getText()).toBe("Hi Magesh, Have a nice day!");
        });
    });


});
