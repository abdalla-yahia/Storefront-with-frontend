import { Request, Response, NextFunction} from "express";
import UsersModels from "../models/user.models";
import jwt from "jsonwebtoken";
import config from '../configration';
import path from 'path';


const user = new UsersModels()
//Create A New User
    const CreateNewUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newuser = await user.createUser(req.body)
        // res.json({
        //     state: `Good Job Creating Anew User Called ${newuser.firstname} ${newuser.lastname}`,
        //     data:{...newuser}
        // })
        res.redirect('/html/login.html')

    } catch (error) {
        next(error)
    }
}
//Get All Users
    const GetAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getallusers = await user.getAllUsers()
        const size =[...getallusers].length;
        if (size > 0) {
            res.json({
                state: "They Are All Users Found 😊",
                data:{...getallusers}
            })
        } else {
            res.json({
                message: 'Oops...!!NOT Found Any User 😭'
            })
        }
    } catch (error) {
        next(error)
    }
}
//Update User
    const UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const UpUser = await user.updateteUser(req.body, req.params.id)
        if ([...UpUser].length > 0) {
            res.redirect('/html/users.html')
        } else {
            res.json({
                message:"Not Found Any User Match This ID 🙂"
            })
        }
    } catch (error) {
        next(error)
    }
}
//Get User By Id
    const GeteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const GetUser = await user.geteUser(req.params.id)
        if ([...GetUser].length > 0) {
            res.json({
                state: `Successflly Gitting user <span style=color:Green;> ${GetUser[0].firstname} ${GetUser[0].lastname} </span> 😀`,
                data:{...GetUser}
            })
        } else {
            res.json({
                message:"Not Found Any User Match This ID 🙂"
            })
        }
    } catch (error) {
        next(error)
    }
}
//Delete User
    const DeleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const DelUser = await user.deleteUser(req.params.id)
        if (DelUser === null) {
            res.json({
                message1:'Sorry, this user cannot be removed because it is related to an order for a product 😐'
            })
            
        } else {
            if (DelUser.length) {
                res.json({
                    state: `Success Deleted user ${DelUser[0].firstname} ${DelUser[0].lastname} 😀`,
                    data: { ...DelUser }
                })
            }
            else {
                res.json({
                message: "Not Found Any User Match This ID 🙂"
            })
            }
        }
    } catch (error) {
        next(error)
    }
}
//Delete All User
    const DeleteAllUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const DelAllUser = await user.deleteAllUser()
        res.json({
            state: "All Users Deleted Successfully 😊",
            data:{...DelAllUser}
        })
    } catch (error) {
        next(error)
    }
}
//Authantication User
    const AuthanticateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, email } =req.body
        const auth = await user.AuthanticateUsers(password, email)
        const token = jwt.sign(auth, config.token as string)
        if (!token) {
            res.json({
                message:"Sorry Not Valid User 🙄"
            })
        } else {
            res.cookie('token', Buffer.from(token).toString('base64'), { httpOnly: true })
            res.redirect('/html/home.html')
        }
    } catch (error) {
        next(error)
    }
}


export default {
    AuthanticateUser,
    DeleteAllUser,
    DeleteUser,
    GeteUser,
    UpdateUser,
    GetAllUsers,
    CreateNewUser
}


