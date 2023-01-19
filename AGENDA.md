
# Setup in IDE

* npm i -g laoban
* Git from git https://github.com/laoban-training/convertexistingproject.git
* `yarn`
* scripts/compile
* scripts/test
* scripts/run

# Quick overview of the example project

* There are three packages: main, lib1 and lib2
* The main displays the value lib1value from project lib1 and lib2value from lib2

# Adding laoban

## What will happen:

* `laoban admin analyze`
* `laoban admin analyze --showimpact`
  * Observe that the impact is high: we will be rolling back the typescript version

## Doing it

* `laoban admin init`
* Look at git and see what this has done
  * Note it didn't impact anything in the project yet. Just added control files
* Explain 
  * we need to add a new template called typescript which is 'our' typescript template based on the original but
  with our version number.
  * We need to select a project that is a 'prototype' for the new template
* `laoban admin updatetemplate module/typescript`
* `laoban admin analyze --showimpact`
* Observe
  * the impact is now low
  * `laoban packages` shows the packages and their dependencies
* Final step: use `laoban` to update the project
  * laoban update

## Using laoban

* `laoban compile`
* `laoban test`
 