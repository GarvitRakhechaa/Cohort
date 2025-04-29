import User from "../model/user.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
const  registerUser = async (req, res) =>{
    // get data 
    const {name , email, password } = req.body
        if(!name || !email || !password) {
        return res.status(400).json({
            message: "all fields are required"
            })
        }
        
        //validate
        console.log(name)
        console.log(email)
        console.log(password)
        // check if user already exists
        try {
            console.log("userban rha hai ")
            const existingUser = await User.findOne({email}) // this will find user on basis of email 
            if(existingUser){
                return res.status(400).json({
                    message: "user already existed"
                })
            }

        // create a user in database

        const user = await User.create({ // user nhi hai to create kardo
            name,
            email,
            password
        })
        console.log(user);

        if(!user){
            return res.status(400).json({
                message: "usernot registerd"
            })
        }
        console.log("user registerd");

        //create a verification token
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);
        //save the token in database
        user.varificationToken = token;

        await user.save()

        //send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465 false for others 
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            }
        })
        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "verify your email",
            test: `please click on following link:
            ${process.env.BASE_URL}/api/v1/user/verify/${token}`
        }
     await transporter.sendMail(mailOptions);
         res.status(201).json({
        message: "user registerd successfully",
        success: true
    })
    
    }catch(error){
        res.status(400).json({
            message: "User not registered ",
            error,
            success: false
        })

    }
}
//     res.send("register user")







        

const verifyUser = async (req, res) => {
    // get token from url

    const  {token}  = req.params;
    console.log(token)
    
    // validate 
    if(!token) {
        return res.status(400).json({
            message: "Invalid token"
        });
    }
    console.log("token to available hai")

    
    // find user based on token 
    const user = await User.findOne({
        varificationToken: token
    })
    console.log("user find kar rhe hai")
    
    if(!user){
        console.log("user nhi mila")
        return res.status(400).json({
            message: "invalid token"
        })
    }
    console.log("user mil gya varification ho rha hai")
    user.isVarified = true
    user.varificationToken = undefined
    await user.save()
    res.status(200).json({
        message:" User Varified successfully",
        success: true
    })
    console.log("varification ho gya")
}

const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    
    try {
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({
                message: "Invalid Password or email"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        console.log(isMatch)

        if(!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const token = jwt.sign(
            {id: user._id,
            role:user.role },
            "shhhhh",
        {
            expiresIn: "24h"
        }
    )
    
    const cookieOptions = {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      };
      res.cookie("token", token, cookieOptions);
      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
        },
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred during login",
            error,
        });
    }
}





export { registerUser, verifyUser, login }