import { Injectable } from '@angular/core';

const key = 'socialToken';

@Injectable()
export class TokenService {

    constructor() { }

    hasToken(): boolean { 

        return !!this.getToken();
    }

    setToken(token: string): void { 

        window.localStorage.setItem(key, token);
    };

    getToken(): string { 

        return window.localStorage.getItem(key);
    };

    removeToken(): void { 

        window.localStorage.removeItem(key);
    };
}