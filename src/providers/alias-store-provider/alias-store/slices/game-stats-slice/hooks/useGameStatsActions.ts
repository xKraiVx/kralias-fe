import { IGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/gameStatsSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useGameStatsActions = (): IGameStatsActions => {
  return useAliasStore((store) => store.gameStatsActions);
};
