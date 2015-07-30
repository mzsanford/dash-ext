# dash-ext

Browser extensions for adding docsets to Dash - https://kapeli.com/dash

This is not developed by Kapeli.

# Examples

The extension alters popular documentation sites, inserting an "Add to Dash" element on the page:

![godoc.org](https://raw.github.com/mzsanford/dash-ext/master/test/godoc.png)
![rubygems.org](https://raw.github.com/mzsanford/dash-ext/master/test/rubygems.png)
![cocoapods.org](https://raw.github.com/mzsanford/dash-ext/master/test/cocoapods.png)

# Status

Currently in alpha status with major known bugs. The current codebase is targeting
Google Chrome and Apple Safari.

# Layout

The primary work for the extensions (loacting package names, adding buttons) lives
in the `shared/` folder. Because the browsers don't recognize symbolic links the
Makefile contains packaging tasks that copy these into place.

# Building

You will need a Safari developer certificate in a file named `certs/cert.der` as
well as the underlying certs. There is a good tutorial on the [Streak Dev Blog](http://developer.streak.com/2013/01/how-to-build-safari-extension-using.html)
on how to generate these. Google Chrome goes not require this.

From the root directory run:

```shell
# build Chrome only
$ make pkg_chrome
# build Safari only
$ make pkg_safari
# make All
$ make
# cleanup
$ malke clean
```

this will build both the Chrome and Safari extensions in the current directory.

# Thanks

Many thanks to [Kapeli](https://kapeli.com/) for Dash and for adding the underlying
feature needed to support these extensions. All artwork was taken directly from Dash
and is the property of Kapeli.
