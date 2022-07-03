import { targets, damageTypes, effects, valueTypes } from '../../cooldowns/constants.js';

export const formatEffectString = (effect) =>
{
    if (effect.effect == effects.HEAL ||
        effect.effect == effects.DELAYED_HEAL ||
        effect.effect == effects.REGEN ||
        effect.effect == effects.SHIELD)
    {
        const valueSuffix = effect.valueType == valueTypes.PERCENT ? "% max HP" : " potency"
        const durationSuffix = effect.effects != effects.HEAL ? " for " + effect.duration + "s" : "";
        return ("Apply " + effect.effect + " of " + effect.value + valueSuffix + " to " + effect.target + durationSuffix);
    }

    if (effect.effect == effects.DMG_IN ||
        effect.effect == effects.DMG_OUT)
    {
        const valueSuffix = effect.valueType == valueTypes.PERCENT ? "%" : " potency"
        return ("Decrease " + effect.effect + " by " + effect.target + " by " + effect.value + valueSuffix + " for " + effect.duration + "s");
    }

    if (effect.effect == effects.HEAL_IN ||
        effect.effect == effects.HEAL_OUT ||
        effect.effect == effects.MAX_HP)
    {
        const valueSuffix = effect.valueType == valueTypes.PERCENT ? "% max HP" : " potency"
        return ("Increase " + effect.effect + " by " + effect.target + " by " + effect.value + valueSuffix + " for " + effect.duration + "s");
    }

    if (effect.effect == effects.BLOCK)
    {
        return ("Block incoming attacks for " + effect.duration + "s");
    }

    if (effect.effect == effects.OTHER)
    {
        return effect.note;
    }
}

export const getTimelineEventColor = (event) =>
{
    if (event.damageType == damageTypes.NONE)
    {
        return '#89c9cc';
    }
    if (event.damageType == damageTypes.ENRAGE)
    {
        return '#b50300';
    }
    if (event.avoidable)
    {
        return '#9ba88c';
    }
    if (event.damageType == damageTypes.MAGIC)
    {
        if (event.target == targets.PARTY)
        {
            return '#ff5cb0';
        }
        else if (event.target.includes(targets.MT) ||
                 event.target.includes(targets.OT))
        {
            return '#c05cff';
        }
        else {
            return '#bd8dc7';
        }
    }
    if (event.damageType == damageTypes.PHYS)
    {
        if (event.target == targets.PARTY)
        {
            return '#ff8b4d';
        }
        else if (event.target.includes(targets.MT) ||
                 event.target.includes(targets.OT))
        {
            return '#d63731';
        }
        else {
            return '#c79d8d';
        }
    }
    return 'gray';
}

export const getTimelineEventBorderColor = (event) =>
{
    if (event.damageType == damageTypes.NONE)
    {
        return '#59999c';
    }
    if (event.damageType == damageTypes.ENRAGE)
    {
        return '#850000';
    }
    if (event.avoidable)
    {
        return '#6b785c';
    }
    if (event.damageType == damageTypes.MAGIC)
    {
        if (event.target == targets.PARTY)
        {
            return '#cf2c90';
        }
        else if (event.target.includes(targets.MT) ||
                 event.target.includes(targets.OT))
        {
            return '#9029ff';
        }
        else {
            return '#8d5d97';
        }
    }
    if (event.damageType == damageTypes.PHYS)
    {
        if (event.target == targets.PARTY)
        {
            return '#cf5b1d';
        }
        else if (event.target.includes(targets.MT) ||
                 event.target.includes(targets.OT))
        {
            return '#a60701';
        }
        else {
            return '#976d5d';
        }
    }
    return 'black';
}