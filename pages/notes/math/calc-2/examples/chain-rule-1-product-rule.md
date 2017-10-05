*Find $f'(x)$ for:*

$$
f(x)=\frac{x}{\left(x^2-1\right)^4}
$$

- Rewrite the function as a product of functions

$$
f'(x)=\deriv\big(x\cdot(x^2-1)^{-4}\big)
$$

- Product rule

$$
=\deriv(x)\cdot(x^2-1)^{-4}+x\cdot\deriv\big((x^2-1)^{-4}\big)
$$

- Power rule

$$
=(x^2-1)^{-4}+x\cdot\deriv\big((x^2-1)^{-4}\big)
$$

- Chain rule

$$
=(x^2-1)^{-4}+x\cdot -4(x^2-1)^{-5}\cdot\deriv(x^2-1)
$$

- Chain rule cont.

$$
=(x^2-1)^{-4}+x\cdot -4(x^2-1)^{-5}\cdot2x
$$

- Simplify

$$
=\frac{1}{(x^2-1)^4}-\frac{8x^2}{(x^2-1)^5}
$$

- Common denominator

$$
=\frac{x^2-1}{(x^2-1)^5}-\frac{8x^2}{(x^2-1)^5}
$$

- Simplify

$$
=\frac{-7x^2-1}{(x^2-1)^5}
$$

Answer:

$$
f'(x)=
\deriv\left(\frac{x}{\left(x^2-1\right)^4}\right)=
\frac{-7x^2-1}{(x^2-1)^5}
$$
