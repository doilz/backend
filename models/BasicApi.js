

const { default: mongoose } = require("mongoose");

const BasicApiSchema = new mongoose.Schema({  // 스키마 설정 = 어떤 형태의 데이터를 저장할 것인지 정의.
    name: {                                   
        type: String,
        required: [true, "Name is required"],                       // required 옵션을 사용하면 해당 필드가 입력되지 않았을 경우 에러를 발생시킴
        unique: true,                                               // unique 옵션을 사용하면 해당 필드가 중복되었을 경우 에러를 발생시킴
        trim: true,                                                 // trim 옵션을 사용하면 해당 필드에서 양쪽 공백을 제거함
        maxlength: [50, "Name can't be more than 50 characters"]    // maxlength 옵션을 사용하면 해당 필드에서 입력된 값의 길이가 제한된 길이보다 길어질 경우 에러를 발생시킴
    },
    slug: String,                                                   // slug 옵션을 사용하면 해당 필드에서 입력된 값을 자동으로 slug 형태로 변환해줌 (슬러그는 영어 소문자로 이루어진 글자열)
    description: {                                          
        type: String,                                               // type 옵션을 사용하면 해당 필드에서 입력된 값의 타입을 정의함         
        required: [true, "Description is required"],
        maxlength: [500, "Description can't be more than 500 characters"]
    },
    website: {
        type: String,
        match: [                                                    // match 옵션을 사용하면 해당 필드에서 입력된 값이 정규식에 맞지 않을 경우 에러를 발생시킴 
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
            index: "2dsphere"                                               // 2dsphere 옵션을 사용하면 해당 필드에서 입력된 값을 위도와 경도로 변환해줌
        },
        formmatedAddress: String,                                           // formmatedAddress 옵션을 사용하면 해당 필드에서 입력된 값을 주소 형태로 변환해줌
        street: String,                                                     // street 옵션을 사용하면 해당 필드에서 입력된 값을 건물명 형태로 변환해줌
        city: String,                                                       // city 옵션을 사용하면 해당 필드에서 입력된 값을 도시 형태로 변환해줌
        state: String,                                                      // state 옵션을 사용하면 해당 필드에서 입력된 값을 주 도 형태로 변환해줌
        zipcode: String,                                                    // zipcode 옵션을 사용하면 해당 필드에서 입력된 값을 우편번호 형태로 변환해줌
        country: String                                                     // country 옵션을 사용하면 해당 필드에서 입력된 값을 국가 형태로 변환해줌
    },
    careers: {
        type: [String],
        required: true,
        enum: [                                                             // enum 옵션을 사용하면 해당 필드에서 입력된 값이 정의된 배열 안에 없을 경우 에러를 발생시킴
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
        min: [1, "Rating must be at least 1"],                              // min 옵션을 사용하면 해당 필드에서 입력된 값이 정의된 값보다 작을 경우 에러를 발생시킴
        max: [10, "Rating can't be more than 10"]                           // max 옵션을 사용하면 해당 필드에서 입력된 값이 정의된 값보다 클 경우 에러를 발생시킴
    },
    averageCost: {
        type: Number,
        min: [1, "Cost must be at least 1"],
        max: [100, "Cost can't be more than 100"]
    },
    photo: {
        type: String,
        default: "no-photo.jpg"                                             // default 옵션을 사용하면 해당 필드에서 입력된 값이 없을 경우 정의된 값을 대입해줌
    },
    housing: {
        type: Boolean,                                                      // Boolean 옵션을 사용하면 해당 필드에서 입력된 값이 true 또는 false 일 경우 에러를 발생시킴
        default: false                                                      // default 옵션을 사용하면 해당 필드에서 입력된 값이 없을 경우 정의된 값을 대입해줌
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
        type: Date,                                                         // Date 옵션을 사용하면 해당 필드에서 입력된 값이 정의된 형식에 맞지 않을 경우 에러를 발생시킴
        default: Date.now                                                   // default 옵션을 사용하면 해당 필드에서 입력된 값이 없을 경우 정의된 값을 대입해줌    
    }
});

module.exports = mongoose.model('BasicApi', BasicApiSchema);                // BasicApi 스키마를 모델로 변환하여 exports 함수를 통해서 사용할 수 있도록 함
