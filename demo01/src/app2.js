/**
 * drone
 */
class Drone {

    constructor() {
        console.log('in drone constructor');
    }
}

let drone = new Drone();

/**
 * drone2
 */
class Drone2 {

    constructor(id) {
        console.log('id: ' + id);
    }
}

let drone2 = new Drone2(123);

/**
 * drone3
 */
class Drone3 {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let drone3 = new Drone3('A123', 'Dragon');
console.log(drone3.id + ' ' + drone3.name);
console.log(drone3['id'] + ' ' + drone3['name']);