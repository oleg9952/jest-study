const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad' }
        user['lastName'] = 'Traversy';
        return user
    },
    fetchUsers: () => {
        let usersArray = [];
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users', true);
        xhr.onload() = function() {
            if(this.status == 200) {
                let users = JSON.parse(this.responseText);
                users.forEach(item => {
                    usersArray.push(item.login);
                })
                console.log(usersArray);
            }
        }
        xhr.send();
    }
}

functions.fetchUsers();

module.exports = functions;

