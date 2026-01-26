var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
        this.nextId = 1;
    }
    ContactManager.prototype.addContact = function (contact) {
        var newContact = {
            id: this.nextId++,
            name: contact.name.trim(),
            email: contact.email.toLowerCase().trim(),
            phone: contact.phone.replace(/\D/g, '')
        };
        var exists = this.contacts.some(function (c) {
            return c.email === newContact.email || c.phone === newContact.phone;
        });
        if (exists) {
            console.error("Contact with same Email/Phone already exists.");
            return;
        }
        this.contacts.push(newContact);
        console.log("\u2713 Contact \"".concat(newContact.name, "\" (ID: ").concat(newContact.id, ") added."));
    };
    ContactManager.prototype.viewContacts = function () {
        return __spreadArray([], this.contacts, true);
    };
    ContactManager.prototype.modifyContact = function (id, updates) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.error("\u274C Contact ID ".concat(id, " not found."));
            return;
        }
        var updated = __assign(__assign({}, this.contacts[index]), updates);
        if (updates.email)
            updated.email = updates.email.toLowerCase().trim();
        if (updates.phone)
            updated.phone = updates.phone.replace(/\D/g, '');
        var duplicate = this.contacts.find(function (c, i) { return i !== index &&
            (c.email === updated.email || c.phone === updated.phone); });
        if (duplicate) {
            console.error("\u274C Duplicate email/phone detected.");
            return;
        }
        this.contacts[index] = updated;
        console.log("\u2713 Contact ID ".concat(id, " updated successfully."));
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.error("\u274C Contact ID ".concat(id, " not found."));
            return;
        }
        var deleted = this.contacts.splice(index, 1)[0];
        console.log("\u2713 Deleted: \"".concat(deleted.name, "\" (ID: ").concat(id, ")"));
    };
    return ContactManager;
}());
var manager = new ContactManager();
manager.addContact({ name: "Alice Johnson", email: "alice@gmail.com", phone: "123-456-7890" });
manager.addContact({ name: "Bob Smith", email: "bob@yahoo.com", phone: "098-765-4321" });
console.log("\n📋 All Contacts:");
console.table(manager.viewContacts());
manager.modifyContact(1, { name: "Alice Brown", phone: "(111) 222-3333" });
manager.deleteContact(2);
console.log("\n📋 Final Contacts:");
console.table(manager.viewContacts());
