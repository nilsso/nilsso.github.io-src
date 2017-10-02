SHELL=/bin/bash
.SHELLFLAGS=-O extglob -c

help:
	@echo "make <quizXX | rule> [params=-r] [clean]"

define compile=
	quiz-generator.py -t "$1" -o "$2.tex" ${params} $3
	pdflatex $2.tex
	make clean
endef

all: clean remove quizes exam01-all

# Compile a single quiz
quiz%: in/quiz%.tex
	$(eval num=`sed 's/quiz0*\([0-9]*\)/\1/' <<< $@`)
	$(call compile,Math 252 Quiz ${num},$@,$<)

# Compiles all quizes and detected input files and assembles them into a
# single monolithic quiz pdf.
quizes:
	@for f in in/quiz*.tex; do \
		f=`sed 's/in.\(quiz[0-9]\+\).tex/\1/' <<< $$f`; \
		if [ ! -f $$f.pdf ]; then make $$f; fi; \
	done
	gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -dPDFSETTINGS=/prepress -sOutputFile=quizes.pdf quiz*.pdf

exam01-all: exam01-practice exam01-review

exam01-practice:
	$(eval files=in/exam01-practice.tex)
	$(call compile,Math 252 Exam 1 Practice Test,exam01-practice,${files})

exam01-review:
	$(eval files=in/{quiz0{1..7},exam01-practice}.tex)
	$(call compile,Math 252 Exam 1 Review,exam01-review,${files})

exam01:
	$(call compile,Math 252 Exam 1,exam01,in/exam01.tex)

cumulative:
	$(eval files=in/*.tex)
	$(call compile,Math 252 Cumulative Review,cumulative,${files})

.PHONY: help clean remove quizes

clean:
	@rm ./*.{aux,log,out,tex,dvi,fdb_latexmk,fls} || true

remove:
	@rm ./*.pdf || true
