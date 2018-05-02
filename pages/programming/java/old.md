---
---

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
