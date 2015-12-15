\version "2.18.2"

\paper {
    #(set-paper-size "a4")
}

clip = \layout {
    clip-regions =
    #(list
    (cons
    (make-rhythmic-location 0 1 1)
    (make-rhythmic-location 7 1 1)))
}
overrideA = {
    \override Staff.StaffSymbol.color=#(x11-color 'grey75)
    \override Staff.Clef.color=#(x11-color 'grey75)
    \override Staff.TimeSignature.color=#(x11-color 'grey75)
    \override Staff.BarLine.color=#(x11-color 'grey75)
    \override Staff.NoteHead.color=#(x11-color 'grey75)
    \override Staff.LedgerLineSpanner.color=#(x11-color 'grey75)
}
overrideB = {
    \override ChordNames.ChordName.color=#(x11-color 'grey75)
    \override ChordNames.ChordName.staff-affinity=#UP
    %\override FiguredBass.BassFigure.color=#(x11-color 'grey75)
}

melody       = \relative c' { c2 c c c b b c c }
lead-sheet   = \chords { c1 d:m7/c g:7/b c }

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
        \chords {
            c1
            d:m7/c
            g:7/b
            c
        }
    >>
}

% 2
\score {
    %\clip
    <<
        \relative c' {
            \overrideA
            \once\revert Staff.NoteHead.color
            c1
            c
            b
            c
        }
        \chords {
            \overrideB
            c1
            d:m7/c
            g:7/b
            c
        }
    >>
}

% 3
\score {
    %\clip
    <<
        \relative c' {
            \overrideA
            \once\revert Staff.NoteHead.color
            c1
            c
            b
            c
        }
        \chords {
            \overrideB
            \once\revert ChordNames.ChordName.color
            c1
            d:m7/c
            g:7/b
            c
        }
    >>
}

% 4
\score {
    %\clip
    <<
        \relative c' {
            \overrideA
            \once\revert Staff.NoteHead.color
            <c \tweak color #red e \tweak color #red g>1
            c
            b
            c
        }
        \chords {
            \overrideB
            \once\override ChordNames.ChordName.color=#red
            c1
            d:m7/c
            g:7/b
            c
        }
    >>
}

% 5
\score {
    %\clip
    <<
        \relative c' {
            \overrideA
            c1
            \once\revert Staff.NoteHead.color
            <c
            \tweak color #red d
            \tweak color #red f
            \tweak color #red a>
            b
            c
        }
        \chords {
            \overrideB
            c1
            \once\override ChordNames.ChordName.color=#red
            d:m7/c
            g:7/b
            c
        }
    >>
}

% "Root-note and a quality"
\score {
    \clip
    <<
        \relative c' {
            \overrideA
            c1
            c
            b
            c
        }
        \chords {
            \overrideB
            %\once\override ChordNames.ChordName.color=#red
            c1
            \once\override ChordNames.ChordName.color=#red
            d:m7/c
            \once\override ChordNames.ChordName.color=#red
            g:7/b
            %\once\override ChordNames.ChordName.color=#red
            c
        }
    >>
}

