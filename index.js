const Todo = require('./models/Todo');
const User = require('./models/User');

Todo.getAll()
    .then(results => {
        console.log(results);
        console.log('yep that all of dems')
    })
// example of grabbing all the rows

// example of grabbing one row


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


// add('crack open a cold one', false)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err=> {
//         console.log(err);
//     })

// DELETE
// example of deleting a row


// deleteById(10)   
//     .then(result => {
//         console.log(result.rowCount);
//     })

// UPDATE

// updateName(2, 'buy new soul')
//     .then(result => {
//         console.log(result);
//     })



// example of updating a row


// Todo.markCompleted(1)
//     .then(result => {
//         console.log(result);
//     });
