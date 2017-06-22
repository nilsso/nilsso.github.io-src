*Evaluate the following integral*

$$
\int_0^7\frac{6x-5}{x+1}dx
$$

-  Select terms for substitution

$$
u=x+1,\quad x=u-1
$$

-  Change of bounds

$$
\begin{align*}
u&=x+1 & u&=x+1 \\
&=(0)+1 & &=(7)+1 \\
&=1 & &=8
\end{align*}
$$

-  U-Substitution

$$
\begin{align*}
\int_0^7\frac{6x-5}{x+1}dx&=
\int_1^8\frac{6(u-1)-5}{u}du \\
&=\int_1^8\frac{6u-11}{u}du
\end{align*}
$$

-  Integral of differences (and simplify)

$$
\begin{align*}
\int_1^8\frac{6u-11}{u}du&=
\int_1^8\frac{6u}{u}du-
\int_1^8\frac{11}{u}du \\
&=6\int_1^8 1\cdot du-11\int_1^8\frac{1}{u}du
\end{align*}
$$

-  Integrate

$$
6\int_1^8 1\cdot du-11\int_1^8\frac{1}{u}du=
6[u]_1^8-11[\ln\left|u\right|]_1^8
$$

-  Expand the definite integrals and solve

$$
\begin{align*}
& &&6[u]_1^8-11[\ln\left|u\right|]_1^8 \\
&=&&6\big((8)-(1)\big)-11\big(\ln(8)-\ln(1)\big) \\
&=&&42-11[\ln 8/1]=42-11(\ln 8) \\
&=&&42-11(\ln2^3) \\
&=&&42-11\cdot 3(\ln 2) \\
&=&&42-33(\ln 2)
\end{align*}
$$

Answer:

$$
\int_0^7\frac{6x-5}{x+1}dx=42-33\ln 2
$$
