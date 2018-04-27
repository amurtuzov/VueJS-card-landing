<template>
  <div class="about-card">
        <div class="container container-small">
            <h2 data-wow-offset="100" class="fw300 wow fadeInUp c-blue">
                Зарабатывайте
                <br/>с Накопительной картой
            </h2>

            <div data-wow-offset="350" class="item wow fadeInUp">
                <div class="name fw600 fll">
                    Начисляем проценты
                    <br/>на остаток по счёту
                    <br/>до 7,0%
                </div>

                <div class="arrow fll">
                    <img src="./../../assets/images/g-arr.png" alt=""/>
                </div>

                <div class="remainder fll">
                    <span class="c-blue fw600">Остаток, <span class="rub">q</span></span>
                    <p class="fw300">700 000 ></p>
                    <p class="fw300">10 000 – 700 000</p>
                    <p class="fw300">10 000</p>
                </div>
                <div class="rate fll">
                    <span class="c-blue fw600">% ставка</span>


                    <p class="fw300">4,0%</p>

                    <p class="fw300">4,0%</p>
                    <p class="fw300">0%</p>
                </div>

                <div class="rate-more flr">

                    <span class="c-blue bigh fw600">Повышенная<br/>% ставка                         
                        <ToolTip show="ttp01"></ToolTip>
                    </span>

                    <p class="fw300">7,0%</p>
                    <p class="fw300">4,0%</p>
                    <p class="fw300">0%</p>
                </div>

                <div class="clr"></div>
            </div>

            <div data-wow-offset="350" class="item wow fadeInUp">
                <div class="name fw600 fll">
                    Возвращаем до 8,5%
                    <br/>от суммы покупок

                </div>

                <div class="arrow fll">
                    <img src="./../../assets/images/g-arr.png" alt=""/>
                </div>

                <div class="base fll">


                    <ul>
                        <li><p class="fw300"><span class="fw300">Базовая ставка Cash-back – 1,5%
                            <ToolTip show="ttp02"></ToolTip></span></p></li>
                        
                        <li>
                            <p class="fw300">Повышенная ставка Cash-back – 3%</p>
                        </li>
                        <li>
                            <p class="fw300">Cash-back Программы Лояльности "ОНЛАЙН-ПОКУПКИ" - до 7%</p>
                        </li>
                    </ul>

                    <p class="fw300 c-blue">Подробнее в <a href="https://www.russipoteka.ru/personal/tarifs/" class="c-blue">тарифах</a></p>


                </div>

                <div class="clr"></div>
            </div>
        </div>
        <div class="tooltipster-hideboxes">
            <div id="ttp01" class="ttp-box">
                <p>Повышенная процентная ставка на остаток по счёту карты (СКС) начисляется со второго календарного месяца с момента открытия СКС карты при условии проведения держателем карты и отражения в выписке по СКС за этот расчётный месяц операции по оплате товаров/услуг или пополнению СКС.</p>
            </div>
            <div id="ttp02" class="ttp-box">
                <p>Базовая ставка Cash-back составляет 1.5% от суммы покупки. Для целей расчёта Cash-back не учитываются платежи через интернет-банк/ мобильное приложение, оплата услуг страхования, ставок, пари, государственных и/или коммунальных, в т.ч. телекоммуникационных услуг, налогов, сборов, штрафов и иных подобных платежей, товаров в предприятиях торговли, не классифицируемых однозначно по виду деятельности, и др.</p>
                <p>Повышенная ставка Cash-back для определённых категорий месяца составляет 3% от суммы покупки. Категории назначаются Банком для каждого месяца.</p>
                <p>Платите «Накопительной картой» за товары и услуги партнёров Программы «ОНЛАЙН-ПОКУПКИ» и верните до 7% от Ваших покупок на счёт карты от партнёра Программы.</p>
            </div>            
        </div>
    </div>
</template>
<script>
import ToolTip from '../../components/tooltip.vue'
export default {
    name: 'CardAbout',
    components: {ToolTip},
    data()  {
        return {
            
        }
    }
  
}
</script>

<style>
.about-card .container{
    padding: 60px 0 75px;
}
.about-card .name{
    width: 330px;
    line-height: 30px;
}
.about-card .arrow{
    margin-right: 90px;
}
.about-card .arrow img{
    display: block;
}
.about-card  span.c-blue{
    font-size: 16px;
    display: block;
    margin-bottom: 25px;
    position: relative;
}
.about-card .item p{
    font-size: 18px;
    line-height: 24px;
}
.about-card .item p + p{
    margin-top: 10px;
}
.about-card .item + .item{
    padding-top: 55px;
}
.about-card .remainder{
    width: 145px;
    margin-right: 15px;
}
.about-card .rate{
    width: 75px;
    text-align: right;
}
.about-card .rate-more{
    text-align: right;
}
.faq{
    position: absolute;
    color: #747474;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    background: #e6f4ff;
    display: block;
    right: -25px;
    top: -5px;
    padding-top: 1px;
    cursor: pointer;
    line-height: 18px !important;
    font-size: 18px !important;

}
.about-card .base p.c-blue{
    margin-left: 0;
    font-size: 16px;
}

.about-card .base p>span{
    display: inline-block;
    position: relative;
}

.about-card .base a{
    border-bottom: 1px solid #d5e7f5;

}

.about-card .base a:hover{
    border-color: #005596;
}
.about-card .base {
    max-width: 400px;
}
.about-card ul li{
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    position: relative;
    padding-left: 15px;
}

.about-card ul li:before{
    display: block;
    content: '–';
    position: absolute;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    left: 0;
    top: 0;
}

.about-card ul li + li{
    margin-top: 10px;
}

.about-card ul + p{
    margin-top: 10px;
}
.tooltipster-hideboxes {
    display: none;
}
.ttp-box p {
    margin: 16px 0;
    padding: 0 12px;
}
.faq:hover{
    background: #b1ddff;

}


@media(max-width: 1023px){
    .about-card .arrow{
        display: none;
    }
    .about-card .rate-more{
        margin-right: 25px;
    }

}
@media(max-width: 767px){
     .about-card .name{
        float: none;
        margin-bottom: 40px;
    }

    .about-card .name br{
        display: none;
    }

    .about-card .remainder, .about-card .rate,  .about-card .rate-more{
        width: 33.33%;
        margin-right: 0;
    }

    .about-card .rate-more .faq{
        right: 0;
        top: -25px;
    }

}
@media(max-width: 639px){

}
@media(max-width: 479px){
    .about-card .name{
        font-size: 18px;
        line-height: 24px;
    }

    .about-card  span.c-blue{
        font-size: 12px;
    }

    .about-card .item p{
        font-size: 14px;
        line-height: 18px;

    }


    .about-card .name br{
        display: block;
    }
}
   
</style>

