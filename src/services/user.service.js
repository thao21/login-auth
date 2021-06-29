
export const userService = {
    add,
    findByEmail,
};

const fakeUsers = [{
    code: 'warehouse_1',
    email: 'wh1@dosoftpro.com',
    password: '11111',
    name: 'Ware House 1'
},
{
    code: 'warehouse_2',
    email: 'wh2@dosoftpro.com',
    password: '22222',
    name: 'Ware House 2'
}
];
/**
 * Return user if found othewise NULL
 * 
 * @param {*} email 
 * @returns 
 */
function findByEmail(email) {
    let users = fakeUsers.filter(v => v.email === email);
    return users.length > 0 ? users[0] : null;
}

/**
 * Return NULL if user's email already exists
 * 
 * @param {*} user 
 * @returns 
 */
function add(user) {
    try {
        if (findByEmail(user.email) != null) {
            return null;
        }
        user.code = "warehouse_" + fakeUsers.length++;
        fakeUsers.push(user);
        return user;
    } catch (err) {
        console.log(err);
        return null;
    }

}