import { MiniatureStatus } from "./MiniatureStatus";
import { Photo } from "./Photo";

export type MiniatureFrontmatter = {
  slug: string;
  name: string;
  sku?: string;
  line: string[];
  painted?: string;
  status?: string;
  photos: Photo[];
  genre?: string[];
  race?: string[];
  archetype?: string[];
  weapons?: string[];
  armor?: string[];
  quantity?: number;
  recipes?: string[];
  minidb?: MiniatureStatus;
  gallery?: MiniatureStatus;
};
