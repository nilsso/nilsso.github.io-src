#!/usr/bin/env bash
function acp {
  git add -A;
  git commit -m '$1';
  git push;
}
(cd _site; acp 'Lazy update (live)')
acp 'Lazy update (source)'
