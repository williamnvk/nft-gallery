import { Collections } from "@/types/collections";
import { getApiUrl } from "@/utils/api";

const url = `${getApiUrl()}/users/collections`;

export async function getMyCollections(token: string) {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export const addCollectionToUser = async (
  payload: Collections.Collection,
  token: string
) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
};

export async function exportToCsv(token: string) {
  return await fetch(`${url}/csv`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
