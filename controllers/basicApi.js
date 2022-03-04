const asyncHandler = require("../middleware/async");
const ErrorResponse = require('../utils/errorResponse'); // import ErrorResponse
const BasicApi = require("../models/BasicApi");          // Model 
// 컨트롤러들을 router로 보내야함

// @desc        Get all basicApi
// @route       GET /api/v2/basicApi
// @access      Public
exports.getBasicApi = asyncHandler(async (req, res, next) => {       
        const basicApi = await BasicApi.find();                                            // find : 모든 데이터를 가져옴
        res.status(200).json({ success: true, count: basicApi.length , data: basicApi });  // count : 갯수, data : 데이터
});

// @desc        Get single from basicApi by id
// @route       GET /api/v2/basicApi/:id
// @access      Single
exports.getBasicApis = asyncHandler(async (req, res, next) => {       
        const basicApi = await BasicApi.findById(req.params.id);                          // findById : id로 검색
        if(!basicApi) {
            return next(new ErrorResponse(`basicApi not found`, 404));                    // 형식에는 맞지만 db에 없는 경우 발생하는 에러 처리
        }
        res.status(200).json({ success: true, data: basicApi });
});

// @desc        Get single basicApi
// @route       GET /api/v2/basicApi/:id
// @access      private
exports.searchBasicApi = asyncHandler(async (req, res, next) => {  
        const basicApi = await BasicApi.find(req.params.id);
        if(!basicApi) {
            return res.status(400).json({ success: false, error: `basicApi not found` });
        }
       
        res.status(200).json({ success: true, data: basicApi });
 });

// @desc        Create
// @route       POST /api/v2/basicApi
// @access      private
exports.createBasicApi = asyncHandler( async (req, res, next) => {                                   // async : 함수를 비동기 방식으로 실행하는 것
    const basicApi = await BasicApi.create(req.body);                                 // await : wait until the function is finished
    res.status(201).json({
      success: true,
      data: basicApi
    });
  });
   
    // res
    //     .status(200)
    //     .json({ success: true, message: `Show single basicApi ${req.params.id}` });


// @desc        Generate ...
// @route       PUT /api/v2/basicApi/:id
// @access      Private
exports.updateBasicApi = asyncHandler(async (req, res,next) => {
    const basicApi = await BasicApi.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true  
        });
    
        if(!basicApi) {
            return next(new ErrorResponse(`basicApi not found`, 404));                    // 형식에는 맞지만 db에 없는 경우 발생하는 에러 처리
        }
        res.status(200).json({ success: true, data: basicApi });   
});

// @desc        Delete 
// @route       Delete /api/v2/basicApi/:id
// @access      Private
exports.deleteBasicApi = asyncHandler(async (req, res,next) => {
        const basicApi = await BasicApi.findByIdAndDelete(req.params.id);  // req.params.id : url에서 id를 가져옴
        
        if(!basicApi) {
            return res.status(400).json({ success: false, error: `basicApi not found` });
        }
        res.status(200).json({ success: true, data: {} });
});
