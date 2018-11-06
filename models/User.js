const db = require('./db');

// =======================================
// CREATE
function add(name) {
    return db.one(`insert into todos (name, completed)
    values
        ($1)
        returning id
    `, [name])
}
// =======================================
// RETRIEVE
function getAll() {
    return db.any(`
    select * from 
        users
        right outer join todos t
        on t.user_id = users.id`)
} 

function getById(id){
    return db.one('select * from users where id= $1', [id]);
}

function getTodosForUser(id) {
    return db.any(`
        select * from todos
            where user_id = $1,
        `, [id]);
}
// =======================================
// UPDATE
function updateName(id, name) {
    return db.result(`update users
        set name=$2
    where id=$1`, [id, name]);
}
// DELETE

function deleteById(id) {
    return db.result(`delete from todos
        where id = $1`, [id]);
}


module.exports = {
    add,
    deleteById,
    getAll,
    getById,
    getTodosForUser,
    updateName
}