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

    console.log("created vocab: ", res.insertId);
    result(null, { id: res.insertId, word: newVocab.word, description: newVocab.description });
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
      console.log("found vocab: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Vocab.search = (word, result) => {
  let query = "SELECT * FROM vocab where 1 = 1";

  if (typeof word === 'string') {
    query += ` and word LIKE '%${word}%'`;
  }

  query += ` ORDER BY word`

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("vocabs: ", res);
    result(null, res);
  });
};

Vocab.updateById = (id, vocab, result) => {
  sql.query(
    "UPDATE vocab SET word = ?, description = ? WHERE id = ?",
    [vocab.word, vocab.description, id],
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

      console.log("updated vocab: ", vocab);
      result(null, vocab);
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

    console.log("deleted vocab with id: ", id);
    result(null, res);
  });
};

module.exports = Vocab;