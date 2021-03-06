const db = require('./db');

function getAll() {
    return db.any('select * from todos')
        
}

function getById(id){
    return db.one(`select * from todos where id = $1`, [id])
        .catch(err => {
        // got no-ting
            return {
                name: 'no todo found'
            };
        })
}


function add(name, completed) {
    return db.one(`insert into todos (name, completed)
    values
        ($1, $2)
        returning id
    `, [name, completed])
}

function deleteById(id){
    return db.result(`delete from todos where id = $1`, [id])
}

function assignToUser(todo, userId) {
    return db.result(`
        update todos
            set user_Id = $2
        where id = $1`, [id, name]);
}

function updateName(id, name) {
    return db.result(`update todos
        set name=$2
    where id=$1`, [id, name]);
}

function updateCompleted(id, didComplete) {
    return db.result(`update todos 
        set completed=$2
    where id=$1`, [id, didComplete])
    
}

function markCompleted(id) {
    //return updateCompleted(id, false);
    return db.result(`update todos 
	                    set completed=$2
	                where id=$1`, [id, true]);
}

function markPending(id) {
    return updateCompleted(id, false);

}

module.exports = {
    add,
    assignToUser,
    getAll,
    getById,
    updateName,
    markCompleted,
    markPending,
    deleteById
};