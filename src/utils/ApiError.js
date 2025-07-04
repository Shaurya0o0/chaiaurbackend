class ApiError extends error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.datac = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}