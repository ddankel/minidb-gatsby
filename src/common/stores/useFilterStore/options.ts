import { createJSONStorage } from "zustand/middleware";
import excludeStateAttributes from "./utils/excludeStateAttributes";

export const persistOptions = {
  name: "minidb-store",
  storage: createJSONStorage(() => sessionStorage),
  partialize: excludeStateAttributes("actions", "triggers"),
};

export const devtoolsOptions = {
  name: "MiniDB Filter Store",
};
