class Counter {
    static userCount = 0;

    static addUser() {
        this.userCount++;
    }

    static removeUser() {
        this.userCount--;
    }

    static getCount() {
        return this.userCount;
    }
}

module.exports = Counter;