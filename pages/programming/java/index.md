---
title: 'Java Notes'
---
* TOC
{:toc}

All of these notes I wrote on my Macbook, for Macbook (OSX). I assume some
proficiency with bash and the commandline and that [brew][brew] and [brew
cask][brew-cask] are installed.

[tutorial]: https://www.learnenough.com/command-line-tutorial
[iterm2]: https://www.iterm2.com/
[brew]: https://brew.sh
[brew-cask]: https://caskroom.github.io/

# Tools

## jShell

In my [old notes](old) I wrote about having different versions of Java
installed simultaneously and switching between them. I only needed this ability
to be able to use the `javarepl` tool. However Java 9 and Java 10 now come with
a newer tool called `jShell`, so just use that.

## [Gradle][gradle-home]

Gradle is a modern build tool that works especially well with Java
applications. The major benefit to me is being able to work on a
project entirely in the command line ([git][git-home],
[vim][vim-home]). With Gradle I don't need an IDE project/workspace
structure (NetBeans, Eclipse).

(full instructions: <https://guides.gradle.org/building-java-applications>)

To initialize a new project, first create the directory and change to it

```bash
mkdir my-project
cd my-project
```

Then run the Gradle initialization command

```java
gradle init --type java-application
```

Which will populate the directory with a Java application scaffold (main class, unit test, build tasks, etc.) with the directory name as the project name (edit settings.gradle to find that configuration as well as many more).

And now just invoke the gradlew bash script:

1. <kbd>./gradlew tasks</kbd> to list available tasks (or add <kbd>--all</kbd>)
1. <kbd>./gradlew build</kbd> to build the application
1. <kbd>./gradlew run</kbd> to run the built application

[gradle-home]: https://gradle.org
[git-home]: https://git-scm.com
[vim-home]: https://vim.org

One kind of tool that I like using for any programming is a REPL, and Java is
no exception. The one I've chosen is aptly named javarepl, however it seems
it does not work with the latest versions of Java. Therefore an older version
needs to be installed (I found Java 8 worked). To manage separate version
another tool is used.
