<template>
    <div>
        <HeaderFix></HeaderFix>
        <div class="element-with-video-bg jquery-background-video-wrapper">
            <HeaderVideo></HeaderVideo>
         </div>
        <div class="header" :class="{mobile:mobile}">
            <div class="ins">
                <div class="top-part c-white">
                    <div class="container">
                        <a href="#" class="logo fll">
                            <img src="./../../assets/images/logo.png" alt=""/>
                        </a>
                        <span class="slogan fll fw300">Мы делаем мечту доступной</span>
                        <div class="phones flr">
                            8 (800) 555-25-05 / 8 (495) 684-11-11
                        </div>
                    </div>
                </div>

                <div class="mid-part c-white">
                    <div class="container">
                        <div class="info fll">
                            <p class="fw300 name wow fadeInDown">Накопительная карта</p>
                            <div data-wow-delay="0.3s" class="item wow fadeIn fll">
                                <span class="fw300">% на остаток до</span>
                                <p>7,0%</p>
                            </div>
                            <div data-wow-delay="0.6s" class="item wow fadeIn fll">
                                <span class="fw300">Cash-back до</span>
                                <p>8,5%</p>
                            </div>
                            <div data-wow-delay="0.9s" class="item wow fadeIn fll">
                                <span class="fw300">Обслуживание от</span>
                                <p>0<span class="rub">q</span></p>
                            </div>
                            <div class="clr"></div>
                            <a @click="scroll" class="op-btn scroll">Заказать карту</a>
                        </div>
                        <!-- <img data-wow-delay="1.2s" src="images/g-card1.png" class="flr wow fadeInUp" alt=""/> -->
                        <!-- <img data-wow-delay="1.2s" src="images/g-card2.png" class="flr wow fadeInUp" alt=""/> -->
                        <img data-wow-delay="1.2s" src="./../../assets/images/g-card3.png" class="flr wow fadeInUp" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var isMobile = require('ismobilejs');
    import HeaderFix from './header-fix.vue'
    import HeaderVideo from './header-video.vue'

    export default {
        name: 'Header',
        components: {HeaderFix,HeaderVideo},
        data () {
            return {
                mobile: isMobile.any
            }   
        },
        methods: {
            scroll() {
                let form = document.querySelector("#form");
                let hashval = form.getAttribute("id");
                form.scrollIntoView({behavior: "smooth", block: "start"})
                history.pushState(null, null, ("#" + hashval));
            }
        }
    }
</script>
<style>

.header{
    position: relative;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
}
.header .top-part{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
}

.header .top-part .container{
    padding-top: 30px;
    overflow: auto;
}

.header .ins{
    display: table;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1000;
    vertical-align: middle;

}

.header .logo, .header .logo img{
    display: block;
}

.header .logo{
    margin-right: 40px;
}

.header .phones{
    padding-top: 15px;
    font-size: 22px;
    font-family: Arial, sans-serif;
}



.header .mid-part{
    vertical-align: middle;
    display: table;
    width: 1200px;
    height: 100%;
    margin: 0 auto;

}

.header .mid-part .container{
    display: table-cell;
    height: 100%;
    vertical-align: middle;
    padding-top: 80px;
}

.header .info .name{
    font-size: 68px;
    margin-bottom: 25px;
    line-height: 68px;
}

.header .mid-part img{
    display: block;
    margin-right: -8px;
}

.header .item p{
    font-size: 60px;
    padding-top: 15px;
    line-height: 65px;
}

.header .item{
    margin-bottom: 60px;
}

.header .item + .item{
    margin-left: 50px;
}

.header.mobile{
    height: auto;
    background: url("./../../assets/images/video-poster.jpg") no-repeat center center;
    background-size: cover;
}

.header.mobile .ins, .header.mobile .mid-part, .header.mobile .mid-part .container{
    display: block;
    height: auto;
    width: auto;

}

.header.mobile .mid-part .container{
    padding: 140px 0 75px;
    overflow: hidden;
}


.c-blue{
    color: #005596;
}
.element-with-video-bg {
    background-image: url('./../../assets/images/video-poster.jpg');
    pointer-events: none;
    position: absolute !important;

}
.op-btn{
    display: inline-block;
    border: 3px solid #fff;
    text-align: center;
    width: 260px;
    height: 50px;
    border-radius: 25px;
    padding-top: 8px;
    font-size: 22px;
}

.op-btn:hover{
    background: rgba(0,0,0,0.5);
    cursor: pointer;
}
@media(max-width: 1279px){
    .header .mid-part{
    width: 1240px;
    }
}
@media(max-width: 1239px){
     .header .mid-part{
      width: 1024px;
    }

    .header .info .name{
        font-size: 62px;
        line-height: 62px;
    }

    .header .mid-part img{
        width: 320px;
        height: auto;
    }
}
@media(max-width: 1023px){
    .header .item{
        margin-bottom: 50px;
    }
    .header .item>span{
        font-size: 16px;
    }
    .header .item + .item{
        margin-left: 30px;
    }
    .header .mid-part img{
        width: 300px;
    }
}
@media(max-width: 767px){
    .header .mid-part img{
    display: none;
    }
    .header .item p{
        font-size: 50px;
    }
}
@media(max-width: 639px){

    .header .info .name, .header .item p{
        font-size: 35px;
    }
    .header .op-btn{
        font-size: 18px;
        height: 40px;
        display: block;
        margin: 0 auto;
        border-radius: 20px;
        border-width: 2px;
    }

    .header .info{
        float: none;
    }

    .header .info .name{
        font-weight: 600;
    }
}
@media(max-width: 479px){
    .header .item{
        float: none;
    }

    .header .item{
        margin-bottom: 10px;

    }

    .header .item + .item{
        margin-left: 0;
    }

    .header .item *{
        display: inline-block;
        vertical-align: baseline;
    }

    .header .item > span{
        width: 155px;
    }

    .header .op-btn{
        margin-top: 50px;
    }
}
</style>


