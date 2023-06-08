// // defining observable array
// var ListModel = ko.observableArray();

// // Add some values
// observableArr.push('Matt');

// // This observable array initially contains two objects
// var techArr = ko.observableArray([
//     {name: "John", job: "Sotware Developer"},
//     {name: "Matt", job: "Web Developer"}
// ])

// //Reading information from an observableArray
// alert('The length of the array is ' + techArr().length);
// alert('The first element is ' + techArr()[0].name);

// //Properties and Methods of observableArray
// //indexOf
// //pop,push,shift,unshift,reverse,sort,splice

var ListModel = function (items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function () {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd());
            this.itemToAdd("");
        }
    }.bind(this);
};

ko.applyBindings(new ListModel(["Master JavaScript", "Master jQuery", "Master KnockoutJS"]));