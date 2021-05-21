const mongoose = require('mongoose')
const db = process.env.MONGOURI

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false      
})
.then(() => { console.log('Database is connected...') })
.catch((err) => console.log(err))