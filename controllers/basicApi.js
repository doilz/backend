const BasicApi = require("../models/BasicApi");  // Model 
// 컨트롤러들을 router로 보내야함

// @desc        Get all basicApi
// @route       GET /api/v2/basicApi
// @access      Public
exports.getBasicApi = (req, res, next) => {       
    res
        .status(200)                        
        .json({ success: true, message: "Show all Basic API", hello: req.hello });
};


// @desc        Get all basicApi
// @route       GET /api/v2/basicApi
// @access      private
exports.searchBasicApi = (req, res,next) => {  
    console.log(req.body)   
    res
        .status(200)
        .json({ success: true, message: `Search single basicApi ${req.params.id}` }); // req.params.id is the id of the basicApi
 };

// @desc        POST single basicApi
// @route       POST /api/v2/basicApi
// @access      private
exports.createBasicApi = async (req, res, next) => {                                   // async : 함수를 비동기 방식으로 실행하는 것
  try {
    const basicApi = await BasicApi.create(req.body);                                 // await : wait until the function is finished
    res.status(201).json({
      success: true,
      data: basicApi
    });
  } catch (error) {
      console.log(error);
        res.status(400).json({
            success: false,
            error: error.message
        });
  }
   
    // res
    //     .status(200)
    //     .json({ success: true, message: `Show single basicApi ${req.params.id}` });
};


// @desc        Generate ...
// @route       PUT /api/v2/basicApi/:id
// @access      Private
exports.updateBasicApi = (req, res,next) => {
    res
        .status(200)
        .json({ success: true, message: `Generate new basicApi ${req.params.id}` });
};


// @desc        Delete 
// @route       Delete /api/v2/basicApi/:id
// @access      Private
exports.deleteBasicApi = (req, res,next) => {
    res
        .status(200)
        .json({ success: true, message: `Delete basicApi ${req.params.id}` });   
};