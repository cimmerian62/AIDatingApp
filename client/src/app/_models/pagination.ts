import { OnInit } from "@angular/core";
import { MessageService } from "../_services/message.service";

export interface Pagination {
    currentPage: number,
    itemsPerPage: number,
    totalItems: number,
    totalPages: number
}

export class PaginatedResult<T> {
    result?: T;
    pagination?: Pagination;
   
    



}