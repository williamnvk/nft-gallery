import { Collections } from "@/types/collections";
import { fetchAPI } from "@/utils/api";

const path = `/collections`;

export async function getAllCollections(): Promise<
  Array<Collections.Collection>
> {
  return await fetchAPI(path, {});
}
