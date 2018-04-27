<template>
  <div class="item">
        <div data-wow-offset="350" class="name wow fadeInLeft fw300 c-blue fll">
            <span v-html="header"></span>
            <img :src="require('./../../assets/images/' + img)" alt=""/>
        </div>
        <div data-wow-offset="350" class="arrow wow fadeInLeft fll">
            <img src="./../../assets/images/g-arr.png" alt=""/>
        </div>
        <div data-wow-offset="350" class="base wow fadeInRight flr">
            <slot></slot>
        </div>

        <div class="clr"></div>
    </div>
</template>
<script>
export default {
    name: 'AdvItem',
    props:['header','img']
}
</script>
<style>

.advantege .name img{
    display: block;
    margin-top: 20px;
}

.advantege .item .arrow{
    margin-right: 0;
}

.advantege .item .base{
    margin-right: -70px;
    width: 520px;

}

.advantege .item + .item{
    padding-top: 80px;
}

.advantege .item .name{
    font-size: 34px;
    line-height: 50px;
    margin-top: -12px;
}

.advantege .item span.fw600{
    font-size: 22px;
    line-height: 30px;
    display: block;
    margin-bottom: 10px;
    position: relative;
}


.advantege .item span.fw600 .faq{
    display: inline-block;
    position: relative;
    right: auto;
    margin-left: 5px;
}

.advantege .item .big-pad{
    padding-top: 30px;
}
@media(max-width: 1239px){
    .advantege{
        overflow: hidden !important;
    }
}
@media(max-width: 1023px){

    .advantege .item .base{
        float: none;
        margin-right: 0;
        margin-left: 330px;
        width: auto;
    }

    .advantege .item .base br{
        display: none;
    }
}
@media(max-width: 767px){

    .advantege .item .base{
        margin-left: 0;
    }

    .advantege img{
        display: none;
    }

    .advantege .item .base .attention{
        margin-left: 0;
        background: transparent;
        padding-left: 20px;
    }

    .advantege .name img{
        display: none;
    }

}
@media(max-width: 639px){

}
@media(max-width: 479px){

    .advantege .item p{
        font-size: 16px;
    }

    .advantege .item .name{
        font-size: 24px;
        line-height: 28px;
    }

}
</style>


