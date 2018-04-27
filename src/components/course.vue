<template>
    <div class="course">
        <div class="container container-small">
            <div class="item">
                <div data-wow-offset="350" class="name wow fadeInLeft fw300 c-blue fll" style="visibility: visible; animation-name: fadeInLeft;">
                    Выгодный обмен валюты <br> в интернет-банке 
                    <img src="./../assets/images/a-img4.png" alt="">
                </div>

                <div data-wow-offset="350" class="base wow fadeInRight flr" style="visibility: visible; animation-name: fadeInRight;">
                    <ul>
                        <li>обмен между рублями РФ, долларами США и евро</li>
                        <li>минимальная сумма 10$/евро</li>
                        <li>без комиссии</li>
                    </ul>
                </div>
                <div class="clr"></div>
            </div>
        </div>
    </div>  
</template>
<style>
.course .container {
    padding: 110px 0 100px;
}
.course .name {
    width: 440px;
}
.course .name img{
    display: block;
    margin-top: 20px;
}
.course  .item .name{
    font-size: 34px;
    line-height: 50px;
    margin-top: -12px;
}
.course .item .base{
    margin-right: -70px;
    width: 520px;

}
.course .base {
    max-width: 400px;
}

.course ul li{
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    position: relative;
    padding-left: 15px;
}

.course ul li:before{
    display: block;
    content: '–';
    position: absolute;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    left: 0;
    top: 0;
}

.course ul li + li{
    margin-top: 10px;
}


.course ul + p{
    margin-top: 10px;
}
@media(max-width: 1279px){

}
@media(max-width: 1239px){
    .course {
    overflow: hidden !important;
}

}
@media(max-width: 1023px){
    .course .item .base {
        margin-left: 480px;
        float: none;
        margin-right: 0;        
        width: auto;
    }
}
@media(max-width: 767px){
    .course .name {
    float: none;
    margin-bottom: 40px;
    }
    .course .name img{
        display: none;
    }
    .course .item .base{
        float: none;
        margin-right: 0;
        margin-left: 330px;
        width: auto;
    }
.course .item .base {
    margin-left: 0;
}

}
@media(max-width: 639px){

}
@media(max-width: 479px){

}
</style>


