import { Generation, Weather, Terrain, TypeName } from './data/interface';
import { Field } from './field';
import { Move } from './move';
import { Pokemon } from './pokemon';
import { Damage } from './result';
export interface RawDesc {
    HPEVs?: string;
    attackBoost?: number;
    attackEVs?: string;
    attackerAbility?: string;
    attackerItem?: string;
    attackerName: string;
    attackerTera?: string;
    defenderAbility?: string;
    defenderItem?: string;
    defenderName: string;
    defenderTera?: string;
    defenseBoost?: number;
    defenseEVs?: string;
    hits?: number;
    alliesFainted?: number;
    isBeadsOfRuin?: boolean;
    isSwordOfRuin?: boolean;
    isTabletsOfRuin?: boolean;
    isVesselOfRuin?: boolean;
    isGreatEqualizer?: boolean;
    isAuroraVeil?: boolean;
    isFlowerGiftAttacker?: boolean;
    isFlowerGiftDefender?: boolean;
    isFriendGuard?: boolean;
    isHelpingHand?: boolean;
    isCritical?: boolean;
    isLightScreen?: boolean;
    isBurned?: boolean;
    isProtected?: boolean;
    isReflect?: boolean;
    isBattery?: boolean;
    isPowerSpot?: boolean;
    isWonderRoom?: boolean;
    isSwitching?: 'out' | 'in';
    moveBP?: number;
    moveName: string;
    moveTurns?: string;
    moveType?: TypeName;
    rivalry?: 'buffed' | 'nerfed';
    terrain?: Terrain;
    weather?: Weather;
    isDefenderDynamaxed?: boolean;
}
export declare function display(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, damage: Damage, rawDesc: RawDesc, notation?: string, err?: boolean): string;
export declare function displayMove(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, damage: Damage, notation?: string): string;
export declare function getRecovery(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, damage: Damage, notation?: string): {
    recovery: [number, number];
    text: string;
};
export declare function getRecoil(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, damage: Damage, notation?: string): {
    recoil: number | [number, number];
    text: string;
};
export declare function getKOChance(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, damage: Damage, err?: boolean): {
    chance: number;
    n: number;
    text: string;
} | {
    n: number;
    text: string;
    chance?: undefined;
};
