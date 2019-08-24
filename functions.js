const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad' }
        user['lastName'] = 'Traversy';
        return user
    },
    reverseString: str => {
        let reversedStr = str.toLowerCase().split('').reverse().join('');
        return reversedStr;
    },
    fetchUsers: (x) => {
        axios.get('https://api.github.com/users')
            .then(response => {
                return response.data[x - 1].login
            })
            .catch(error => console.log('Error!'))
    }
}

module.exports = functions;

