interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

class ContactManager {
    private contacts: Contact[] = [];
    private nextId: number = 1;

    addContact(contact: Omit<Contact, 'id'>): void {
        const newContact: Contact = {
            id: this.nextId++,
            name: contact.name.trim(),
            email: contact.email.toLowerCase().trim(),
            phone: contact.phone.replace(/\D/g, '')
        };
        
        const exists = this.contacts.some(c => 
            c.email === newContact.email || c.phone === newContact.phone);
        if (exists) {
            console.error(`Contact with same Email/Phone already exists.`);
            return;
        }
        
        this.contacts.push(newContact);
        console.log(`✓ Contact "${newContact.name}" (ID: ${newContact.id}) added.`);
    }

    viewContacts(): Contact[] {
        return [...this.contacts];
    }

    modifyContact(id: number, updates: Partial<Contact>): void {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            console.error(`❌ Contact ID ${id} not found.`);
            return;
        }
        
        const updated = { ...this.contacts[index], ...updates };
        if (updates.email) updated.email = updates.email.toLowerCase().trim();
        if (updates.phone) updated.phone = updates.phone.replace(/\D/g, '');
        
        const duplicate = this.contacts.find((c, i) => i !== index && 
            (c.email === updated.email || c.phone === updated.phone));
        if (duplicate) {
            console.error(`❌ Duplicate email/phone detected.`);
            return;
        }
        
        this.contacts[index] = updated;
        console.log(`✓ Contact ID ${id} updated successfully.`);
    }

    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            console.error(`❌ Contact ID ${id} not found.`);
            return;
        }
        
        const deleted = this.contacts.splice(index, 1)[0];
        console.log(`✓ Deleted: "${deleted.name}" (ID: ${id})`);
    }
}

const manager = new ContactManager();

manager.addContact({ name: "Alice Johnson", email: "alice@gmail.com", phone: "123-456-7890" });
manager.addContact({ name: "Bob Smith", email: "bob@yahoo.com", phone: "098-765-4321" });

console.log("\n📋 All Contacts:");
console.table(manager.viewContacts());

manager.modifyContact(1, { name: "Alice Brown", phone: "(111) 222-3333" });
manager.deleteContact(2);

console.log("\n📋 Final Contacts:");
console.table(manager.viewContacts());

