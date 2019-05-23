export class MessageAplication {

    constructor(
        private _message: string,
        private _type: MessageType
    ) { }

    get message(): string {
        return this._message
    };

    set message(message: string) {
        
        this._message = message;
    };

    get type(): MessageType {
        return this._type
    };

    set type(type: MessageType) {
        this._type = type;
    };
}

export enum MessageType {
    success,
    info,
    warning,
    danger
}
