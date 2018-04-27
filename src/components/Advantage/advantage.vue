<template>
 <div class="about-card advantege">
    <div class="container container-small">
        <adv-item header='Обслуживание<br/>карты  0%' img='a-img1.png'>
                <p class="fw300">Если ежедневный остаток на счёте вашей карте от 10 000 рублей</p>
                <p class="fw300">или у вас есть хотя бы один действующий срочный онлайн-вклад в любой валюте</p>
                <p class="fw300">или 2 календарных месяца для впервые выпущенных карт</p>
                <p class="c-blue fw300">Подробнее в <a href="https://www.russipoteka.ru/personal/tarifs/" class="c-blue fw300">тарифах</a></p>
        </adv-item>
        <adv-item header='Пополнение счёта' img='a-img3.png'>
                <ul>
                    <li>межбанковским переводом</li>
                    <li>с карты другого банка через сервис онлайн-пополнения на нашем сайте</li>
                    <li>через интернет-банк или мобильное приложение РИБ мобайл</li>
                    <li>наличными через банкоматы ВТБ 24 и Почта Банка</li>
                </ul>
        </adv-item>
        <adv-item header='Снятие наличных' img='a-img2.png'>
                <ul>
                    <li>0% - до 100 000 рублей в месяц в сети банкоматов Банка и банков-партнёров в России <i>(ВТБ, ВТБ 24, ВТБ Банк Москвы и Почта Банк)</i></li>
                    <li>От 1% в других случаях</li>
                </ul>
                <p class="c-blue fw300">Подробнее в <a href="https://www.russipoteka.ru/personal/tarifs/" class="c-blue fw300">тарифах</a></p>
        </adv-item>
    </div>
  </div>
</template>
<script>
import AdvItem from '../../components/Advantage/item.vue'
export default {
    name: 'Advantage',
    components: {AdvItem}
  
}
</script>
<style>
.advantege .container{
    padding: 110px 0 125px;
}

</style>


