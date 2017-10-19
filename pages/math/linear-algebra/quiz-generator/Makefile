SHELL=/bin/bash
.SHELLFLAGS=-O extglob -c

help:
	@echo "make <quizXX | rule> [params=-r] [clean]"

define compile=
	quiz-generator.py -t "$1" -o "$2.tex" ${params} $3
	pdflatex $2.tex
	make clean
endef

all: clean remove test02-review

test02-review:
	$(eval files=in/test02-*.tex)
	$(call compile,Math 254 Test 2 Review,test02-review,${files})

.PHONY: help clean remove quizes

clean:
	@rm ./*.{aux,log,out,tex,dvi,fdb_latexmk,fls} 2> /dev/null || true

remove:
	@rm ./*.pdf 2> /dev/null || true

move:
	@cp -f ./exam{01..02}-review.pdf ..
