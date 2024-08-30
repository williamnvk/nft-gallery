import { Networks } from "@/types/networks";
import { fetchAPI } from "@/utils/api";

const path = `/networks`;

export async function getAllNetworks(
  searchParam: string | null = null
): Promise<Array<Networks.Network>> {
  return await fetchAPI(path, { search: searchParam });
}
