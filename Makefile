
XAR=/usr/local/bin/xar
BUILD_DIR=./certs

VERSION="0.1"

SAFARI_NAME="AddToDash"
SAFARI_VERSION=$(VERSION)
SAFARI_SRC_DIR=$(SAFARI_NAME).safariextension

CHROME_VERSION=$(VERSION)

JS = $(wildcard shared/js/*.js)
JSFILES = $(notdir $(JS))
DIRS = $(dir $(JS))

TARGETS = $(addprefix $(SAFARI_SRC_DIR)/, $(JSFILES))

$(SAFARI_SRC_DIR)/%.js: %.js
  cp $< $@

vpath %.js $(DIRS)

pkg_safari:
	$(XAR) -czf $(SAFARI_NAME).safariextz --distribution $(SAFARI_NAME).safariextension
	$(XAR) --sign -f $(SAFARI_NAME).safariextz --digestinfo-to-sign digest.dat \
	   --sig-size `cat $(BUILD_DIR)/size.txt` --cert-loc $(BUILD_DIR)/cert.der \
		 --cert-loc $(BUILD_DIR)/cert01 --cert-loc $(BUILD_DIR)/cert02
	openssl rsautl -sign -inkey $(BUILD_DIR)/key.pem -in digest.dat -out sig.dat
	$(XAR) --inject-sig sig.dat -f $(SAFARI_NAME).safariextz
	rm -f sig.dat digest.dat
	mv $(SAFARI_NAME).safariextz $(SAFARI_NAME)-v$(SAFARI_VERSION).safariextz

pkg_chrome: chrome/js chrome/css
		cd chrome && \
		zip add-to-dash-v$(CHROME_VERSION).zip * && \
		mv add-to-dash-v$(CHROME_VERSION).zip ../add-to-dash-v$(CHROME_VERSION).crx

chrome/js: shared/js
	[[ ! -e chrome/js ]] || (echo "ERROR: chrome/js exsts. make clean and used the shared copy" && exit 1)
	cp -R shared/js chrome/js

chrome/css: shared/css
	[[ ! -e chrome/css ]] || (echo "ERROR: chrome/css exsts. make clean and used the shared copy" && exit 1)
	cp -R shared/css chrome/css



clean:
		rm -rf *.safariextz chrome/js chrome/css
