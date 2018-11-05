const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    port: 5432, 
    database: "node-todo-app"
});
// example of grabbing all the rows
function getAll() {
    return db.any('select * from todos')
        
}
// example of grabbing one row
function getById(id){
    return db.one(`select * from todos where id = $1`, [id])
        .catch(err => {
        // got no-ting
            return {
                name: 'no todo found'
            };
        })
}

// getById(2)
//     .then(result => {
//         console.log(result);
//     })

// getById(200)
//     .then(result => {
//         console.log(result);
//     })

// getAll()
//     .then(results => {
//         console.log(results);
//         console.log('yep thats all of em')
//     })
    

// example of adding a row
function add(name, completed) {
    return db.one(`insert into todos (name, completed)
    values
        ($1, $2)
        returning id
    `, [name, completed])
}

// add('crack open a cold one', false)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err=> {
//         console.log(err);
//     })

// DELETE
// example of deleting a row
function deleteById(id){
    return db.result(`delete from todos where id = $1`, [id])
}

// deleteById(10)   
//     .then(result => {
//         console.log(result.rowCount);
//     })

// UPDATE
function updateName(id, name) {
    return db.result(`update todos
        set name=$2
    where id=$1`, [id, name]);
}
// updateName(2, 'buy new soul')
//     .then(result => {
//         console.log(result);
//     })

function updateCompleted(id, didComplete) {
    return db.result(`update todos 
        set completed=$2
    where id=$1`, [id, didComplete])
    
}

// example of updating a row
function markCompleted(id) {
    //return updateCompleted(id, false);
    return db.result(`update todos 
	                    set completed=$2
	                where id=$1`, [id, true]);
}

function markPending(id) {
    return updateCompleted(id, false);
    // return db.result(`update todos 
    //     set completed=$2
    // where id=$1`, [id, didComplete])

}

// markCompleted(1)
//     .then(result => {
//         console.log(result);
//     });
