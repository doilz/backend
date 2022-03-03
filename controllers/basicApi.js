// 컨트롤러들을 router로 보내야함

// @desc        Get all basicApi
// @route       GET /api/v2/basicApi
// @access      Public
exports.getBasicApi = (req, res,next) => {
    res
        .status(200)
        .json({ success: true, message: "Show all Basic API", hello: req.hello });
};


// @desc        Get all basicApi
// @route       GET /api/v2/basicApi
// @access      private
exports.searchBasicApi = (req, res,next) => {
    res
        .status(200)
        .json({ success: true, message: `Search single basicApi ${req.params.id}` });
};


// @desc        POST single basicApi
// @route       POST /api/v2/basicApi
// @access      private
exports.createBasicApi = (req, res,next) => {
    res
        .status(200)
        .json({ success: true, message: `Show single basicApi ${req.params.id}` });
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