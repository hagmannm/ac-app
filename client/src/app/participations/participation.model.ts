export enum ParticipationState {
  Present = "Présent",
  Absent = "Absent",
  Delayed = "En retard",
  Uncertain = "Incertain"
}

export class Participation {
  public comment: string;
  public state: ParticipationState;

  constructor(state: ParticipationState, comment: string) {
    this.state = state;
    this.comment = comment;
  }
}
