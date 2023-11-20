describe('template spec', () => {
  it('Проверяет контактную информацию на веб-сайте Byndyusoft', () => {
    
    //Перейти на сайт по ссылке https://byndyusoft.com
    cy.visit('https://byndyusoft.com')
    
    //Нажать на желтую кнопку "Заказать презентацию" в разделе "Узнать больше о наших продуктах
    cy.get('.btn.btn--lg.btn--info.js-popup-callback-show').click()
    
    //Убедится, что ожидаемая ссылка на Telegram равна значению "http://t.me/alexanderbyndyu"
    cy.get('a.popup-callback__contacts-tg').should('have.attr', 'href', 'http://t.me/alexanderbyndyu')

  })
})  