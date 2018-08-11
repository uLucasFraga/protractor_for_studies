// quality_assurance/tests/features/step_definitions/protractor_for_beginners_steps.js

const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

const AngularPage = require('../page_objects/protractor_for_beginners_po')
const page = new AngularPage()

Given('que eu esteja na página', async function () {
  await page.open('/')
})

When('preencher o campo de texto com o {string}', async function (name) {
  await page.fillFieldText(name)
})

Then('verifico que o texto {string} foi validado com sucesso', async function (text) {
  await expect(page.resultText.getText())
    .to.eventually.equal(text)
})

When('preencher o campo da pesquisa com {string}', async function (search) {
  await page.fillFieldSearch(search)
})

Then('verifico que a pesquisa foi feita com sucesso', async function () {
  await expect(page.resultSearch.getText())
    .to.eventually.include('AngularJS')
})
