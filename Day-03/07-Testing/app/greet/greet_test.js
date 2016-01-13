describe("Greet Module", function(){

    beforeEach(module("myApp.greet"));

    describe("Greet Controller", function(){
        it("Should initialize name with empty string", inject(function($controller){
            var dummyScope = {};

            $controller("greetController", {$scope : dummyScope});

            expect(dummyScope.name).toBe('');
        }))
        it("Should initialize message with empty string", inject(function($controller){
            var dummyScope = {};

            $controller("greetController", {$scope : dummyScope});

            expect(dummyScope.message).toBe('');
        }))
        it("Should populate the message when greeted", inject(function($controller){
            var dummyScope = {};
            var expectedMessage  = 'Hi Magesh, Have a nice day!';
            $controller("greetController", {$scope : dummyScope});

            dummyScope.name = 'Magesh';
            dummyScope.greet();

            expect(dummyScope.message).toBe(expectedMessage);
        }))
    })
})
