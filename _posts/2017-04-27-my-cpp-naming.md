---
layout: post
title: "C++ Naming Conventions"
date: 2017-04-27 10:00:00 -0700
categories: programming c++
---

Naming conventions for things like member variables can be very personal, almost
dogmatic, but for good reason. Names are important, in life just as in
programming. Being able to refer to different "things" easily and meaningfully
is one of the very first steps in creating source-code that we as mere mortals
can easily comprehend and share with one-another (or review by ourselves
sometime down the line). So I think having a consistent dogma for creating
meaningful and useful variables names is as good a religion as any to follow.

One justification for having such naming conventions is to have a visible
distinction between public members and private members, as well as being able to
declare accessor function with the same name as the member *minus* the prefix
(e.g. 'int a()' 'void a(int)' as getters and setters to a member 'int m_a'). No
need for 'getThis' or 'setThat'.

(I thought [this post][link] also had some good suggestions, but my particular
style differs quite a bit)

*Here's an example of how I do my naming:*

{% highlight c++ %}
class A
{
  public:
    A(const int& a = 0) :
      m_a{a}
    {}

    int a() const
    { return m_a; }

    void a(const int& a)
    { m_a = a; }

    static int h()
    { return s_h; }

    static void h(const int& h)
    { s_h = h; }

    static int ZERO()
    { return s_ZERO; }

  private:
    // Non-static members have 'm_'
    int m_a;

    // Static members have 's_'
    static int s_h;

    // Const things are all caps (except the prefix)
    static const int s_ZERO;
};

int A::s_h = 4;

const int A::s_ZERO = 0;

{% endhighlight %}

[link]: http://stackoverflow.com/a/1229360
