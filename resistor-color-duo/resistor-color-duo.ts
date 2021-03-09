export class ResistorColor {
  private colors: string[];
  private COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }
  value = (): number =>
    Number(
      this.colors
        .map((color, index) => (index <= 1 ? this.COLORS.indexOf(color) : null))
        .join("")
    );
}
