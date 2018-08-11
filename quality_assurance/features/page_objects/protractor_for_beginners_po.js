'use strict'
const Helper = require('../shared_libs/helper.js')

class ProtractorPage {
  constructor () {
    this.helper = new Helper()
    this.inputName = $('input[ng-model="yourName"]')
    this.inputSearch = $('input[id="projects_search"]')
    this.resultText = $('h1[class="ng-binding"]')
    this.resultSearch = $('tr a[class="ng-binding"]')
  }

  open (link) {
    return browser.get(link)
  }

  fillFieldText (text) {
    this.helper.elementIsPresenceDom(this.inputName)
    return this.inputName.sendKeys(text)
  }

  fillFieldSearch (text) {
    this.helper.elementIsVisible(this.inputSearch)
    return this.inputSearch.sendKeys(text)
  }
}

module.exports = ProtractorPage
