
export const userService = {
    add,
    findByEmail,
};

const fakeUsers = [{
    code: 'warehouse_1',
    email: 'wh123@com',
    password: '123',
    name: 'Ware House 1'
},
{
    code: 'warehouse_2',
    email: 'wh456@com',
    password: '456',
    name: 'Ware House 2'
}
];

function findByEmail(email) {
    let filteredUsers = fakeUsers.filter(v => v.email === email);
    return filteredUsers.length > 0 ? filteredUsers[0] : null;
}

function add(user) {
    if (user == null || findByEmail(user.email) != null) {
        return false;
    }
    user.code =  "warehouse_" + fakeUsers.length++;
    fakeUsers.push(user);
    return true;
}