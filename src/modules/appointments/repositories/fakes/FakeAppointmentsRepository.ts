import { isEqual } from 'date-fns';
import { v4 } from 'uuid';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentRepository implements IAppointmentsRepository {
    private appointments: Appointment[] = [];

    async findByDate(date: Date): Promise<Appointment | undefined> {
        const findAppointment = this.appointments.find(appointment =>
            isEqual(appointment.date, date),
        );

        return findAppointment;
    }

    async create({
        provider_id,
        date,
    }: ICreateAppointmentDTO): Promise<Appointment> {
        const appointment = new Appointment();

        Object.assign(appointment, { id: v4(), date, provider_id });

        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentRepository;
