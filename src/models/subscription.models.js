import mongoose from "mongoose"

const subscriptionSchema = new mongoose.Schema({
    // user which is subscribing
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },

    // channel which is being subscribed
    channel: {
        type: mongoose.Schema.Tytpes.ObjectId,
        ref: "Users"
    },


}, { timestamps: true });


export const Subscription = mongoose.model("Subscription", subscriptionSchema);