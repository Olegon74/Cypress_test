/// <reference types="cypress" />

describe('Тест контактной информации Byndyusoft', () => {
    it('Проверяет контактную информацию на веб-сайте Byndyusoft', () => {
        // Открыть веб-сайт
        cy.visit('https://www.google.ru/')

        // Ввести "Byndyusoft" в строку поиска и нажать Enter
        cy.get('input[name="q"]').type('Byndyusoft{enter}')

        // Нажать на перую ссылку из результата поиска
        cy.get('div#search a').first().click()

        // Нажать на желтую кнопку "Заказать презентацию" в разделе "Узнать больше о наших продуктах
        cy.contains('Узнайте больше о наших продуктах').parent().find('button').click()

        // Убедится, что ожидаемая ссылка на Telegram равна значению "http://t.me/alexanderbyndyu"
        cy.get('a').should('have.attr', 'href', 'http://t.me/alexanderbyndyu')
    })
})