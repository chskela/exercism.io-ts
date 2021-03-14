export default class SpaceAge {
  seconds;
  private readonly SECONDS_IN_YEAR = 31557600;
  private readonly planets: { [key: string]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  constructor(seconds: number) {
    this.seconds = seconds;
  }

  private age(planet: string) {
    return (
      Math.round(
        (this.seconds / (this.SECONDS_IN_YEAR * this.planets[planet])) * 100
      ) / 100
    );
  }

  onEarth() {
    return this.age("earth");
  }
  onMercury() {
    return this.age("mercury");
  }
  onVenus() {
    return this.age("venus");
  }
  onMars() {
    return this.age("mars");
  }
  onJupiter() {
    return this.age("jupiter");
  }
  onSaturn() {
    return this.age("saturn");
  }
  onUranus() {
    return this.age("uranus");
  }
  onNeptune() {
    return this.age("neptune");
  }
}
