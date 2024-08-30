import { Collections } from "@/types/collections";
import { fetchAPI } from "@/utils/api";

const path = `/collections`;

export async function getAllCollections(
  searchParam: string | null = null
): Promise<Array<Collections.Collection>> {
  return await fetchAPI(path, { search: searchParam });
}
