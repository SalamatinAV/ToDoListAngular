export interface TaskModel {
  title: string;
  readonly id: number;
  startDate: Date;
  endDate?: Date;
}
