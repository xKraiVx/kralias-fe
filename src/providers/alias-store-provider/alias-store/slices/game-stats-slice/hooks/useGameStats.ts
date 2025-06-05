import { IGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/gameStatsSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useGameStats = (): IGameStats => {
  return useAliasStore((store) => store.gameStats);
};
