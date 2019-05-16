export class Technologies {
  public libelle: string;
  public version: number;
  public description: string;

  constructor(libelle: string, version: number) {
    this.libelle = libelle;
    this.version = version;
  }
}
