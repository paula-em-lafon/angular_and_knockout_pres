var viewModelPerson = function () {
    self = this;
    self.firstName= ko.observable("Matt"),
    self.lastName= ko.observable("Daemon"),
    fullName= ko.computed({
        read: function () {
        return self.firstName() + " " + self.lastName();
        },
        write: function(val) {
            var arrName = val.split(' ')
            self.firstName(arrName[0]);
            self.lastName(arrName[1]);
        }
    })
}
ko.applyBindings(viewModelPerson);

console.log(ko.isComputed(fullName));
console.log(ko.isObservable(firstName));
console.log(ko.isWriteableObservable(firstName));
console.log(ko.isWriteableObservable(fullName));