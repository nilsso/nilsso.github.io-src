---
title: "Python Notes"
---

# Pythonic programming

Given two same-size lists of integers, you want a new list of only their maxes.
A basic implementation might look like such:

```python
a = [94,33,86,11,28]
b = [91, 2,10,57,45]
# ...
def max_list(a, b):
  result = []
  for i in range(max(len(a), len(b))):
    result.append(max(
      (a[i] if i < len(a) else 0),
      (b[i] if i < len(b) else 0)))
  return result
# ...
max_list(a, b)
# = [ 94,33,86,57,45 ]
```

But alternatively...

```python
a = [94,33,86,11,28]
b = [91, 2,10,57,45]
# ...
list(map(max, zip(a, b)))
list(map(max, a, b))
[ max(pair) for pair in zip(a, b) ]
# = [ 94,33,86,57,45 ] for all
```

# Numpy

Alias to start python with `numpy` already aliased as `np`:

```bash
alias numpy='python -ic "import numpy as np"'
```

Asuming the following imports

```python
import numpy as np
import cv2 as cv
```

# OpenCV

Horizontally reflect a slice within an image

```python
img = cv.imread("img.jpg")
# Reflect everything but a 1 pixel border
img[1:-1,1:-1] = img[1:-1,1:-1][::-1,:]
```


