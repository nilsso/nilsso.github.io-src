---
layout: default
title: "C++ Notes"
toc: true
---

## Naming things

Unfortunately everyone has a different style for programming (see
[LLVM][llvm-style], [Google][google-style], [Mozilla][mozilla-style]), so
finding the right one is often just a personal preference. I think I most
closely follow Google's.

[llvm-style]: llvm.org/docs/CodingStandards.html
[google-style]: https://google.github.io/styleguide/cppguide.html
[mozilla-style]: https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Coding_Style

<!--
   -Naming conventions for things like member variables can be very personal, almost
   -dogmatic, but for good reason. Names are important, in life just as in
   -programming. Being able to refer to different "things" easily and meaningfully
   -is one of the very first steps in creating source-code that we as mere mortals
   -can easily comprehend and share with one-another (or review by ourselves
   -sometime down the line). So I think having a consistent dogma for creating
   -meaningful and useful variables names is as good a religion as any to follow.
   -
   -Two justification for having such naming conventions:
   -
   -1. Visible distinction between public members and private members
   -2. Able to declare accessor function with the same name as the member *minus*
   -   the prefix (e.g. `int a()`, `void a(int)` as getters and setters to a member
   -   named `int m_a`). No need for `getThis` or `setThat`.
   -
   -(I thought [this post][link] also had some good suggestions, but my particular
   -style differs quite a bit)
   -->

### My convensions

1. Variables are [*camelCase*](https://en.wikipedia.org/wiki/Camel_case)
1. Member variables end with an underscore

<!--
   -*Here's an example of how I do my naming:*
   -
   -{% highlight c++ %}
   -class A
   -{
   -  public:
   -    A(const int& a = 0) :
   -      m_a{a}
   -    {}
   -
   -    int a() const
   -    { return m_a; }
   -
   -    void a(const int& a)
   -    { m_a = a; }
   -
   -    static int h()
   -    { return s_h; }
   -
   -    static void h(const int& h)
   -    { s_h = h; }
   -
   -    static int ZERO()
   -    { return s_ZERO; }
   -
   -  private:
   -    // Non-static members have 'm_'
   -    int m_a;
   -
   -    // Static members have 's_'
   -    static int s_h;
   -
   -    // Const things are all caps (except the prefix)
   -    static const int s_ZERO;
   -};
   -
   -int A::s_h = 4;
   -
   -const int A::s_ZERO = 0;
   -
   -{% endhighlight %}
   -->

[link]: http://stackoverflow.com/a/1229360
