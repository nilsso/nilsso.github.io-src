---
layout: page
title: Vim
---

*(Page is under construction)*

<div style="background-color:#30A757;margin:10px;padding:10px;border-radius:2px;">
<img src="Vimlogo.svg" alt="Vim logo" style="display:block;margin:auto;width:50%;">
</div>

In this article I just want to summarize some information, and to break down
some of the concepts and philosophies of Vim which I keep in mind that help me
be productive. I don't mean this page to be any sort of tutorial on how to learn
Vim, but there are many quality articles that can provide that. Here are a
couple:

- [Learn Vim Progressively][learn01]
- [The Vim Learning Curve is a Myth][learn02]

[learn01]: http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/
[learn02]: https://robots.thoughtbot.com/the-vim-learning-curve-is-a-myth

## Intro

Most people who have heard of Vim think it's a text editor. Well they're wrong.
Vim is a lifestyle. To learn Vim, seriously, takes dedication, and is a
lifestyle change. My advice for anyone who wants to begin learning Vim is as
follows:

1.  *No mouse*
1.  *Strive to be lazy*

I'll admit that plenty of good reasons for using a mouse are out there, but when
it comes to the simple process of editing a text-file or some source code, I say
ditch the mouse. The whole point of having a modal editor (see the *Modes*
section below) is to eliminate the need to move the hands away from the keyboard
(actually it's because if you're an administrator your might frequemently be
without mouse functionality). Until you develop some muscle-memory for some of
the various commands and motions in Vim this suggestion will seem inefficient
and possibly like a waste of time, but it'll keep you focused on using the
strengths of Vim, like its key combinations for commands and motions.

And about being lazy... well who doesn't want to be lazy. What I really mean
is: strive to perform tasks in the least amount of actions as possible. See the
[becoming lazy](#becoming-lazy) section below.

### Content at a glance...

1.  [Modes](#modes)
1.  [Commands and Motions](#commands-and-motions)
1.  [Registers and Macros](#registers-and-macros)
1.  [Becoming Lazy](#becoming-lazy)

## Modes

Vim is what is known as a "modal" editor, as opposed to a "modeless" editor.
Anyone who has used a computer to edit the contents of a text file has
most likely used a modeless editor; see programs like Microsoft Word, Notepad
or Notepad++. In a modeless editor there is for better or for worse only one
mode: text input mode. For composing an essay this is more-than-likely all that
is needed.

On the other hand modal editors have more modes than just "insert text". Vim has
the following modes: *normal* mode, *insert* mode, *visual* mode, *command-line*
mode, *ex* mode, and *select* mode.

<small>See `:help vim-modes`</small>

### *normal* mode

This mode is the default mode when Vim is started normally. Anything that
the user types is interpreted as a command (including commands which change
modes).

<kbd>esc</kbd>
Enter normal mode (from insert, visual, or command-line modes)

<small>See `:help Normal-mode`</small>

### *insert* mode

This mode is for what it is named: inserting text. Like a modeless editor,
in insert mode any key pressed is interpreted as text to be entered into the
buff at the cursor position.

<kbd>i</kbd>
Enter insert mode at the cursor position

<kbd>a</kbd>
Enter insert mode one character to the right of the cursor

<kbd>I</kbd>
Enter insert mode at the very *first* non-whitespace character on the line

<kbd>A</kbd>
enter insert mode at one character past the very *last* character on the line

<small>See `:help Insert-mode`</small>

### *visual* mode

Under the category of visual mode there are actual a few different sub-modes:
character-wise, line-wise, and block-wise. But better than me trying to describe
the differences between them just give them a try, it'll be obvious.

<kbd>v</kbd>
Enter visual mode character-wise

<kbd>V</kbd>
Enter visual mode line-wise

<kbd>ctrl-v</kbd>
Enter visual mode block-wise

<small>See `:help Visual-mode`</small>

### *command-line* mode

<small>See `:help Command-line-mode`</small>

## Commands and Motions

### Motions

A motion is simply a command that moves the cursor. There's plenty of them, with
<kbd>h</kbd>, <kbd>j</kbd>, <kbd>k</kbd>, and <kbd>l</kbd> being the most
easily understood: move left, move up, move right, move down; all by only a
single character.

I think it is easy to take these commands for granted at first, but once the
surface is scratched, the utility of using commands with motions becomes
magical.

<html>
<table class="table">
<tr><th>Motion</th><th>What it does</th></tr>
<tr><td><kbd>w</kbd></td><td>To the beginning of the next word</td></tr>
<!--<tr><th><kbd>e</kbd></th><th>To the end of the current word</th></tr>-->
<!--<tr><th><kbd>W</kbd></th><th>To the beginning of the next WORD</th></tr>-->
<!--<tr><th><kbd>E</kbd></th><th>To the end of the current WORD</th></tr>-->
<!--<tr><th><kbd>b</kbd></th><th>Go backward a word</th></tr>-->
<!--<tr><th><kbd>B</kdb></th><th>Go backward a WORD</th></tr>-->
</table>
</html>

<kbd>ciw</kbd>
Delete the word that the cursor is on and go into insert mode.

<kbd>ci(</kbd>
Delete everything within the parentheses surrounding wherever the cursor is and
then go into insert mode.

<kbd>dt␣</kbd>
(␣ meaing a space character) Delete everything from where the cursor is to
*before* the next space character.

<kbd>df␣</kbd>
Delete up to and including the next space

<kbd>vi"</kbd>
Visually select all inside double quotes

<kbd>va"</kbd>
Visually select all inside and including double quotes

## Registers and Macros

### Macros

#### Recording

#### Editing

You have a macro in register w (i.e. recorded a macro via <kbd>qw</kbd>), but it's not
100% what you wanted. Paste the macro in that register <kbd>"wp</kbd>, edit the sequence
and visually select and yank it back to that same register <kbd>"wy</kbd>.

## Becoming Lazy

By lazy I mean perform actions in as little keypresses as you can. Consider a
scenario where you have the text `void foo(int a, int b, int c)` and you're in
normal mode with the cursor positioned at the `i` in `int a`. You want to change
the line to `void food()` and in the end be back in normal mode. You may be
tempted to:

1.  press <kbd>l</kbd> nineteen time to move the cursor to the `)`
1.  enter insert mode by pressing <kbd>i</kbd>, then press <kbd>backspace</kbd>
    nineteen times to delete all that text
1.  then finally press <kbd>escape</kbd> to change back to normal mode.

Or you could just type <kbd>di)</kbd>, which will delete all the text within the
surrounding parenthesis *and* leave you in normal mode. Three key presses versus
forty. Here's some other ways you could also accomplish the same task:

<kbd>dt)</kbd> Delete everything up to before the next `)`

<kbd>d8w</kbd> Delete eight words forward

