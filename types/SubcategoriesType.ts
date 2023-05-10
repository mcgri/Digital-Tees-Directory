import { SectorType } from "./SectorType";

export interface SubcategoriesType {
  id: string;
  name: string;
  parent: SectorType;
}
