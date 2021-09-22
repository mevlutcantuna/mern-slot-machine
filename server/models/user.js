const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
});

// save password as bcrypt
UserSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

// password verification
UserSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

const User = mongoose.model("User",UserSchema);

module.exports = User;

