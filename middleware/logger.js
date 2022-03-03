
//@desc Logs request to console
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();  //                                    ! next() is used to move to the next middleware
}    
module.exports = logger;