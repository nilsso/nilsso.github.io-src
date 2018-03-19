---
title: "World of Warcraft"
---

These days I don't play much WoW,
but when I do I only play on private legacy servers like
[Nostalrius][nostalrius] (RIP) and [Elysium][elysium]. Private servers run older
versions of the game, as you would have played years ago when those versions
were considered "live" and "retail". The demand for these kinds of servers
appears to me to be growing. Nostalrius and Elysium are "Vanilla" servers; that
is they run the very first, original, expansion of the game (specifically for
client version 1.12).

# Interface AddOns

AddOns for World of Warcraft will always have a special place in my heart as I
taught myself how to program by writing a few. Here are some of the AddOns I have written for or ported
to Vanilla World of Warcraft.

[nostalrius]: https://en.nostalrius.org/
[elysium]: https://elysium-project.org/

### sjMacro ([github][sjmacro-git])

An addon that provides mouse-over casting to 1.12, something that wasn't added
until burning crusade. Seeks to be minimal, and only provides global Lua
functions which can be used in macros.

[sjmacro-git]: https://github.com/{{site.github_username}}/sjMacro

### sjLinkSpoof ([github][sjls-git]) ([demo][sjls-demo])

Links in World of Warcraft are just specially formatted strings. You click on one it
might open a small frame with information about an item, or it might open a URL window
(if you have a chat addon). I wanted a tool to be able to easily create fake links,
so I wrote this. Just don't spam global or trade, unless you want to piss-off GMs.

[sjls-git]: https://github.com/{{site.github_username}}/sjLinkSpoof
[sjls-demo]: https://raw.githubusercontent.com/{{site.github_username}}/sjLinkSpoof/master/sjls-demo.gif

### AttackBar2 ([github][ab2-git]) ([demo][ab2-demo])

I wrote this because I couldn't find a satisfactory weapon-swing tracker. I'd seen
them on people's streams (for Vanilla that is), but couldn't find a truly compatable
version.

[ab2-git]: https://github.com/{{site.github_username}}/AttackBar2
[ab2-demo]: #

### Dark Souls Death Screen ([github][dsds]) ([demo][dsds-demo])

Written at a request, displays the graphic and plays the sound of the ubiquitous
YOU DIED message from Dark Souls on death. The trouble was that the 1.12 client
has none of the animation framework used in the retail addon
[Dark Souls Death Screen](www.wowace.com/addons/dark-souls-death-screen) from
which the idea for this port came. So I used a timer library for tweening and
several functions to define animations.

[dsds]: https://github.com/{{site.github_username}}/DSDS
[dsds-demo]: https://raw.githubusercontent.com/{{site.github_username}}/DSDS/master/dsds.webm

### Color Picker Plus ([github][cpp-git])

A port of color to work with the 1.12 client. Provides RGBA channel values,
hex-codes, and a copy and paste buffer.

[cpp-git]: https://github.com/{{site.github_username}}/ColorPickerPlus_4Vanilla
