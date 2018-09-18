import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let User = new Schema({
    username: {
        type: String,
        required: [true, 'Need a username']
    },
    password: {
        type: String,
        required: [true, 'Need a password']
    }
});
export default mongoose.model('User', User);