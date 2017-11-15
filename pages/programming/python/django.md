---
title: Django notes
---

# Django

## Models

### When making changes...

The database needs to be migrated.

1. Change models (in `models.py`)
2. Run `python manage.py makemigrations` to create migrations for those
   changes
3. Run `python manage.py migrate` to apply changes to the database

## Views

### Render shortcuts

Instead of the full method for rendering an HTTP response view,

{% highlight python %}
from django.http import HttpResponse
from django.template import loader
def someView(request):
    template = loader.get_template("MY_APP/index.html")
    return HttpResponse(template.render({ }, request))
{% endhighlight %}

There exists an API shortcut which performs the same action

{% highlight python %}
from django.shortcuts import render
def someView(request):
    return render(request, "MY_APP/index.html", { })
{% endhighlight %}

And similarly for 404 requests

{% highlight python %}
from django.http import Http404
def someView(request, param):
    try:
        obj = MyModel.objects.get(pk=param)
    except MyModel.DoesNotExist:
        raise Http404("Model object does not exist")
    return render(request, "MY_APP/detail.html", { "obj": obj })
{% endhighlight %}

There exists an API shortcut

{% highlight python %}
from django.shortcuts import get_object_or_404
def someView(request, param):
    obj = get_object_or_404(MyModel, pk=param)
    return render(request, "MY_APP/detail.html", { "obj": obj })
{% endhighlight %}

Here's a list of some of these [shortcuts][]

| Function                | Description                                                     |
|-------------------------|-----------------------------------------------------------------|
| [`render`][]            | Combines a request, template, and context into an HTTP response |
| [`get_object_or_404`][] | Calls `get()` on a model manager, minding 404 exceptions        |
| [`get_list_or_404`][]   | Calls `filter()` on a model manager, minding 404 exceptions     |

[shortcuts]: https://docs.djangoproject.com/en/1.11/topics/http/shortcuts/
[`render`]: https://docs.djangoproject.com/en/1.11/topics/http/shortcuts/#render
[`get_object_or_404`]: https://docs.djangoproject.com/en/1.11/topics/http/shortcuts/#get_object_or_404
[`get_list_or_404`]: https://docs.djangoproject.com/en/1.11/topics/http/shortcuts/#get_list_or_404

## Routing

To tell the engine how to react to HTTP requests we route them to specific views
based on pattern matching.

1. In `settings.py`, `ROOT_URLCONF` points to the base web-app URL table
2. Regex patterns all URL tables determine to either respond with a view or to
   pass the request to other modules.

## Testing

With tests, more is better, and redundancy is okay. Include:

1. a separate `TestClass` for each model or view
2. a separate test method for each set of conditions to test
3. test method names that describe their functions
