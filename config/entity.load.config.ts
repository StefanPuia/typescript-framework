import { SystemEntities } from '../core/entity-definition/system.entities';
import { SecurityEntities } from '../core/entity-definition/security.entities';
import { UserEntities } from '../core/entity-definition/user.entities';

let EntityLoad: Array<EntityDefinition> = [
    ...SystemEntities,
    ...SecurityEntities,
    ...UserEntities
];

export { EntityLoad };