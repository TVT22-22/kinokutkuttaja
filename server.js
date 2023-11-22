
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.listen(8001, () => {
    console.log("Listening on port 8001")
});

app.get("/login", (req, res) => {
    const customers = [
        {userNick: "John", email: 30, password: "New York", userID: 0},
        { userNick: "Eeva", email: 30, password: "New York", userID: 0},
        { userNick: "Mikko", email: 30, password: "New York", userID: 0},
    ];
    console.log(customers);
    res.json(customers);
});

app.get("/group", (req, res) => {
    const group = [
        {userID: "John", groupID: 30, password: "New York"},
        { userID: "Eeva", groupID: 30, password: "New York"},
        { userID: "Mikko", groupID: 30, password: "New York"},
    ];
    console.log(group);
    res.json(group);
});

app.get("/reviews", (req, res) => {
    const review = [
        {userNick: "John", reviewID: 30},
        { userNick: "Eeva", reviewID: 30},
        { userNick: "Mikko", reviewID: 30},
    ];
    console.log(review);
    res.json(review);
});

/////////logini juttua, lisää onko samanniminen käyttäjä olemassa
app.post("/register", async (req, res) => {

     try {
      const { userNick, password } = req.body;
  
      if (!(userNick && password)) {
        res.status(400).send("Täytä kaikki tarvittavat tiedot");
      }
  
      const oldUser = await User.findOne({ userNick });
  
      if (oldUser) {
        return res.status(409).send("Käyttäjä on jo rekisteröitynyt, ole hyvä ja kirjaudu.");
      }
  
      encryptedUserPassword = await bcrypt.hash(password, 10);
  
      // tehdään user
      const user = await User.create({
        user_nick: userNick,
        email: email.toLowerCase(), 
        password: encryptedUserPassword,
      });
  
      // tehääntoken
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );
      user.token = token;
  
      // palautetaan uusi käyttäjä
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  });
  

  app.post("/login", async (req, res) => {

     try {
      // käyttäjän inputti
      const { userNick, password } = req.body;
  
      // tarkasta käyttäjän tiedot
      if (!(userNick && password)) {
        res.status(400).send("Täytä kaikki tiedot");
      }
      // katso löytyykö käyttjäjä tiedostoista
      const user = await User.findOne({ userNick });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // tekee tokenin
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "5h",
          }
        );
  
        // tallentaa tokenin käyttäjälle
        user.token = token;
        
        // käyttäjän tiedot
        return res.status(200).json(user);
      } 
    } catch (err) {
      console.log(err);
    } 
});

