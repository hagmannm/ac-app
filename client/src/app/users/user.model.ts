export enum Role {
  User, // can register an absence and delay, can see the list of presences without comments
  SuperUser, // can register an absence and delay of any user, can see the list of presences without comments
  Choirmaster, // can see the list of presences with comments
  Admin // can manage users, events and absences
}

export enum Registry {
  Soprano,
  Alto,
  Tenor,
  Basso,
  Choirmaster
}

export class User {
  public id: string;
  public firstname: string;
  public lastname: string;
  public active: boolean;
  public role: Role;
  public registry: Registry;

  constructor(id: string, firstname: string, lastname: string, registry: Registry) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.registry = registry;
    this.role = Role.User;
    this.active = true;
  }
}
