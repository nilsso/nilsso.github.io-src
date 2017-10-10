*Evaluate the integral*

$$
\int\frac{3}{81z^2+16}dz
$$

- Factor out a constant

$$
\int\frac{3}{81z^2+16}dz
=3\int\frac{1}{81z^2+16}dz
$$

- Factor the denominator to bring the form closer to that of the integration
  formula \ref{int-arctan}, and
  factor out a constant

$$
\begin{align*}
3\int\frac{1}{81z^2+16}dz&=
3\int\frac{1}{16\left(\frac{81z^2}{16}+1\right)}dz \\
&=\frac{3}{16}\int\frac{1}{\frac{81z^2}{16}+1}dz
\end{align*}
$$

- Rewrite the denominator to match the integral formula form

$$
\frac{3}{16}\int\frac{1}{\frac{81z^2}{16}+1}dz=
\frac{3}{16}\int\frac{1}{\left(\frac{4z}{9}\right)^2+1}dz
$$

- U-substitution

$$
\begin{gather*}
u=\frac{4}{9}z,\quad du=\frac{4}{9}dz \\

\frac{3}{16}\cdot\frac{9}{4}
\int\frac{1}{\left(\frac{4z}{9}\right)^2+1}\frac{4}{9}dz
=\frac{1}{12}\int\frac{1}{u^2+1}du
\end{gather*}
$$

- Evaluate the integral

$$
\frac{1}{12}\arctan u+C
$$

#### Answer:

$$
\int\frac{3}{81z^2+16}dz=
\frac{1}{12}\arctan\frac{4}{9}u+C
$$
