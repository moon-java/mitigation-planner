import { targets, damageTypes, effects, valueTypes } from '../../cooldowns/constants.js';
import * as uiConstants from '../Constants/UIConstants.js'; 

export const formatEffectString = (effect) =>
{
    if (effect.effect === effects.HEAL ||
        effect.effect === effects.DELAYED_HEAL ||
        effect.effect === effects.REGEN ||
        effect.effect === effects.SHIELD)
    {
        const valueSuffix = effect.valueType === valueTypes.PERCENT ? "% max HP" : " potency"
        const durationSuffix = effect.effect !== effects.HEAL ? " for " + effect.duration + "s" : "";
        return ("Apply " + effect.effect + " of " + effect.value + valueSuffix + " to " + effect.target + durationSuffix);
    }

    if (effect.effect === effects.DMG_IN ||
        effect.effect === effects.DMG_OUT)
    {
        const valueSuffix = effect.valueType === valueTypes.PERCENT ? "%" : " potency"
        return ("Decrease " + effect.effect + " by " + effect.target + " by " + effect.value + valueSuffix + " for " + effect.duration + "s");
    }

    if (effect.effect === effects.HEAL_IN ||
        effect.effect === effects.HEAL_OUT)
    {
        const valueSuffix = effect.valueType === valueTypes.PERCENT ? "%" : " potency"
        return ("Increase " + effect.effect + " by " + effect.target + " by " + effect.value + valueSuffix + " for " + effect.duration + "s");
    }
    if (effect.effect === effects.MAX_HP)
    {
        const valueSuffix = effect.valueType === valueTypes.PERCENT ? "% max HP" : " potency"
        return ("Increase " + effect.effect + " by " + effect.target + " by " + effect.value + valueSuffix + " for " + effect.duration + "s");
    }

    if (effect.effect === effects.BLOCK)
    {
        return ("Block incoming attacks for " + effect.duration + "s");
    }

    if (effect.effect === effects.OTHER)
    {
        return effect.note;
    }
}

export const getTimelineEventColor = (event) =>
{
    if (event.interruptable)
    {
        return uiConstants.INTERRUPTABLE_BG;
    }
    if (event.damageType === damageTypes.NONE)
    {
        return uiConstants.INFO_BG;
    }
    if (event.damageType === damageTypes.ENRAGE)
    {
        return uiConstants.ENRAGE_BG;
    }
    if (event.avoidable)
    {
        return uiConstants.AVOIDABLE_BG;
    }
    if (event.damageType === damageTypes.DARK)
    {
        return uiConstants.DARK_BG;
    }
    if (event.damageType === damageTypes.MAGIC)
    {
        if (event.target === targets.PARTY)
        {
            return uiConstants.MAGIC_AOE_BG;
        }
        else if (event.tankbuster)
        {
            return uiConstants.MAGIC_TB_BG;
        }
        else {
            return uiConstants.MAGIC_OTHER_BG;
        }
    }
    if (event.damageType === damageTypes.PHYS)
    {
        if (event.target === targets.PARTY)
        {
            return uiConstants.PHYS_AOE_BG;
        }
        else if (event.tankbuster)
        {
            return uiConstants.PHYS_TB_BG;
        }
        else {
            return uiConstants.PHYS_OTHER_BG;
        }
    }
    return uiConstants.DEFAULT_BG;
}

export const getTimelineEventBorderColor = (event) =>
{
    if (event.interruptable)
    {
        return uiConstants.INTERRUPTABLE_BORDER;
    }
    if (event.damageType === damageTypes.NONE)
    {
        return uiConstants.INFO_BORDER;
    }
    if (event.damageType === damageTypes.ENRAGE)
    {
        return uiConstants.ENRAGE_BORDER;
    }
    if (event.avoidable)
    {
        return uiConstants.AVOIDABLE_BORDER;
    }
    if (event.damageType === damageTypes.DARK)
    {
        return uiConstants.DARK_BORDER;
    }
    if (event.damageType === damageTypes.MAGIC)
    {
        if (event.target === targets.PARTY)
        {
            return uiConstants.MAGIC_AOE_BORDER;
        }
        else if (event.tankbuster)
        {
            return uiConstants.MAGIC_TB_BORDER;
        }
        else {
            return uiConstants.MAGIC_OTHER_BORDER;
        }
    }
    if (event.damageType === damageTypes.PHYS)
    {
        if (event.target === targets.PARTY)
        {
            return uiConstants.PHYS_AOE_BORDER;
        }
        else if (event.tankbuster)
        {
            return uiConstants.PHYS_TB_BORDER;
        }
        else {
            return uiConstants.PHYS_OTHER_BORDER;
        }
    }
    return uiConstants.DEFAULT_BORDER;
}