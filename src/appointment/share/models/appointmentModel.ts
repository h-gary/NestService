export interface AppointmentModel {
  userId: string;
  id: string;
  time: number;
  type: string;
  notes?: string;
}
