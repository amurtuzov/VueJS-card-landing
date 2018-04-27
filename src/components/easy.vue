<template>
  
    <div class="easy">
        <div class="container container-small">

            <h2 data-wow-offset="350" class="c-blue wow fadeInUp fw300">
                Получить карту очень просто
            </h2>

            <!-- <img data-wow-offset="350" src="assets/images/g-card1.png" alt="" class="fll wow fadeInLeft"/> -->
            <!-- <img data-wow-offset="350" src="images/g-card2.png" alt="" class="fll wow fadeInLeft"/> -->
            <img data-wow-offset="350" src="./../assets/images/g-card3.png" alt="" class="fll wow fadeInLeft"/>

            <div data-wow-offset="350" class="info wow fadeInRight fll">
                <ul>
                    <li><span class="num fw600">1</span>Оформите заявку он-лайн</li>
                    <li><span class="num fw600">2</span>Наш курьер доставит карту в удобное
                        <br/>вам время и место
                    </li>
                    <li><span class="num fw600">3</span>После активации карты 
                        <br/>начинайте зарабатывать
                    </li>
                </ul>
            </div>

            <div class="clr"></div>

        </div>
    </div>
</template>
<style>
.easy .container{
    padding: 60px 0 70px;
}
.easy .info{
    margin-left: 80px;
    padding-top: 15px;
}
.easy img{
    display: block;
    margin-left: -10px;
}
.easy .num{
    color: #83a439;
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
@media(max-width: 1279px){

}
@media(max-width: 1239px){

}
@media(max-width: 1023px){
    .easy img{
        width: auto;
        height: auto;
        max-width: 100%;
        margin-bottom: 50px;
        float: none;
    }

    .easy .info{
        float: none;
        width: auto;
        margin: 0;

    }
}
@media(max-width: 767px){

}
@media(max-width: 639px){

}
@media(max-width: 479px){

}
</style>


