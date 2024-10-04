import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зашел на сайт
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
        });

        afterEach('Конец теста', function () {
            cy.get(result_page.close).should('be.visible'); // Есть крестик и он виден пользователю
            });
            
    it('Верный логин и верный пароль ДЗ №1', function () {
         cy.get(main_page.email).type(data.login); // Ввел верный логин
         cy.get(main_page.password).type(data.password); // Ввел верный пароль
         cy.get(main_page.login_button).click(); // Нажали кнопку войти

         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Видим текст успешной авторизации
         cy.get(result_page.title).should('be.visible'); // Текст об авторизации виден пользователю
     });

     it('Проверка восстановления пароля ДЗ № 2', function () {

        cy.get(main_page.fogot_pass_btn).click(); // Нажал на восстановление пароля
        
        cy.get(recovery_page.email).type(data.login); // Ввел почту для восстановления
        cy.get(recovery_page.send_button).click(); // Нажал "Отправить код"

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Видим текст отправки восстановления пароля на email
        cy.get(result_page.title).should('be.visible'); // Текст об отправки на email виден пользователю
        
    });

     it('Верный логин и неверный пароль ДЗ № 3', function () {
        cy.get(main_page.email).type(data.login); // Ввел верный логин
        cy.get(main_page.password).type('iLoveqastudio7'); // Ввел неверный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Видим текст неуспешной авторизации
        cy.get(result_page.title).should('be.visible'); // Текст об авторизации виден пользователю
    });

    it('Неверный логин и верный пароль ДЗ № 4', function () {
        cy.get(main_page.email).type('germa@dolnikov.ru'); // Ввел неверный логин
        cy.get(main_page.password).type(data.password); // Ввел верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Видим совп. текста "Такого логина или пароля нет"
        cy.get(result_page.title).should('be.visible'); // Текст "Такого логина или пароля нет" видно пользователю 
    });

    it('Нет @ в логине и верный пароль ДЗ № 5', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); // Ввел логин без @
        cy.get(main_page.password).type(data.password); // Ввел верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти

        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Видим текст неуспешной валидации логина
        cy.get(result_page.title).should('be.visible'); // Текст об авторизации виден пользователю
    });

    it('Проверка на приведение к строчным буквам в логине ДЗ № 6', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Ввел верный логин, но некоторые буквы большие
        cy.get(main_page.password).type(data.password); // Ввел верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Видим текст успешной авторизации
        cy.get(result_page.title).should('be.visible'); // Текст об авторизации виден пользователю
    });
 })
