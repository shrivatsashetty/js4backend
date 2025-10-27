import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [25, "Username cannot exceed 100 characters"],
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    dob: {
        type: Date,
        default: Date.now,
    },
    hobbies: {
        type: [String],
        enum: {
            values: [
                "Reading",
                "Coding",
                "Football",
                "Gaming",
                "Trekking",
                "Traveling",
                "Cooking",
                "Photography",
                "Music",
            ],
            message: "{VALUE} is not a valid hobby",
        },
    },
});



export const User = mongoose.model("User", userSchema);
