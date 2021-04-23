/* #region imports */
import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
/* #endregion */

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> { }

export { SettingsRepository }