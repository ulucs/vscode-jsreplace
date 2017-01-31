# jsReplace README

## Features

Full power of String.replace for your document. Tries to evaluate regex/lambdas for flexible usage with string fallback.

## Usage

# Search

Enter your regex or substring into the search box as in `/hello ?w[oe]rld[0-9!]/ig` or `"Hello"`. If you enter a string without quotes (like `hello`), the javascript engine will first try to evaluate it (using `eval("hello")`) and then use the string itself if it fails (thereby defaulting to `"hello"`).

# Replace

Enter a lambda function or a string into the replace box as in `x => x+1` or `"Merhaba!"`. Similarly with search, if you enter a string without quotes (using `hello` again as an example), the javascript engine will first try to interpret it (`eval("hello")`) and use the string itself as a fallback when it fails. It is better if you use quotes so that you won't ecounter unexpected results (like `"undefined"` instead of your string).