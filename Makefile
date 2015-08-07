
XAR=/usr/local/bin/xar
BUILD_DIR=./certs

JSFILES_SHARED=$(wildcard shared/js/*.js )
JSFILES=$(notdir $(JSFILES_SHARED))

CSSFILES_SHARED=$(wildcard shared/css/*.css )
CSSFILES=$(notdir $(CSSFILES_SHARED))

SAFARI_NAME=AddToDash
SAFARI_VERSION=1.0
SAFARI_SRC_DIR=$(SAFARI_NAME).safariextension
SAFARI_JSFILES=$(addprefix $(SAFARI_SRC_DIR)/, $(JSFILES) )
SAFARI_CSSFILES=$(addprefix $(SAFARI_SRC_DIR)/, $(CSSFILES) )

CHROME_VERSION=1.0
CHROME_JSFILES=$(addprefix chrome/js/, $(JSFILES) )
CHROME_CSSFILES=$(addprefix chrome/css/, $(CSSFILES) )

pkg: pkg_safari pkg_chrome

pkg_safari: $(SAFARI_JSFILES) $(SAFARI_CSSFILES)
	$(XAR) -czf $(SAFARI_NAME).safariextz --distribution $(SAFARI_NAME).safariextension
	$(XAR) --sign -f $(SAFARI_NAME).safariextz --digestinfo-to-sign digest.dat \
	   --sig-size `cat $(BUILD_DIR)/size.txt` --cert-loc $(BUILD_DIR)/cert.der \
		 --cert-loc $(BUILD_DIR)/cert01 --cert-loc $(BUILD_DIR)/cert02
	openssl rsautl -sign -inkey $(BUILD_DIR)/key.pem -in digest.dat -out sig.dat
	$(XAR) --inject-sig sig.dat -f $(SAFARI_NAME).safariextz
	rm -f sig.dat digest.dat
	mv $(SAFARI_NAME).safariextz $(SAFARI_NAME)-v$(SAFARI_VERSION).safariextz

$(SAFARI_SRC_DIR)/%.js: shared/js/%.js
	cp $< $@

$(SAFARI_SRC_DIR)/%.css: shared/css/%.css
	cp $< $@

pkg_chrome: chrome/js chrome/css $(CHROME_JSFILES) $(CHROME_CSSFILES)
		cd chrome && \
		zip add-to-dash-v$(CHROME_VERSION).zip * css/* js/* && \
		mv add-to-dash-v$(CHROME_VERSION).zip ../add-to-dash-v$(CHROME_VERSION).crx

chrome/js:
	mkdir chrome/js

chrome/css:
	mkdir chrome/css

chrome/js/%.js: shared/js/%.js
	cp $< $@

chrome/css/%.css: shared/css/%.css
	cp $< $@

clean:
		rm -f *.safariextz *.crx *.zip
		rm -f $(SAFARI_JSFILES) $(CHROME_JSFILES)
		rm -f $(SAFARI_CSSFILES) $(CHROME_CSSFILES)
