<template>
    <div class="fix-header">
        <div class="container">
            <a href="#" class="logo fll">
                <img src="./../../assets/images/c-logo.png" alt=""/>
            </a>
            <span class="slogan fll c-blue">Мы делаем мечту доступной</span>
            <a @click="scroll" class="green-btn flr c-white fw600 scroll">Заказать карту</a>
        </div>
    </div>
</template>

<script>

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.fix-header').addClass('fix');
        }
        else {
            $('.fix-header').removeClass('fix');
        }
    });
    export default {
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
.fix-header{
    position: fixed;
    left: 0;
    right: 0;
    background: #fff;
    height: 70px;
    box-shadow: 0 0 6px rgba(0,0,0,0.25);
    z-index: 3000;
    top: -80px;
    -webkit-transition: top 0.3s linear;
    -moz-transition: top 0.3s linear;
    -ms-transition: top 0.3s linear;
    -o-transition: top 0.3s linear;
    transition: top 0.3s linear;
}
    .fix-header.fix{
        top: 0;
    }
    .fix-header .container{
        padding-top: 15px;
    }
    .fix-header .logo{
        margin-right: 20px;
    }
    .fix-header .slogan{
        font-size: 18px;
        padding-top: 7px;
    }
    .slogan{
    display: block;
    font-size: 28px;
    padding-top: 8px;
    }

.green-btn, .blue-btn{
    display: block;
    text-align: center;
    background: #7fa133;
    width: 196px;
    height: 38px;
    border-radius: 19px;
    font-size: 16px;
    padding-top: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}

.blue-btn{
    background: #3b719a;
    font-size: 18px;
    height: 50px;
    border-radius: 25px;
    padding-top: 15px;

}

.blue-btn:hover{
    background: #0083e7;
}
.green-btn:hover{
    box-shadow: none;
    background: #92d300;
    cursor: pointer;
}
@media(max-width: 1023px){
        .slogan, .header .phones{
        font-size: 18px;
    }

    .header .phones{
        padding-top: 9px;
    }    
    .header .info .name, .header .item p{
        font-size: 35px;
        line-height: 40px;
    }   

    .header .logo{
        margin-right: 30px;
    }

    .header .logo, .header .logo img{
        width: 110px;
        height: auto;
    }
}
@media(max-width: 767px){
    .header .phones{
        display: none;
    }

    .header .logo{
        margin-right: 0;
    }

    .header .slogan{
        float: right;
        font-size: 16px;
    }
}
@media(max-width: 639px){
    .fix-header .slogan{
        display: none;
    }
}
@media(max-width: 479px){
    .fix-header .logo{
        margin-right: 0;
    }
    .fix-header .green-btn{
        width: 170px;
    }
}
</style>


