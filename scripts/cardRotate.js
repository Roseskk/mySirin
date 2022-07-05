const el = document.getElementsByClassName('display')
const img = document.querySelectorAll('.hide')
const display = document.querySelectorAll('.display')
const teachersContent = document.querySelectorAll('.teachers__content')
const teachersSpan = document.querySelectorAll('.teachers__span')
const teachersReverse = document.querySelectorAll('.teachers__card__reverse')

function Swipe(id) {
    const text = [
        {id : 0, title : 'руководитель и основатель ансамбля “СИРИН”.', text1 : 'Балетмейстер, педагог-репетитор ансамбля.', text2 : 'Санкт-Петербургский гуманитарный университет профсоюзов, факультет хореографии по квалификации Методист народного художественного творчества, балетмейстер-педагог хореографии.', text3 : 'Ветеран труда.', text4: '' },
        {id : 1, title : 'Директор ансамбля.', text1 : 'Организатор фестивалей и конкурсов', text2 : 'Администратор', text3 : 'Костюмер', text4 : 'Выпускница Российского Государственного Социального Университета, специалист по связям с общественностью в социальной сфере.' },
        {id : 2, title : 'Педагог по ритмике.', text1 : 'Выпускник ансамбля.', text2 : 'Музыкант, классический гитарист.', text3 : 'Звукорежиссёр компании Зимин аудио”Звуковые решения”.', text4: '' },
        {id : 3, title : 'Педагог ансамбля по хореографии.', text1 : 'Действующая артистка Балета ГААНТ имени И.А.Моисеева.', text2 : 'Лауреат Международных и Всероссийских фестивалей и конкурсов.', text3 : 'Школа-студия (училище) при ГААНТ имени Игоря Моисеева.', text4: '' },
        {id : 4, title : 'Педагог ансамбля по мужскому классу.', text1 : 'Заслуженный народный артист РФ.', text2 : 'Российский танцовщик, действующий солист Балета ГААНТ имени И.А.Моисеева.', text3 : 'Московская государственная академия хореографии, педагог-хореограф по специальности Педагогика хореографии.', text4: '' },
        {id : 5, title : 'Педагог подготовительных групп.', text1 : 'Солистка и воспитанница ансамбля.', text2 : 'Лауреат Международных и Всероссийских фестивалей и конкурсов.', text3 : 'ФИПК: педагог дополнительного образования(музыкально-театральное искусство, хореографическое искусство, художественно-эстетический профиль).', text4: '' },
        {id : 6, title : 'Педагог ансамбля по акробатике.', text1 : 'Артистка балета в Большом Московсковском цирке на пр. Вернадского.', text2 : 'Сотрудник Департамента физической культуры и спорта г. Москвы.', text3 : 'Государственное училище циркового и эстрадного искусства им. М.Н. Румянцева /Карандаша/ (ГУЦЕИ), по специальности “Цирковое искусство”.', text4: '' },
    ]
    if(el[id].classList.contains('reverse')) {
        display[id].classList.add('reverse1')
        display[id].classList.remove('reverse')
        setTimeout(()=>{
            teachersContent[id].classList.remove('teachers__content__on')
            img[id].classList.remove('on')
            teachersSpan[id].classList.remove('none')
            teachersReverse[id].innerHTML = '';
        },500)
    } else  {
        display[id].classList.remove('reverse1')
        display[id].classList.add('reverse')
        setTimeout(()=>{
            img[id].classList.add('on')
            teachersContent[id].classList.add('teachers__content__on')
            teachersSpan[id].classList.add('none')
            teachersReverse[id].innerHTML = `<li class="teachers__content__list card_rotate__title ">${text[id].title}</li><li class="teachers__content__list first__list">${text[id].text1}</li><li class="teachers__content__list first__list">${text[id].text2}</li><li class="teachers__content__list first__list">${text[id].text3}</li>${text[id].text4 === '' ? '' : `<li class="teachers__content__list first__list">${text[id].text4}</li>`}`;
        },500)
    }
}