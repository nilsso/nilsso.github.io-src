---
title: "Python Notes"
---

# Things I used to not know

## Operators

#### Exponentiation

- `a**b` is equivalent to `pow(a, b)` or `a*...*a` (but for some reason seems slower)

#### Integer division

- `a // b` is equivalent to `int(a / b)`.
- Also, `a //= b` is equivalent to `a = a // b`

# Libraries

## Numpy, and OpenCV

Alias to start python with `numpy` already aliased as `np`:

```bash
alias numpy='python -ic "import numpy as np"'
```

Asuming the following imports

```python
import numpy as np
import cv2 as cv
```

Horizontally reflect a slice within an image

```python
img = cv.imread("img.jpg")
# Reflect everything but a 1 pixel border
img[1:-1,1:-1] = img[1:-1,1:-1][::-1,:]
```


