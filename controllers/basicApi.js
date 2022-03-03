const BasicApi = require("../models/BasicApi");  // Model 
// 컨트롤러들을 router로 보내야함

// @desc        Get all basicApi
// @route       GET /api/v2/basicApi
// @access      Public
exports.getBasicApi = async (req, res, next) => {       
    try{
        const basicApi = await BasicApi.find();
        res.status(200).json({ success: true, data: basicApi });

    } catch {
        res.status(400).json({ success: false, error: error.message });
    } 
};

// @desc        Get all basicApi
// @route       GET /api/v2/basicApi/:id
// @access      Public
exports.getBasicApis = async (req, res, next) => {       
    try{
        const basicApi = await BasicApi.find(req.params.id);
        res.status(200).json({ success: true, data: basicApi });

    } catch {
        res.status(400).json({ success: false, error: error.message });
    } 
};

// @desc        Get all single basicApi
// @route       GET /api/v2/basicApi/:id
// @access      private
exports.searchBasicApi = async (req, res, next) => {  
    try{
        const basicApi = await BasicApi.find(req.params.id);
        if(!basicApi) {
            return res.status(400).json({ success: false, error: `basicApi not found` });
        }
       
        res.status(200).json({ success: true, data: basicApi });
    } catch {
        res.status(400).json({ success: false, error: error.message });
    } 
 };

// @desc        Create
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
exports.updateBasicApi = async (req, res,next) => {
  const basicApi = await BasicApi.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true  
    });

    if(!basicApi) {
        return res.status(400).json({ success: false, error: `basicApi not found` });
    }
    res.status(200).json({ success: true, data: basicApi });
};

// @desc        Delete 
// @route       Delete /api/v2/basicApi/:id
// @access      Private
exports.deleteBasicApi = (req, res,next) => {
    res
        .status(200)
        .json({ success: true, message: `Delete basicApi ${req.params.id}` });   
};
