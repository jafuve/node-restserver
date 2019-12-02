// ==========================
// Puerto
// ==========================
process.env.PORT = process.env.PORT || 3000;

// ==========================
// Entorno
// ==========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==========================
// Vencimiento del token
// ==========================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ==========================
// SEED de autenticaciòn
// ==========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';




// ==========================
// Entorno
// ==========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    // urlDB = 'mongodb+srv://jafuve:jafuve@clusterjafuve-z70eu.mongodb.net/test?retryWrites=true&w=majority';
    urlDB = process.env.MONGO_URI;
}

// urlDB = 'mongodb+srv://jafuve:jafuve@clusterjafuve-z70eu.mongodb.net/test?retryWrites=true&w=majority';

//este env esinventado
process.env.URLDB = urlDB;