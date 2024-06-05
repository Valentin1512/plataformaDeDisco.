const bcrypt = require('bcrypt');
const saltRounds = 10; 

const hashPassword = async (contrasenia) => {
    try {
        const hashedPassword = await bcrypt.hash(contrasenia, saltRounds);
        return hashedPassword;
    } catch (err) {
        throw new Error('Error al hashear la contraseña');
    }
};

module.exports = hashPassword;
