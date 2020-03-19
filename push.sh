#!/usr/bin/env bash
function acp {
    git add -A;
    git commit -m "$@"
    git push;
}

msg="$@"
bundle exec jekyll b -I -b 'https://nilsso.github.io'
(cd _site; acp "$msg (live)")
acp "$msg (source)"
