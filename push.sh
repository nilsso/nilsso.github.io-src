#!/usr/bin/env bash
function acp {
  git add -A;
  git commit -m '$1';
  git push;
}
bundle exec jekyll b -b 'https://nilsso.github.io'
(cd _site; acp 'Lazy update (live)')
acp 'Lazy update (source)'
