---
title: Stationeers Notes
---

## Solar Panels

### IC10 sun tracking program

First, it might be useful to run a program with shift values that are tweakable from external logic
memory devices.


```m68k
alias hSensor d0
alias hMemory d1
alias hAngle r0
define hShift 0

alias vSensor d2
alias vMemory d3
alias vAngle r1
define vShift 75
define vScale 0.667

yield

l hAngle hSensor SolarAngle
sub hAngle hShift hAngle
s hMemory Setting hAngle

l vAngle vSensor SolarAngle
sub vAngle vShift vAngle
mul vAngle vScale vAngle
max vAngle 0 vAngle
s vMemory Setting vAngle

j 11
```

<!--
```
alias horizontal_sensor d0
alias horizontal_writer d1
alias horizontal_angle r0

alias vertical_sensor d2
alias vertical_writer d3
alias vertical_angle r1

define horizontal_shift -90
define vertical_shift -90

yield

l horizontal_sensor 
```
-->

## Pipe and Gas Networks

### Canisters

- Start to take damage at around 10,145 kPa
