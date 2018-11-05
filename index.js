const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    port: 5432, 
    database: "node-todo-app"
});
// example of gtabbing all the rows
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

// example of deleting a row
function deleteById(id){
    return db.result(`delete from todos where id = $1`, [id])
}

deleteById(10)   
    .then(result => {
        console.log(result.rowCount);
    })


// example of updating a row
