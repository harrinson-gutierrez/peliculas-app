export interface Pagination {
    total?: number;
    page: number;
    totalPage?: number;
    size: number;
}

export class PaginationList<T> {
    pagination: Pagination;
    data: T[];
}

export class PaginationUtil {

    public static Pagination<T>(items: T[], pagination: Pagination): PaginationList<T> {
        let paged = new PaginationList<T>();
        pagination.total = items.length;
        pagination.totalPage = items.length / pagination.size;
        paged.pagination = pagination;

        if (pagination.page < 1)
            pagination.page = 1;

        if (pagination.page > pagination.totalPage) {
            paged.data = items;
        }

        let pages = items.slice((pagination.page * pagination.size) - pagination.size, pagination.page * pagination.size);
        paged.data = pages; 
        return paged;
    }
}