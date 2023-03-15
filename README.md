# interactive mitigation planner
i really hate trying to plan mitigation in those spreadsheets that get put on reddit bc you have to, like, actually do math. so, fuck that- ive made an unga bunga planner where you move your blocks around & it spits out mitigation %s/shows you when you can hit your buttons again.

yes my code is a fucking nightmare, no i will not fix it, thank you for understanding <3

what this thing can do:
- drag & drop skills onto the timeline, shows their effective duration & cooldown
- cooldowns are enforced so you can't "use" a skill again until it's off cooldown
- hover over an attack in the fight timeline to see the total mitigation active when it goes out
- hover over a skill placed in the timeline to see what it does
- click each party member then hover over fight timeline events to see mit on them specifically
- change party member jobs & fight timeline
- load/save plans so you can send your plan ID to someone else and they can load it and add to it or save their own based on yours


aspirational goals
- fflogs import
- export to csv/xlsx
- fight timeline filters to hide non-damaging and/or avoidable attacks
- allow single-target skills to be put on other people, e.g. tbn, intervention
- assign names to party members
- import/export functionality
- use the api that lets you get the actual tooltip for a given skill
- blu support????
- mobile support (VERY aspirational)


what it will probably never do:
- check for conflicting/non-stacking skills, e.g. using two reprisals at once, using troubadour and shield samba even though they don't stack. just dont be a dummy 4head

disclaimer: i've *mostly* covered my bases in terms of attack targets/types/effects that i've defined in constants, but it's not 100%. ive been assigning targets from the perspective of "how should i mitigate this", i.e. the first bloodrakes in p4s only target 4 people, but you'll effectively need to mit for the entire party, so its target is PARTY. the heat of condemnation tethers technically *could* be taken by anybody, but they *should* be taken by tanks, so its target is MT + OT. this isnt meant to teach mechanics or detail exactly how the fight works, its meant to help people who know the fight plan their mit under the assumption that they're doing mechanics correctly.

i probably won't be accepting actual code changes from others bc im a little control freak and tbh i dont want people looking at my frankenstein code, though idk, create a PR if you really want to? i'll look at it, at least.
