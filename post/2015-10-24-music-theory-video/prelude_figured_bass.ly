\version "2.18.2"

\paper {
    #(set-paper-size "a4")
    print-page-number=false
    %systems-per-page=1
    %ragged-right=##f
}

clip = \layout {
    clip-regions =
    #(list
    (cons
    (make-rhythmic-location 0 1 1)
    (make-rhythmic-location 7 1 1)))
}

mytweakA = {
    \override Staff.StaffSymbol.color=#(x11-color 'grey75)
    \override Staff.Clef.color=#(x11-color 'grey75)
    \override Staff.TimeSignature.color=#(x11-color 'grey75)
    \override Staff.BarLine.color=#(x11-color 'grey75)
    \override Staff.NoteHead.color=#(x11-color 'grey75)
    \override Staff.LedgerLineSpanner.color=#(x11-color 'grey75)
}
mytweakB= {
    \override FiguredBass.BassFigure.color=#(x11-color 'grey75)
}

% 0
\score {
    %\clip
    \relative c' {
        <c e g>1
        <c d f a>
        <b d e g>
        <c e g>
    }
}
% 1
\score {
    %\clip
    <<
        \relative c' {
            c1
            c
            b
            c
        }
        \figures {
            <5 3>1
            <6 4 2>
            <6 4 3>
            <5 3>
        }
    >>
}
% 2
\score {
    %\clip
    <<
        \relative c' {
            \mytweakA
            \once\override Staff.NoteHead.color=#black
            c1
            c
            b
            c
        }
        \figures {
            \mytweakB
            <5 3>1
            <6 4 2>
            <6 4 3>
            <5 3>
        }
    >>
}
% 3
\score {
    %\clip
    <<
        \relative c' {
            \mytweakA
            \once\revert Staff.NoteHead.color
            c1
            c
            b
            c
        }
        \figures {
            \mytweakB
            \once \override FiguredBass.BassFigure.color=#black
            <5 3>1
            <6 4 2>
            <6 4 3>
            <5 3>
        }
    >>
}
% 4
\score {
    %\clip
    <<
        \relative c' {
            \mytweakA
            \once\revert Staff.NoteHead.color
            <c \tweak color #red e \tweak color #red g>1
            c
            b
            c
        }
        \figures {
            \mytweakB
            \once\override FiguredBass.BassFigure.color=#red
            <5 3>1
            <6 4 2>
            <6 4 3>
            <5 3>
        }
    >>
}
% 5
\score {
    <<
        \relative c' {
            \mytweakA
            c1
            \once\revert Staff.NoteHead.color
            c
            b
            c
        }
        \figures {
            \mytweakB
            <5 3>1
            \once\revert FiguredBass.BassFigure.color
            <6 4 2>
            <6 4 3>
            <5 3>
        }
    >>
}
% 6 "A 7th chords"
\score {
    %\clip
    <<
        \relative c' {
            \mytweakA
            c1
            \once\revert Staff.NoteHead.color
            <c \tweak color #red d \tweak color #red f \tweak color #red a>1
            b
            c
        }
        \figures {
            \mytweakB
            <5 3>1
            \once\override FiguredBass.BassFigure.color=#red
            <6 4 2>
            <6 4 3>
            <5 3>
        }
    >>
}
% 7
\score {
    \clip
    <<
        \relative c' {
            \mytweakA
            c1
            c
            \once\revert Staff.NoteHead.color
            <b \tweak color #red d \tweak color #red e \tweak color #red g>
            c
        }
        \figures {
            \mytweakB
            <5 3>1
            <6 4 2>
            \once\override FiguredBass.BassFigure.color=#red
            <6 4 3>
            <5 3>
        }
    >>
}
