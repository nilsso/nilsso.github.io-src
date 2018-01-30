---
title: 'Java Notes'
---
* TOC
{:toc}

All of these notes I wrote on my Macbook, for Macbook (OSX). Most assume
some proficiency with [bash and the commandline][tutorial] ([iTerm2][iterm2] is
the recommended OSX terminal emulator) and assume that [brew][brew] and [brew
cask][brew-cask] are installed.

[tutorial]: https://www.learnenough.com/command-line-tutorial
[iterm2]: https://www.iterm2.com/
[brew]: https://brew.sh
[brew-cask]: https://caskroom.github.io/

# Tools

One kind of tool that I like using for any programming is a REPL, and Java is
no exception. The one I've chosen is aptly named javarepl, however it seems
it does not work with the latest versions of Java. Therefore an older version
needs to be installed (I found Java 8 worked). To manage separate version
another tool is used.

## jenv ([home][jenv-home])

Managing separate installations of Java can be accomplished by using jenv, a
tool similar to Python's virtualenv or Ruby's rbenv.
### Installing JDK versions

```bash
# Add the caskroom versions repository and install versions
brew tap caskroom/versions
brew cask search java
brew cask install <java-version>

# And then getting where JDKs are installed
/usr/libexec/java_home -V
```

### Setting up jenv

```bash
# Install
brew install jenv

# Then add the paths of the different JDKs to jenv (remember how these are found above)
jenv add <java-version/Contents/Home>

# Once they are all added list them and switch to the desired version
jenv versions
jenv global <java-version>

# And then lastly execute something with the version (javarepl only
# seems to work with java8, which is what led me to learn this tool in
# the first place).
jenv exec java -version
jenv exec javarepl
```

[jenv-home]: http://www.jenv.be/

## javarepl ([home][javarepl-home])

Only seems to work with Java version 8, so following the section above for
managing multiple installations, make sure java8 is installed through
[homebrew-caskroom-versions][hcv]. With version 8 added through jenv and
set to the global version, just start javarepl through jevn

```bash
jenv eval javarepl
```

[javarepl-home]: http://www.javarepl.com/term.html
[hcv]: https://github.com/caskroom/homebrew-versions

## Gradle ([home][gradle-home])

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

# Class notes (Spring 2018)

#### 2018/1/29

Some material on next test

1. On polymorphism
    - `extends` (can only have one) and `implements` (can have many) clauses
    - Understand usage of `instanceof` for decision structures
    - Casting generic type to subclass type to access subclass properties and methods
