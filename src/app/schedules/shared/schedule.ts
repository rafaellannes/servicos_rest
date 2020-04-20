import { Service } from 'src/app/services/shared/service​';

export class Schedule {
    id: number;
    status: number;
    user_id: number;
    date: Date;
    service: Service;

    public static readonly STATUS = {
        PENDING: 1,
        CONFIRMED: 2,
        CANCELED: 3
    }

    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.status = parseInt(data.status);
            this.user_id = data.user_id;
            this.date = new Date(Date.parse(data.date));
            this.service = data.service;
        }
    }

    getStatusName(): string {
        switch (this.status) {
            case Schedule.STATUS.PENDING:
                return 'Pendente';
            case Schedule.STATUS.CONFIRMED:
                return 'Confirmado';
            case Schedule.STATUS.CANCELED:
                return 'Cancelado';
            default:
                throw 'Status não implementado.';
        }
    }

    getStatusColor(): string {
        switch (this.status) {
            case Schedule.STATUS.PENDING:
                return '';
            case Schedule.STATUS.CONFIRMED:
                return 'success';
            case Schedule.STATUS.CANCELED:
                return 'danger';
            default:
                throw 'Status não implementado.';
        }
    }
}