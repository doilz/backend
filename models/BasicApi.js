const { default: mongoose } = require("mongoose");

const BasicApiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        trim: true,
        maxlength: [50, "Name can't be more than 50 characters"]
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: [500, "Description can't be more than 500 characters"]
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            "Please use a valid URL with HTTP or HTTPS"
        ]
    },
    phone: {
        type: String,
        maxlength: [20, "Phone number can't be more than 20 characters"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: "2dsphere"
        },
        formmatedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            "Web Development",
            "Mobile Development",
            "UI/UX",
            "Data Science",
            "Business",
            "Other"
        ]
    },
    averageRating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [10, "Rating can't be more than 10"]
    },
    averageCost: {
        type: Number,
        min: [1, "Cost must be at least 1"],
        max: [100, "Cost can't be more than 100"]
    },
    photo: {
        type: String,
        default: "no-photo.jpg"
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,

        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('BasicApi', BasicApiSchema);
