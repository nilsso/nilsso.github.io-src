---
title: "Python Notes"
---

I wrote this because many classmates and friends had little to no experience
with Python before the MATH-340 class. Programming in Python (and in general)
will make much more sense if you pay special attention to tidiness,  syntax
and semantics (what does things mean). In many Java and C++ classes I'd see
poorly formatted code, making projects basically impossible for me to read and
understand let alone the person who wrote it. But in Python we *must* be tidy,
the syntax requires it. Python is a rare language where whitespace actually
matters (every control block must be consistently indented). And lastly,
because Python is a language which does not ask much of us as programmers
(i.e. dynamically typed) we actually should be more careful in understanding
what we're writing and how things change.

And like any other language, programming or spoken, Python just takes practice
and time.

---

* toc
{:toc}

---

# First, some programming terms...

**Function** A function is often like a black box to which we give some
information, and which then does something useful in return.
Functions in Python are recognizable due to the pair of parenthesis that follow
the name.

```python
foo()
bar("a")
```

The parenthesis denote the *parameter list*. Parameters (or arguments)
are how we provide a functions information, and are related to variables
(further on). Though functions don't always have parameters, like the
`foo` example above which appears to not take any arguments. On the other hand
`bar` accepted a single argument (a string).

A very common function is the `print` function, which accepts
values which it in turn outputs to the user (via an output stream).

```python
print("Hello world!")
```

```
Hello world!
```

We can consider many function to be black boxes because we expect them to do
something useful but don't necessarily care how they do it. More importantly
though is functions allow us to add functionality without adding lines of code.
A very important pattern to recognize is when code starts to repeat, it's
probably time to replace it with a function instead. But we'll go over how to
make functions much later, it's just important to recognize how a function.

**Declaration** A declaration is a statement which defines what kind of thing a
"label" is; is it a variable, or a function, or something else? What is its
type, or what does it return? Does it have access or scope limitations?

But in Python, out of all these things, scope is really all that's relevant.
Basically you can't use something (a variable or function) until you've said it
exists, this is true in all languages. And where things exist matter: does it
exist for the entirety of our program or only the "scope" of a function? And
that's about it. In Python we don't say what type a variable is and instead
variables take on whatever types they're given. There's also no access
restriction in Python, and function return types don't have to be know in
advance (i.e. declared). A function can even return multiple different types.

**Scope** Where things exist is important in programming. Most common is the
*global scope*. Something is in the global scope when it is accessible anywhere
throughout the program. Something is in a local scope when it is defined within
a block (e.g. inside of a function or a decision like an `if` statement or a
loop). What this means is that local variables that exist inside of a
function are inaccessible outside of the function, and more-or-less stop
existing entirely. But global variables are accessible everywhere. For example:


```python
a1 = "Hello"
def foo():
    print(a1)
    print(b1)
b1 = "World!"
foo()
```
```
Hello
World!
```

Works because both `a1` and `b1` exist in the global scope. So accessing them
from inside of the function `foo` is valid, even when `foo` was defined before
the variable `b1` was. However


```python
def foo():
    a2, b2 = "Hello", "World!"
print(a2)
print(b2)
```

```
---------------------------------------------------------------------------

NameError                                 Traceback (most recent call last)

<ipython-input-3-ddb071cc9d1f> in <module>()
2     a2, b2 = "Hello", "World!"
3
----> 4 print(a2)
5 print(b2)

NameError: name 'a2' is not defined
```


Fails because `a2` and `b2` only exist within the scope of the function.

**Definition** A definition happens to be a declaration where the label is given
a definitive implementation beyond its declaration. This isn't relevant to
Python though, because there's no way to separate the declaration of functions
from the definition of functions, but for C++ is critical. Consider

```cpp
int foo(); // a function declaration (but not definition)

int bar() { return 0; } // a function definition (and necessarily declaration)

bar(); // works
foo(); // Error: Undefined symbol foo
```

**Initialization** When a variable's state become "defined", i.e. the first time
a variable holds an actual value, and not a null-value (null meaning undefined).

**Assignment** When a variable is made to hold a different value. This can be
the same thing as the initialization, which would be referred to as
*initialization assignment*.


```python
a = 10 # initialization assignment
a = 20 # regular assignment (because a already exists)
```

---

# Values and types

