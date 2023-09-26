
const { readJSON, writeJSON } = require('../../data')
const users = require('../../data/users.json')
const bcrypt = require('bcryptjs');


module.exports = (req,res) => {
   const hashPass = bcrypt.hashSync(req.body.password,10)
   if (bcrypt.compareSync(req.body.passwordTwo,hashPass)){
    const newUser = {
        id: users.length + 1,
        ...req.body,
        password:hashPass,
        image: "user2.jpg"

        
    }
    delete(req.body.passwordTwo)

    users.push(newUser)
    console.log(users)
    writeJSON(users,'users.json')
   }
   return res.render('registerOk')
}