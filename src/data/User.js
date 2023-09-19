const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({name, lastName, email, password}) {

    this.id = uuidv4();
    this.name = name.trim();
    this.lastName = lastName.trim();      
    this.email = email.trim();
    this.password = hashSync(password,10);
    this.role = 'user';
    this.address = null;
    this.birthday = null;    
    this.image = image;
    
}

module.exports = User 