A value is simply some information. The integer 7 is a value, an integer value.
In a language like C++ we might consider it to be a specific kind of integer
value, perhaps an unsigned integer, and maybe it has a size specification as
well: is it 8-bit wide (a character or `char`), 16, 32, 64, or bigger? But once
the computer understands that the value is a number it acknowledges that it can
do things to that value, like use it in mathematical statements. If a value is a
"string" (a sequence of characters) then the computer will acknowledge that it
can join it with another string or perhaps get a single character at a specific
index.

Type information is not required in Python in the same way it is in C++ or Java.
But this doesn't make understanding and paying attention to types any less
important in Python. I would argue that understanding types is actually more
critical to being an effective Python programmer than it is for C++ for Java
because in Java and C++ types are necessary and obvious. In Python types can
change making it much more difficult and necessary to keep track of types
throughout the lifespan of values. When values fail to interact in the way we
want, unexpected types are a likely culprit.


```python
print(1, type(1))
print(4.2, type(4.2))
print("Hello", type("Hello"))
```

```
(1, <type 'int'>)
(4.2, <type 'float'>)
('Hello', <type 'str'>)
```

---

# Variables

In C++ or Java variable declarations require a type

```cpp
int a = 7;
```

But not in Python

```python
a = 7
print(a)
```

```
7
```

In C++ and Java we can't change the type of a variable

```cpp
int a = 7;
a = "Hello"; // error
```

But in Python we can assign a new value to a variable even if it's a different
value than the one the variable is already holding on to


```python
a = 7
print(a)
a = "Hello"
print(a)
```

```
7
Hello
```

---

# Multiple-assignment

We've already seen how assignment works, but a special feature of Python is
multiple assignment.

```python
a, b = "swap", "me"
print(a)
print(b)

a, b = b, a
print(a)
print(b)
```

```
swap
me
me
swap
```


It works by treating whatever is on the right side of the assignment operator as
a new temporary object, storing each coma separated expression as a part of the
object. Each expression needs to be evaluated before the temporary object can be
assembled. And when everything is evaluated and the temporary object created,
then the values in it are unpacked and assigned piecemeal to whatever is on
the left of the assignment operator in left-to-right order. The first thing on
the right is assigned to the first thing on the left, etc.

This makes swapping values absolutely trivial; no need for a temporary variable
like in C++

```cpp
int a = 1;
int b = 2;

// now to swap
int temp = a;
a = b;
b = temp;
```

One very poignant example is the generating the Fibonacci sequence, which you
can find in the functions section at the end.

---

# Decision structures

But first...

## Boolean expressions

Anyone familiar with programming or classic logic is familiar with boolean
values, TRUE and FALSE. In Python these two values are expressed as the keywords
`True` and `False`. But actually, basically all values in Python behave like
boolean values. For just about everything, as long as the value isn't `None`,
it's a `True` value. If it is `None` then it's equivalent to `False`.
For numbers, `0` is `False` and anything else is `True`, even negative
numbers:

```python
print(True)
print(bool(1))
print(bool(99))
print(bool(-47))
print(bool(list()))

print(False)
print(bool(0))
print(bool(None))
```

```
True
True
True
True
False
False
False
False
```

## `if` `elif` and `else`

Your standard decision structure keywords. The most important syntactic
different between Python and most other languages is that whitespace is
syntactically significant when it comes to blocks of code. The body of an if
statement (or a function, or a loop) is determined by the indent level. We can
see this in all the following examples:

```python
if True:
    print("This will print (1)")
else:
    print("This wont print (2)")
```

```
This will print (1)
```

```python
if not True:
    print("This wont print (1)")
else:
    print("This will print (2)")
```

```
This will print (2)
```

```python
if False:
    print("This will not print (1)")
elif True:
    print("This will print (2)")
else:
    print("This will not print (3)")
```

```
This will print (2)
```

---

# Loops

### The `while` loop

Functionally identical to basically any other language.


```python
flag = True

while flag:
    print("This will loop and print only once")
    flag = False
```

```
This will loop and print only once
```

Unlike some languages there is no `do-until` type of loop in Python, with its
condition evaluation at the end of the loop body.

### The `for` loop

Unlike many other languages the for loop in Python is entirely range-based.
There's no way to manually increment a counter variable like in C++:

```cpp
int arr[5] = { 0, 1, 2, 3, 4 };

for (size_t i = 0; i < 5; ++i) {
    cout << arr[i] << '\n';
}
```

Instead in Python you must rely on generator functions which create a range of
values to iterate over


```python
arr = [ 0, 1, 2, 3, 4 ]

for i in range(len(arr)):
    print(arr[i])
```

```
0
1
2
3
4
```

