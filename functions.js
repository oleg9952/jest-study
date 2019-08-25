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
    },
    readUsers: () => {
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', './Users.json');
        // xhr.onload = function () {
        //     if(this.status == 200) {
        //         let data = JSON.parse(this.responseText);
        //         data.forEach(item => {
        //             console.log(item.name)
        //         })
        //     }
        // }
        // xhr.send();
        
        axios.get('./Users.json')
            .then(resp => {
                resp.data.forEach(item => {
                    console.log(item.name);
                })
            })
            .catch(error => 'Error!')
    }
}

functions.readUsers();

module.exports = functions;

