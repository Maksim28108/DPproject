import { Cone } from "../entities/cone";

export class ConeService {
  public static surfaceArea(cone: Cone): number {
    const l = Math.hypot(cone.radius, cone.height);
    return Math.PI * cone.radius * (cone.radius + l);
  }

  public static volume(cone: Cone): number {
    return (1 / 3) * Math.PI * cone.radius ** 2 * cone.height;
  }

  public static sliceVolumeRatio(
    cone: Cone,
    plane: "XY" | "XZ" | "YZ"
  ): number {
    const ratio = ((cone.height / 2) / cone.height) ** 3;
    return ratio / (1 - ratio);
  }

  public static isBaseOnPlane(
    cone: Cone,
    plane: "XY" | "XZ" | "YZ"
  ): boolean {
    if (plane === "XY") {
      return Math.abs(cone.center.z) < 1e-6;
    }
    return false;
  }

  public static area(cone: Cone): number {
    return this.surfaceArea(cone);
  }

  public static perimeter(cone: Cone): number {
    return 2 * Math.PI * cone.radius;
  }
}

