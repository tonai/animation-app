export interface Menu {
  _contents: string[];
  [Key: string]: string[] | Menu;
}
