let date = "2026-11-27 В переменной date лежит дата в формате";

const regDate = /(\d{4})-(\d{2})-(\d{2})/g;
// date = date.split('-').reverse().join('/');
date = date.replace(regDate, "$3/$2/$1");
console.log(date);

const user = {
    name: "Alex",
    nickName: "Alexx",
    user_id: 12532,
    date: "12-20-1999",
};

function User(name, nickName, date) {
    let self = this;
    this.name = name;
    this.nickName = nickName;
    this.date = date;
    // let age = 0;
    let getId = function () {
        return Math.floor(Math.random() * 10000);
    };
    this.user_id = getId();

    this.chageName = function (name) {
        this.name = name;
    }

    this.getInfo = function () {
        return getFullInfo();
    }

    // function getFullInfo (){
    //     return `${self.name}, ${self.nickName}, ${self.date}`;
    // }

    const getFullInfo = () => {
        return `${this.name}, ${this.nickName}, ${this.date}`;
    }

    // this.getAge = () => {
    //     return age;
    // }

    // this.setAge = (num) => {
    //     if (num > 0 && num < 120) {
    //         age = num
    //     } else {
    //         throw new Error('Неверное значение возраста');
    //     }
    // }

    // this.toString = () => {
    //     return `${this.name}, ${this.nickName}, ${this.getAge()}`;
    // }

    Object.defineProperty(this, 'age', {
        enumerable: true,
        configurable: true,
        get: function () {
            return age + ' лет';
        },
        set: function (num) {
            if (num > 1 && num < 120){
                age = num;
            } else {
                throw new TypeError('Неверное значение');
            }
        }
    })

    User.counter++;
}

User.prototype.toString = function() {
    return `${this.name}, ${this.nickName}, ${this.age}`;
}

User.counter = 0;
User.getCount = function () {
    return User.counter;
}

Array.prototype.hello = () => 'Hello World';

const user2 = new User("Petr", "petro", "2001-09-12");
console.log(user2);

Object.defineProperty(user, 'age', {
    enumerable: true,
    configurable: true,
    // writable: true, // без get/set
    // value: 0, // без get/set
    get: function () {
        return age + 'лет'
    },
    set: function (a) {
        if (a > 0 && a < 120) {
            age = a;
        } else {
            throw new Error('Неверное значение');
        }
    },
});

function Contact (name, age, phone, email) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email;

    this.getInfo = () => {
        return `Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}, Email: ${this.email}`;
    }

    this.toString = () => {
        return `Name: ${this.name}. Age: ${this.age}. Phone: ${this.phone}. Email: ${this.email}. Id: ${this.id}.`
    }
}

function Contacts () {
    this.contacts = [];
    let id = 0;

    /**
     * @param {string} name 
     * @param {number} age 
     * @param {string} phone 
     * @param {string} email 
     */
    this.add = (name, age, phone, email) => {
        if (age < 0 || age > 120) return;
        if (name.length === 0) return;
        if (phone.length === 0) return;
        if (email.length === 0) return;

        let contact = new Contact(name, age, phone, email);
        contact.id = id;
        id++;
        this.contacts.push(contact);
    }

    this.getContacts = () => {
        return this.contacts;
    }

    this.getContact = (id) => {
        let contact = this.contacts.find((item) => item.id === id);
        return contact.getInfo();
    }

    this.removeContact = (id) => {
        this.contacts = this.contacts.filter((item) => item.id !== id);
    }
}

const contactNote = new Contacts();
contactNote.add('Alex1', 22, '236452374', 'sdgfjds@mail.com');
contactNote.add('Alex2', 12, '236452374', 'sdgfjds@mail.com');
contactNote.add('Alex3', 32, '236452374', 'sdgfjds@mail.com');
contactNote.add('Alex4', 42, '236452374', 'sdgfjds@mail.com');
contactNote.add('Alex5', 52, '236452374', 'sdgfjds@mail.com');
contactNote.add('Alex6', 62, '236452374', 'sdgfjds@mail.com');
contactNote.add('Alex7', 72, '236452374', 'sdgfjds@mail.com');

/**
 * map
 * find
 * filter
 * reduce
 * forEach
 * every
 * some
 */