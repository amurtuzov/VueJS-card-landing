<template>
 <div class="programm">
        <div class="container container-small">

            <div class="info flr">

                <h2 data-wow-offset="350" class="c-white wow fadeInLeft fw300">
                    Программа лояльности
                    <br/>«ОНЛАЙН-ПОКУПКИ»
                </h2>

                <strong data-wow-offset="350" class="c-yell wow fadeInLeft">
                    До 8,5% cash-back с каждой
                    <br/>покупки
                </strong>

                <ul data-wow-offset="350" class="c-white wow fadeInLeft">
                    <li>
                        <span class="c-yell num fw600">1</span>
                        Зарегистрируйтесь в сервисе
                        с помощью «Накопительной карты»
                        и выберите магазин партнёра
                    </li>
                    <li>
                        <span class="c-yell num fw600">2</span>

                        Перейдите по ссылке в магазин
                        и совершите покупку
                    </li>
                    <li>
                        <span class="c-yell num fw600">3</span>
                        Оплатите «Накопительной картой»
                        и получите Cash-back до 8,5%
                        от суммы покупки
                    </li>
                </ul>

            </div>

            <img data-wow-offset="350" class="wow fadeInLeft" src="./../assets/images/pr-img.png" alt=""/>


            <div class="clr"></div>
        </div>
    </div>  
</template>
<script>
export default {
  
}
</script>
<style>
.programm{
    background: url("./../assets/images/pr-bg.jpg") no-repeat center center;
    background-size: cover;
    overflow: hidden;
}

.programm img{
    display: block;
    position: absolute;
    top: 50%;
    right: 70%;
    margin-top: -313px;
}

.programm .info{
    max-width: 410px;
    margin-right: 40px;

}

.programm .container{
    position: relative;
    padding: 70px 0;
    min-height: 595px;
}

.programm li, .easy li{
    position: relative;
    font-size: 18px;
    line-height: 24px;
    padding-left: 75px;
    font-weight: 300;
    min-height: 72px;

}
.programm li + li{
    margin-top: 20px;
}

.programm .num, .easy .num{
    position: absolute;
    border: 3px solid #b0b1b3;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 18px;
    text-align: center;
    font-size: 32px;
    padding-top: 7px;

}

.programm h2{
    margin-bottom: 20px;
}

.programm h2 + strong{
    line-height: 32px;
    display: block;
    margin-bottom: 30px;
}

@media(max-width: 1239px){
    .programm img{
        right: 60%;
    }
}
@media(max-width: 1023px){
    .programm .info{
        margin-right: 0;
    }
}
@media(max-width: 767px){
    .programm img{
        right: auto;
        top: auto;
        bottom: 0;
        width: auto;
        max-width: 320px;
        left: 50%;
        margin-left: -160px;

    }


    .programm .container{
        padding-bottom: 0;
    }

    .programm .info{
        width: auto;
        max-width: inherit;
        padding-bottom: 370px;
    }
}
@media(max-width: 639px){

}
@media(max-width: 479px){
        .programm h2 + strong br{
        display: none;
    }

    .programm li, .easy li{
        font-size: 16px;
        line-height: 24px;
    }

}
</style>


