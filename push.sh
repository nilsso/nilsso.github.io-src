#!/usr/bin/env bash
function acp {
    git add -A;
    git commit -m "$@"
    git push;
}

msg="$@"
bundle exec jekyll b
(cd _site; acp "$msg (live)")
acp "$msg (source)"
