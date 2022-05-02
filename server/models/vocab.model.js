const sql = require("./db.js");

// constructor
const Vocab = function(vocab) {
  this.id = vocab.id;
  this.word = vocab.word;
  this.description = vocab.description;
};

Vocab.create = (newVocab, result) => {
  sql.query("INSERT INTO vocab SET ?", newVocab, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Vocab.findById = (id, result) => {
  sql.query(`SELECT * FROM vocab WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Vocab.search = (word, result) => {
  let query = "SELECT * FROM vocab where 1 = 1";

  if (word) {
    query += ` WHERE title LIKE '%${word}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};

Vocab.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE vocab SET word = ?, description = ? WHERE id = ?",
    [tutorial.word, tutorial.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Vocab.remove = (id, result) => {
  sql.query("DELETE FROM vocab WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

module.exports = Vocab;