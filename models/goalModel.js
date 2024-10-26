import mongoose from "mongoose";
const goalSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('People', goalSchema);