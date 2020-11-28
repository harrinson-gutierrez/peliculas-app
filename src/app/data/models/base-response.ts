export class BaseResponse<T> {
    items: T[];
    errorMessage: string;
}

export class BaseResponseFilter<T> {
    results: T[];
    expression: string;
    errorMessage: string;
    searchType: string;
}
