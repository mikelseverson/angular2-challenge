import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {
    number: number = 0;
    addNumber(): void {
       this.number = this.number + 1;
    }
    removeNumber(): void {
        this.number--;
    }
    getNumber(): Promise<number> {
        return Promise.resolve(this.number);
    }
}