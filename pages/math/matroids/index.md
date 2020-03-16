---
title: "Matroids"
math: True
toc: True
---

{% include boxed.html text="Proposition 2.1.4" content="
A set that is maximal with respect to the property $\rho(A)=|A|$ is also minimal with respect to
the property $\rho(A)=\rho(N)$. Consequently these sets all have the same cardinality.
"%}

We also define a few more structures based on $\rho$

- The *base set* $\mathcal B=\\{B\subset N:\rho(B)=\vert B\vert=\rho(N)\\}$,
- The *independence set* $\mathcal I=\\{I\subset N:I\subset B\text{ for some }\in\mathcal B\\}$,
- The *dependence set* equivalent to $2^N\setminus\mathcal I$,
- The *circuit set* $\mathcal C$, the set of minimal elements of the dependence set,
- The *closure operator* $\omega:2^\N\longrightarrow 2^N$ defined by $\omega(A)=\\{c\in N:\rho(Ac)=\rho(A)\\}$,
- The *hyperplane set* $\mathcal H=\\{H\subset N: H\text{ maximal for }\rho(H)=\rho(N)-1\\}$,
