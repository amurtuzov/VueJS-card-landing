<template>
  <div class="income c-white">
        <div class="container container-small">
            <h2 class="fw300">
                Рассчитайте доход
                <br/>по вашей карте<ToolTip show="ttp03"></ToolTip>
            </h2>


            <div class="income-slider-wrap">

                <div class="item">
                    <p class="fw600">Среднемесячный остаток, <span class="rub">q</span></p>
				    <slider name = "balance" :start="summBalance" :min="rangeBalance.min" :max="rangeBalance.max" :step="rangeBalance.step" v-model="dataBalance"></slider>                                        
                </div>
                <div class="item">
                    <p class="fw600">Покупки по карте в месяц, <span class="rub">q</span></p>
                    <slider name = "buy" :start="summBuy" :min="rangeBuy.min" :max="rangeBuy.max" :step="rangeBuy.step" v-model="dataBuy"></slider>

                </div>


            </div>


            <div class="round round1">
                <div class="round round2">
                    <div class="round round3">
                        <div class="round round4">
                            <div class="ins">
                                <p class="fw600">За год мы начислим вам</p>

                                <span class="amount fw600" id="total">
                                    {{format_number(total)}}
                                </span>

                                <p class="fw600">рублей</p>
			
                                <a href="#form" class="blue-btn fw600 scroll">Заказать карту</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="tooltipster-hideboxes">
            <div id="ttp03" class="ttp-box">
                <p>При расчёте дохода в виде Cash-back от покупок применяется минимальная базовая ставка в размере 1.5% от суммы покупки. В действительности вы получите больше!</p>
            </div>
        </div>
    </div>
</template>
<script>
import ToolTip from '../../components/tooltip.vue'
import Slider from '../../components/income/slider.vue'
function changeCircle(el, percent) {
    var circles = {
            large: {selector: '.round1', max: 780, min: 540, margin: [-390, 0]},
            middle: {selector: '.round2', max: 660, min: 460, margin: [-330, -330]},
            small: {selector: '.round3', max: 520, min: 360, margin: [-260, -260]}
        },
        size = parseInt(circles[el].max - (circles[el].max - circles[el].min) * percent),
        margin = (circles[el].max - size) / 2,
        dma = circles[el].margin;
    $(circles[el].selector).css({
        width: size + 'px',
        height: size + 'px',
        margin: (margin + dma[0]) + 'px 0 0 ' + (margin + dma[1]) + 'px'
    });
}

function changeCircles(percent) {
    $.each(['large', 'middle', 'small'], function (i, e) {
        changeCircle(e, percent);
    });
}
export default {
    name: 'Income',
    components: {ToolTip,Slider},
    props: {
    procBalance: {
        type: Number,
        default: 7
    },
    procCashBack: {
        type: Number,
        default: 1.5
    },
    currency: {
        type: String,
        default: 'руб.'
    },
    summBuy: {
        type: Number,
        default: 40000
    },
    summBalance: {
        type: Number,
        default: 60000
    },
    rangeBuy: {
        type: Object,
        default() { 
            return  {
                min: 5000,
                max: 300000,
                step: 5000
            }
        }
    },
    rangeBalance: {
        type: Object,
        default() { 
            return  {
                min: 5000,
                max: 300000,
                step: 5000
            }
        }
    }
},
data() {
    return {
        dataBuy:this.summBuy,
        dataBalance:this.summBalance
    }
},
computed: {
    proc_balance() {
        return Math.round(parseInt((this.dataBalance * this.procBalance)/100))
    },
    proc_cashback() {
        return Math.round(parseInt((this.dataBuy * this.procCashBack)/100)*12)
    },
    total() {	
        var total = this.proc_balance + this.proc_cashback;
        changeCircles(1 - total / 230000);		  	
        return total;
    }

    
},
methods: {
    format_number(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1 ")
    }
}
}

</script>
<style>
.income-slider-wrap {
    width: 450px;
}
.income{
    background: rgb(0,72,124);
    background: -moz-linear-gradient(top, rgba(0,72,124,1) 0%, rgba(0,82,142,1) 100%);
    background: -webkit-linear-gradient(top, rgba(0,72,124,1) 0%,rgba(0,82,142,1) 100%);
    background: linear-gradient(to bottom, rgba(0,72,124,1) 0%,rgba(0,82,142,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00487c', endColorstr='#00528e',GradientType=0 );
    overflow: hidden;
}

.income h2 {
    position: relative;
    display: table;
}

.income .container{
    position: relative;
    padding-top: 60px;
    min-height: 525px;

}


.income .item p, .income .item p *{
    font-size: 18px;
    color: #7590ad;
    line-height: 24px;
    margin-bottom: 15px;
}


.income .item + .item{
    padding-top: 55px;
}


.round{
    border-radius: 50%;
    position: absolute;
}


.round1{
    left: 45%;
    width: 780px;
    height: 780px;
    background: rgba(127, 161, 51, 0.1);
    top: 50%;
    margin-top: -390px;

}

.round2{
   left: 50%;
   top: 50%;
   width: 660px;
   height: 660px;
   background: rgba(127, 161, 51, 0.2);
   margin: -330px 0 0 -330px;
}


.round3{
    left: 50%;
    top: 50%;
    width: 520px;
    height: 520px;
    background: rgba(127, 161, 51, 0.3);
    margin: -260px 0 0 -260px;
}


.round4{
    left: 50%;
    top: 50%;
    width: 386px;
    height: 386px;
    background: rgba(127, 161, 51, 1);
    margin: -193px 0 0 -193px;
}

.round4 .ins{
    display: table-cell;
    width: 386px;
    height: 386px;
    vertical-align: middle;
    text-align: center;
}

.round4 .ins p{
    font-size: 18px;
}

.round4 .ins span{
    display: block;
    margin: 20px 0 10px;
    font-size: 72px;
}

.round4 .blue-btn{
    margin: 40px auto 0;
}


@media(max-width: 1023px){
    .round1{
        left: 33%;
    }

    .slider-wrap{
        width: 380px;
    }
}
@media(max-width: 767px){
    .round{
        position: relative;
        width: auto !important;
        height: auto !important;
        top: auto !important;
        left: auto !important;
        margin: 0 !important;
        background: transparent !important;

    }
    .round4 .ins{
        display: block;
        width: auto;
        height: auto;
        padding: 60px 0 75px;
    }

    .income-slider-wrap{
        width: 100%;
    }
}
@media(max-width: 639px){

}
@media(max-width: 479px){
        .round4 .ins p{
        font-size: 14px;
    }

    .round4 .ins span{
        font-size: 40px;
    }

    .round4 .blue-btn{
        font-size: 16px;
        width: 170px;
        height: 46px;
        border-radius: 23px;
        margin-top: 20px;
    }

}

</style>


