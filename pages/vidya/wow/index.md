---
title: "World of Warcraft"
---

# Interface AddOns

AddOns for World of Warcraft will always have a special place in my heart as I
taught myself how to program by writing a few. These days I don't play much WoW,
but when I do I only play on private legacy servers like
[Nostalrius][nostalrius] (RIP) and [Elysium][elysium]. Private servers run older
versions of the game, as you would have played years ago when those versions
were considered "live" and "retail". The demand for these kinds of servers
appears to me to be growing. Nostalrius and Elysium are "Vanilla" servers; that
is they run the very first, original, expansion of the game (specifically for
client version 1.12). Here are some of the AddOns I have written for or ported
to Vanilla World of Warcraft.

[nostalrius]: https://en.nostalrius.org/
[elysium]: https://elysium-project.org/

## sjMacro ([github][sjmacro-git])

An addon that provides mouse-over casting to 1.12, something that wasn't added
until burning crusade. Seeks to be minimal, and only provides global Lua
functions which can be used in macros.

[sjmacro-git]: https://github.com/{{site.github_username}}/sjMacro

## AttackBar2 ([github][ab2-git])

[ab2-git]: https://github.com/{{site.github_username}}/AttackBar2)

## Dark Souls Death Screen 1.12 ([github][dsds]) ([demo][dsds-demo])

Written at a request, displays the graphic and plays the sound of the ubiquitous
YOU DIED message from Dark Souls on death. The trouble was that the 1.12 client
has none of the animation framework used in the retail addon
[Dark Souls Death Screen](www.wowace.com/addons/dark-souls-death-screen) from
which the idea for this port came. So I used a timer library for tweening and
several functions to define animations.

[dsds]: https://github.com/{{site.github_username}}/DSDS
[dsds-demo]: #

## Color Picker Plus ([github][ccp-git])

A port of color to work with the 1.12 client. Provides RGBA channel values,
hex-codes, and a copy and paste buffer.

[cpp-git]: https://github.com/{{site.github_username}}/ColorPickerPlus_4Vanilla
