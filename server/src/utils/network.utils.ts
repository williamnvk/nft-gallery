import { NETWORKS } from "../config/networks";

export function parseNetworkToId(network: string): number {
  const networkData = NETWORKS.find(
    (n) => n.slug.toLowerCase() === network.toString().toLowerCase()
  );
  return networkData?.id || NETWORKS[0].id;
}

export function parseNetworkToName(network: number): string {
  const networkData = NETWORKS.find((n) => n.id === network);
  return networkData?.slug || NETWORKS[0].slug;
}

export function isNetworkValid(network: string | number): boolean {
  if (typeof network === "string") {
    const isSlugValid = NETWORKS.some(
      (n) =>
        n.slug.toString().toLowerCase() === network.toString().toLowerCase()
    );
    if (isSlugValid) return true;

    // Verifica se é um id (pode ser uma string numérica)
    const idAsNumber = Number(network);
    const isIdValid = NETWORKS.some((n) => n.id === idAsNumber);
    return isIdValid;
  }

  if (typeof network === "number") {
    return NETWORKS.some((n) => n.id === network);
  }

  return false;
}
