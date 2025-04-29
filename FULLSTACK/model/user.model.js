import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: ['user', 'admin'],
        default: 'user'
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    varificationToken: {
        type: String
    },
    resetPassword: {
        type: String
    },
    resetPasswordtoken: {
        type: Date
    }
}, {})

// we have to hash password before save in database so we use pre Hook


userSchema.pre("save", async function (next) { // this will run before save script will run  
    try {
        if (this.isModified("password")) { // if password modified to wo us passwrod ka hash generate karke db me set karega
            this.password = await bcrypt.hash(this.password, 10) 
        }
        next(); // ab tum next per jao
    }
    catch(error){
        next(error);
    }
})

const User = mongoose.model("User", userSchema)

export default User