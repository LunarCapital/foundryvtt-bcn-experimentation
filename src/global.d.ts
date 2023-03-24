import type { LancerInitiativeConfig } from "lancer-initiative";
import type { IContentPackManifest } from "machine-mind";
import type { AutomationOptions } from "./module/settings";
import type { LancerActionManager } from "./module/action/actionManager";

declare global {
  // Since we never use these before `init` tell league types that they are
  // never undefined
  interface LenientGlobalVariableTypes {
    game: never;
    canvas: never;
  }

  namespace Game {
    interface SystemData<T> {
      id: "beacon";
    }
  }
  interface Game {
    beacon: {
      [x: string]: unknown;
    };
    action_manager?: LancerActionManager;
  }

  interface CONFIG {
    LancerInitiative: LancerInitiativeConfig<Game["system"]["id"]>;
  }

  namespace ClientSettings {
    interface Values {
      "beacon.systemMigrationVersion": string;
      "beacon.coreDataVersion": string;
      "beacon.installedLCPs": {
        index: IContentPackManifest[];
      };
      "beacon.keepStockIcons": boolean;
      "beacon.hideWelcome": boolean;
      "beacon.automationOptions": Partial<AutomationOptions>;
      "beacon.automationSwitch": boolean;
      "beacon.attackSwitch": boolean;
      "beacon.actionManager": boolean;
      "beacon.actionManagerPlayersUse": boolean;
      "beacon.autoOCHeat": boolean;
      "beacon.autoOKillHeat": boolean;
      "beacon.autoCalcStructure": boolean;
      "beacon.squareGridDiagonals": "111" | "121" | "222" | "euc";
      // "beacon.warningFor120": boolean; // Old setting, currently unused.
      // "beacon.warningForBeta": boolean; // Old setting, currently unused.
      "beacon.combatTrackerConfig": { sortTracker: boolean } | ClientSettings.Values["beacon.combatTrackerConfig"];
      "beacon.dsnSetup": boolean;
      "beacon.combat-tracker-appearance": Partial<LancerInitiativeConfig["def_appearance"]>;
    }
  }
}
