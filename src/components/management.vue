<template>
      <div class="management">
        <div class="container container-small">
            <h2 data-wow-offset="350" class="fw300 wow fadeInLeft c-blue">Управляйте вашей картой
                <br/>через интернет-банк
                <br/>и мобильные приложения</h2>

            <div data-wow-offset="350" class="info wow fadeInLeft">


            <ul class="arr-marker">
                <li>Информация о картах и счетах.</li>
                <li>Платежи и межбанковские переводы.</li>
                <li>Быстрые переводы с карты на карту.</li>
            </ul>

            </div>

            <img data-wow-offset="350" class="wow fadeInRight" src="./../assets/images/phones.png" alt=""/>
        </div>
    </div>
</template>
<style>
.management{
    background: url("./../assets/images/m-bg.jpg") no-repeat right center;
    background-size: cover;
    position: relative;

}

.management .container{
    min-height: 575px;
    padding: 110px 0;
}

.management img{
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
}

.management h2, .management .info{
    position: relative;
    z-index: 200;
}
.arr-marker li{
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    background: url("./../assets/images/g-arr.png") no-repeat left 1px;
    background-size: auto 20px;
    padding-left: 52px;
}

.arr-marker li + li{
    margin-top: 40px;
}
@media(max-width: 1366px){
    .management img{
        width: 500px;
        height: auto;
    }

    .management .container{
        min-height: 490px;
        padding: 70px 0;

    }
}
@media(max-width: 1279px){

}
@media(max-width: 1239px){

}
@media(max-width: 1023px){
    .management img{
        width: 350px;
    }
    .management{
        background-position: left center;
    }
}
@media(max-width: 767px){
    .management img{
        width: 320px;
    }
    .management .info{
        padding-bottom: 240px;
    }
}
@media(max-width: 639px){

}
@media(max-width: 479px){

}
</style>

