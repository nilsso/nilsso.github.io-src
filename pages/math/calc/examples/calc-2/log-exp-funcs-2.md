*Evaluate the integral*

$$
\int\frac{e^{5\sqrt{r}}}{\sqrt{r}}dr
$$

- Rewrite roots and denominator as powers

$$
\int\frac{e^{5\sqrt{r}}}{\sqrt{r}}dr=
\int e^{5r^{1/2}}r^{-1/2}dr
$$

- U-substitution

$$
\begin{gather*}
u=5r^{1/2},\quad du=\frac{5}{2}r^{-1/2} \\
\frac{2}{5}\int\left[e^{5r^{1/2}}\cdot\frac{5}{2}r^{-1/2}dr\right]=
\frac{2}{5}\int e^u du
\end{gather*}
$$

- Evaluate and re-resubstitute

$$
\frac{2}{5}\int e^u du=
\frac{2}{5}e^u+C=
\frac{2}{5}e^{5r^{1/2}}+C
$$

Answer:

$$
\int\frac{e^{5\sqrt{r}}}{\sqrt{r}}dr=
\frac{2}{5}e^{5\sqrt{r}+C
$$

