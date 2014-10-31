describe("Module: Disconnect", function () {

    var scope, element, compile, clock;
    beforeEach(module("BrowserSync"));
    beforeEach(module("test.templates"));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope;
        compile = $compile;
        clock = sinon.useFakeTimers();
    }));

    after(function () {
        clock.restore();
    });

    describe("When using the disconnect element", function () {

        var socket, rootScope, isolatedScope;

        beforeEach(inject(function (Socket, $rootScope) {

            socket = Socket;
            rootScope = $rootScope;

            // Pass in the user object to the directive
            element = angular.element("<disconnect-elem></disconnect-elem>");

            // Compile & Digest as normal
            compile(element)(scope);
            scope.$digest();
            isolatedScope = scope.$$childHead;
        }));
        it("has ui properties", function () {
            assert.isDefined(isolatedScope.ui.visible);
            assert.isDefined(isolatedScope.ui.heading);
            assert.isDefined(isolatedScope.ui.message);
        });
        it("should have the correct heading", function () {
            assert.equal(element.find("h1").text(), "BrowserSync");
        });
        it("should have the correct message", function () {
            assert.equal(element.find("h2").text(), "Disconnected");
        });
    });
});