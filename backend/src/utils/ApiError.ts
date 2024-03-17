

class ApiError extends Error{
    statusCode: number;
    message: string;
    success: boolean;
    errors: any[];
    constructor(statusCode: number = 500, message: string, errors:[]= [], stack:string | undefined = undefined ){
        super()
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.message = message
        this.success = false
        this.errors = errors

        if(this.stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}

