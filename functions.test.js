const functions = require('./functions');

// toBe
test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false


// toBeNull
test('should be null', () => {
    expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

// toBeFalsy
test('User should be Brad Travesy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    })
})

// less than and greater than
// an example of a function inside of the test
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
    // expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// regular expressions
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})


// Arrays
test('admin should be in username', () => {
    usernames = ['jogn', 'alex', 'admin', 'robert'];
    expect(usernames).toContain('admin');
})

// Reverse string
test('reverse string', () => {
    expect(functions.reverseString('John')).toEqual('nhoj');
})

// Fetch users with AXIOS || ASYNC data
test('User login should match Mojombo', () => {
    expect(functions.fetchUsers()).toBeDefined()
})
