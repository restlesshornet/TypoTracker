const {check, validationResult} = require("express-validator");
const {StatusCodes} = require("https-status-codes");

const validateSignUpRequest = [
    check("firstName").notEmpty().withMessage("First Name is Required"),
    check("lastName").notEmpty().withMessage("Last name is required"),
    check("email").isEmail().withMessage("Valid Email Required"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be 6 charachter long"),
];

const validateSignIpRequest = [
    check("email").isEmail().withMessage("Valid Email Required"),
    check("password")
        .isLength({ min : 6 })
        .withMessage(" Password must be at least 6 character long"),
]

const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);

    if(errors.array().length > 0){
        return res 
            .status(StatusCodes.BAD_REQUEST)
            .json({ error: errors.array()[0].msg});
    }

    next();
};

module.exports = {
    validateSignUpRequest,
    isRequestValidated,
    validateSignIpRequest,
};
