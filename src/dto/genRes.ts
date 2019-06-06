interface GenError {
    message: string;
    class: string;
    method: string;
}

interface GenResSingle<T> {
    success: true;
    result: T;
}

interface GenResMany<T> {
    success: true;
    results: T[];
}

interface GenResError {
    success: false;
    error: string;
}

interface GenResErrorDetailed {
    success: false;
    error: GenError;
}

type GenRes<T> = GenResSingle<T> | GenResMany<T> | GenResError | GenResErrorDetailed;

function isGenResSingle<T>(res: GenRes<T>): res is GenResSingle<T> {
    return res.success === true && (<GenResSingle<T>>res).result !== undefined;
}

function isGenResMany<T>(res: GenRes<T>): res is GenResMany<T> {
    return res.success === true && (<GenResMany<T>>res).results !== undefined;
}

function isGenResErrorSimple<T>(res: GenRes<T>): res is GenResError {
    return res.success === false && (<GenResError> res).error !== undefined && typeof (<GenResError> res).error === "string";
}

function isGenResErrorDetailed<T>(res: GenRes<T>): res is GenResErrorDetailed {
    return res.success === false && (<GenResErrorDetailed> res).error !== undefined && (<GenError> res.error).class !== undefined && (<GenError> res.error).message !== undefined && (<GenError> res.error).method !== undefined;
}

class GenResFactory<T> {
    public static successfulOne<T>(result: T): GenResSingle<T> {
        return {
            success: true,
            result,
        };
    }

    public static successfulMany<T>(results: T[]): GenResMany<T> {
        return {
            success: true,
            results,
        }
    }

    public static error(message: string): GenResError {
        return {
            success: false,
            error: message,
        }
    }

    public static errorDetailed(message: string, className: string, methodName: string): GenResErrorDetailed {
        return {
            success: false,
            error: {
                message,
                class: className,
                method: methodName,
            }
        }
    }
}

export {
    GenError,
    GenRes,
    GenResSingle,
    GenResMany,
    GenResError,
    GenResErrorDetailed,
    isGenResSingle,
    isGenResMany,
    isGenResErrorSimple,
    isGenResErrorDetailed,
    GenResFactory,
}