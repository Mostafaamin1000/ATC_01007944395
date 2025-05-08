import { User } from "../../../DB/Models/User.schema.js";
import { catchError } from "../../middlewares/catchError.js";
import { AppError } from "../../utils/appError.js";


const getAllUsers = catchError(async (req, res, next) => {
    let users = await User.find();
    res.status(200).json({ message: "Users retrieved successfully", users });
});

const getUserById = catchError(async (req, res, next) => {
    let user = await User.findOne( req.params.id );
    user || next(new AppError("User not found", 404));
    !user || res.status(200).json({ message: "User retrieved successfully", user });
});


const updateUser = catchError(async (req, res, next) => {
    let user = await User.findOneAndUpdate( req.params.id, req.body, { new: true });
    user || next(new AppError("User not found", 404));
    !user || res.status(200).json({ message: "User updated successfully", user });
});

const deleteUser = catchError(async (req, res, next) => {
    let user = await User.findOneAndDelete( req.params.id);
    user || next(new AppError("User not found", 404));
    !user || res.status(200).json({ message: "User deleted successfully", user });
});

 
export{
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}