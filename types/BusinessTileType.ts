import { SectorType } from "./SectorType";
import { SubcategoriesType } from "./SubcategoriesType";

export interface BusinessTileType {
  id: string;
  name: string;
  desc: string;
  background: string;
  logo: React.ReactNode;
  sectors: SectorType[];
  tags: SubcategoriesType[];
  address: string;
  website: string;
}
