#!/usr/bin/env bash
function acp {
    git add -A;
    git commit -m "$@"
    git push;
}

msg="$@"
acp "$msg"
#bundle exec jekyll b -I -b 'https://nilsso.github.io'
#(cd _site; acp "$@ (live)")
#acp $msg
