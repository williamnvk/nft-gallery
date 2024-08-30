import { NETWORKS } from "../config/networks";

export function parseNetworkToId(network: string): number {
  const networkData = NETWORKS.find(
    (n) => n.slug.toLowerCase() === network.toLowerCase()
  );
  return networkData?.id || NETWORKS[0].id;
}