Conveniently the syntax remains consistent over the variety of objects you could
iterate over, and there is the extremely useful function `enumerate` which
provides the numerical index value of where you are in the object you're
iterating


```python
arr = ['a', 'b', 'c', 'd', 'e']

for v in arr:
    print(v)

for i, v in enumerate(arr):
    print("index={} value={}".format(i, v))
```

```
a
b
c
d
e
index=0 value=a
index=1 value=b
index=2 value=c
index=3 value=d
index=4 value=e
```

---

# Lists

Lists are to Python as arrays are to Java or C++ in that they are contiguous
containers, but without fixed size and without the homogeneous type restrictions
of statically typed languages. For example:


```python
arr = [ 1, 2, "three", "four", 5.0, 6.01 ]

for v in arr:
    print("value: {:<6} type: {}".format(v, type(v)))
```

```
value: 1      type: <type 'int'>
value: 2      type: <type 'int'>
value: three  type: <type 'str'>
value: four   type: <type 'str'>
value: 5.0    type: <type 'float'>
value: 6.01   type: <type 'float'>
```

## List comprehensions

An incredibly useful feature included in Python are list comprehensions. It
provides a syntactically simple way to populate a list by way of a for loop.


```python
# Compare this...
arr = [None]*10
for i in range(10):
    arr[i] = i*2

print(arr)

# To this
arr = [i*2 for i in range(10)]
print(arr)
```

```
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

Basically any kind of for loop you can devise you can also use to populate a
list via a list comprehension. A good example are populating multidimensional
lists...

## Multi-dimensional lists

Consider wanting a five-by-five, two-dimensional array in C++

```cpp
int arr[5][5];
```

And if we wanted to populate this array with the integers 1, 2, 3 to 25

```cpp
for (size_t y = 0; y < 5; ++y)
    for (size_t x = 0; x < 5; ++x)
        arr[y][x] = x+y*5;
```

This is just as achievable in Python, and using the same method, as demonstrated:


```python
arr = [None]*5
for i in range(5):
    arr[i] = [None]*5

for y in range(5):
    for x in range(5):
        arr[y][x] = 1+x+y*5

pprint(arr)
```

```
[[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20],
[21, 22, 23, 24, 25]]
```

But the initialization of the size on the first 3 lines is really unnecessary; I
only did it to draw more of a parallel to the array declaration in C++. A more
Pythonean way to initialize this list might be with list comprehensions which
will populate the list and size definition just follows from the population:


```python
arr = [[1+x+y*5 for x in range(5)] for y in range(5)]

pprint(arr)
```

```
[[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20],
[21, 22, 23, 24, 25]]
```

List comprehensions syntactically are essentially just for loops inside of
brackets. It can be confusing but the levels of nested loops in list
comprehensions grows from outside-in, from right to left. In the example, for
every time y is a single value from 0 to 4 the other variable x iterates over
every value from 0 to 4.

---

# Functions

Writing functions allows us to encapsulate some functionality into a single
label, which is most useful when we want to do something repeatedly. When you
see yourself duplicating code it's usually a sign that a function would be
useful.

Function syntax is as follows:


```python
def function_name(arguments):
    # Function body
    return # Or leave out
```

Functions in Python do not require any types for anything at all; a function
which is supposed to return nothing simply lacks a return statement. Unlike many
languages, functions in Python can return different types. This probably isn't
such a good thing as its an occasional convenience. If you've written one
function to return different values at different times it's probably a smarter
idea to split this one function into two functions instead. This might save some
frustration later in the development process.

The only time I frequently use multiple return types is when a function needs to
either return a list or nothing:


```python
def foo(a):
    if a > 0:
        return list(range(a))
    return None

print(foo(10))
print(foo(0))
print(foo(-10))
```

```
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
None
None
```

This isn't uncommon in most other languages, where None often behaves like a
null-value.

Here's an example of a function which generates the Fibonacci sequence to n
numbers. It uses the keyword `yield`, turning the function into what's known as
a Generator; these are used in particular with Python for loops, as the function
will "yield" each value to the for loop until it's done yielding values entirely
(in this case it's done when we've generated the n Fibonacci numbers we wanted).
We'll use the function as a part of a list comprehension, and then print out the
list of Fibonacci numbers.


```python
def fib_gen(n):
    a, b = 1, 1
    for i in range(n):
        yield a
        a, b = b, a+b

print(list(fib_gen(10)))
```

```
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

Hopefully this demonstrates the capabilities of Python to do a whole lot of
things in a short number of characters/lines of code.

