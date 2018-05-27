import { Participation } from "../participations/participation.model";



export class Event {

  public date: Date;
  public description: string;
  public location: string;
  public startTime: string;
  public endTime: string;
  public singers: Map<string, Participation>;


  constructor(date: Date, description: string, location: string, startTime: string, endTime: string, singers: Map<string, Participation>) {
    this.date = date;
    this.description = description;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.singers = singers;
  }
}
