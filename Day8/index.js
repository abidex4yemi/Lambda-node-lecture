const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const app = express();
app.use(express.json());

function getUsersInnerJoinEmails() {
  return db("users")
    .select("users.id", "fname", "lname", "email")
    .join("emails", "users.id", "emails.user_id");
}

function getEmptyCourses() {

}

function getLazyStudents() {

}

app.get('/bench', async (req, res, next) => {
  try {
    const result = await getUsersInnerJoinEmails();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post('/users', async (req, res, next) => {
  try {
    const { fname, lname, email } = req.body;
    const result = await addUserWithEmail({
      fname, lname, email
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.use((err, req, res, next) => { // eslint-disable-line
  console.error('ERROR:', err);
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(4000, () => {
  console.log('listening on 4000');
});

// transaction
function addUserWithEmail({ fname, lname, email }) {
  return db.transaction(trx => {
    return trx('users')
      .insert({ fname, lname })
      .then(([id]) => {
        return trx('emails')
          .insert({ email, user_id: id });
      });
  });
}