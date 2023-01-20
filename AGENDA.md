# Agenda

This is a summary of the information [here](https://laoban.dev/training/EXISTING.html) summarised to help me give this as a presentation!

# Setup in IDE

* Git from git https://github.com/laoban-training/convertexistingproject.git
* npm i -g laoban
* `yarn`


# Quick overview of the example project

* There are four packages: main, lib1 (javascript), lib2, lib3 and main (all typescript) under the `modules` directory
* The main displays a value derived from the three libraries

```
     lib1      lib3
       \       /
        lib2  /
          \  /
           main    
```    
 
Be sure to make it clear that the scripts may not work on other people's machines!
* scripts/compile
* scripts/test
* scripts/run

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
* `laoban admin updatetemplate --directory modules/main`
* `laoban admin analyze --showimpact`
* Observe
  * the impact is now low
  * `laoban packages` shows the packages and their dependencies
* Final step: use `laoban` to update the project
  * laoban update


## Using laoban

```shell
laoban compile
laoban test
laoban status
```

And diagnose/fix the issue with the test in lib1 
```shell
laoban log -p lib1
```

## Summary

The actual things we have done are

```shell
git clone https://github.com/laoban-training/convertexistingproject.git
cd convertexistingproject
yarn
laoban admin init
laoban admin analyze --showimpact                            # showed us that we had a problem with the typescript version
laoban admin updatetemplate --directory modules/main         # fixed the typescript version
laoban update                                                # updated the package.json files, and any other files required by the template
laoban compile
laoban test
laoban status                                                # showed us that we had a problem with the tests in lib1
laoban log -p lib1                                           $ show us the last log in lib1
``` 
# edit package.details.json for lib1 to set test to false
laoban clean
laoban test
laoban status
```

The only 'decision points' were 'what do we do about the downgraded typescript version' and 'how do we fix the tests in `lib1`'

# Finished

The project is now configured to use `laoban`. You can now use `laoban` to build, test and publish your project.


