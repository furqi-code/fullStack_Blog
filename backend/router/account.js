const express = require("express");
const router = express.Router();
const { executeQuery } = require("../mySqldb/Query");

router.get("/profile", async (req, res) => {
  try {
    const user_id = req.user_id;
    const [ dbUser ] = await executeQuery(`SELECT * FROM users WHERE user_id = ?`, [user_id]);
    res.status(200).send({  
        info: dbUser
    })
  } catch (err) {
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

router.patch("/profile", async (req, res) => {
  try {
    const user_id = req.user_id;
    const { email, username, location, bio } = req.body;
    if(!email){
        res.status(409).send({message: "Email is compulsory"}) // to find the user in db
    }
    const [dbUser] = await executeQuery(`SELECT * FROM users WHERE email = ?`, [email]);
    if(!dbUser){
        res.status(401).send({message: "Incorrect Email"});
    }
    await executeQuery(`update users set username = ?, location = ?, bio = ? where user_id = ?`,
        [username, location, bio, user_id])
    res.status(200).send({  
        message: "User profile updated"
    })
  } catch (err) {
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
