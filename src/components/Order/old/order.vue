<template>
      <div class="form" id="form">
        <div class="container container-small">

            <h2 data-wow-offset="350" class="fw300 c-blue wow fadeInUp">
                Закажите накопительную карту сейчас 
            </h2>
            <div data-wow-offset="350" class="form-menu wow fadeInUp bxs">
                <div class="steps-boxes-box bxs">
                    <ul class="tabs">
                        <li :class="{active:currentstep == 1}">1. ФИО</li>
                        <li :class="{active:currentstep == 2}">2. Паспортные данные</li>
                        <li :class="{active:currentstep == 3}">3. Адрес</li>
                        <li :class="{active:currentstep == 4}">4. Контрольные вопросы</li>
                    </ul>
                    <div class="step-boxes">                        
                        <div  class="step-box step1" v-if="currentstep == 1" @click="form_1.errors.clear($event.target.name)">
                            <div class="mini-info">
                                <p>звездочкой (<span class="red">*</span>) помечены поля обязательные для заполнения</p>
                            </div>
                            
                            <div class="form-box form-head row">
                                <div class="form-item select-card-type">
                                    <label>Тип карты:</label>
                                    <selectpin v-model="form_1.card" :options="[{'lab':'Visa Platinum','val':'VisaPlatinum'}]"  name="card"></selectpin>
                                    <span class="form-item__error" v-text="form_1.errors.get('card')" v-if="form_1.errors.has('card')"></span>
                                </div>
                                <div class="form-item select-currency row">
                                    <label>Валюта карты:</label>
                                    <div class="radio-box row">
                                        <div class="radio-list2 row">
                                            <div class="radio-item">
                                                <input type="radio" name="currency" value="rub" v-model="form_1.currency" id='radio1'>
                                                <label for="radio1">RUB</label>
                                            </div>
                                            <div class="radio-item">
                                                <input type="radio" name="currency" value="usd" v-model="form_1.currency" id='radio2'>
                                                <label for="radio2">USD</label>
                                            </div>
                                            <div class="radio-item">
                                                <input type="radio" name="currency" value="eur" v-model="form_1.currency" id='radio3'>
                                                <label for="radio3">EUR</label>
                                            </div>                                            
                                        </div>                                        
                                    </div>
                                    <span class="form-item__error" v-text="form_1.errors.get('currency')" v-if="form_1.errors.has('currency')"></span>
                                </div>
                            </div>
                            <div class="form-box row">
                                <div class="form-item required">
                                    <float-label  for="lastname">
                                        <input id="lastname" class="input" type="text" name="lastname" v-model="form_1.lastname" placeholder="Фамилия">
                                    </float-label>
				    				<span class="form-item__error" v-text="form_1.errors.get('lastname')" v-if="form_1.errors.has('lastname')"></span>                                    
                                </div>
                                <div class="form-item required">
                                    <float-label for="firstname">
                                        <input class="input" type="text" name="firstname" placeholder="Имя" v-model="form_1.firstname"  >  			
                                    </float-label>
				    				<span class="form-item__error" v-text="form_1.errors.get('firstname')" v-if="form_1.errors.has('firstname')"></span>                                    
                                </div>
                                <div class="form-item required">
                                    <float-label for="middlename">
                                        <input class="input" type="text" name="middlename" placeholder="Отчество" v-model="form_1.middlename" >
                                    </float-label>
				    				<span class="form-item__error" v-text="form_1.errors.get('middlename')" v-if="form_1.errors.has('middlename')"></span>
                                </div>
                                <div class="form-item empty"></div>

                                <div class="indent"></div>
                                
                                <div class="form-item required">
                                    <float-label for="latinname">
                                        <input class="input" type="text" name="latinname" placeholder="Имя и Фамилия латиницей"  v-model="form_1.latinname" >
                                    </float-label>
				    				<span class="form-item__error" v-text="form_1.errors.get('latinname')" v-if="form_1.errors.has('latinname')"></span>                                    
                                </div>
                                <div class="form-item">                                    
                                    <selectpin v-model="form_1.sitezen" :options="[{'lab':'Гражданин РФ','val':'Resident'},{'lab':'Не гражданин РФ','val':'Non resident'}]" name="sitezen" ></selectpin>                                    
							        <span class="form-item__error" v-text="form_1.errors.get('sitezen')" v-if="form_1.errors.has('sitezen')"></span>
                                </div>
                                <div class="indent"></div>
                                <div class="form-item">
                                        Регион: {{region.name}} (<span class="form-item__link" @click="showRegions = true">изменить</span>)
                                        <input type="hidden" name="regcode" v-model="region.code">
                                </div>
                                <div class="form-item">
                                    <selectpin v-model="form_1.placemeeting" :options="meeting" name="meeting" ></selectpin>
                                    
                                    <span class="form-item__error" v-text="form_1.errors.get('placemeeting')" v-if="form_1.errors.has('placemeeting')"></span>
                                </div>

                                <div class="indent"></div>

                                <div class="form-item required">
                                    <float-label for="phonemob">
                                        <MaskedInput class="input" type="text" name="phonemob" placeholder="Мобильный телефон" v-model="form_1.phonemob" mask="\8 \(111) 111-11-11"></MaskedInput>
                                    </float-label>
                                    
                                    <span class="form-item__error" v-text="form_1.errors.get('phonemob')" v-if="form_1.errors.has('phonemob')"></span>
                                </div>
                                <div class="form-item required">
                                    <float-label for="email">
                                        <input class="input" type="text" name="email" placeholder="Электронная почта" v-model="form_1.email" >
                                    </float-label>
                                    <span class="form-item__error" v-text="form_1.errors.get('email')" v-if="form_1.errors.has('email')"></span>
                                </div>
                                <div class="indent"></div>

                                <div class="form-item wdt100"> 
                                    <div class="item-chk">                                      
                                        <input id="chk0" type="checkbox" v-model="form_1.short" name="short" />                                        
                                        <label for="chk0"><span class="fs18 blue fw600">Укажу паспортные данные и адрес позже</span></label>
                                    </div>
                                    <div class="item-chk">                                            
                                        <input type="checkbox" v-model="form_1.agree" name="agree" checked id="chk1">
                                        <label for="chk1">
                                        Я согласен с <span  @click="showAgree = true" class="item-chk__agree">обработкой персональных данных</span>
                                        </label>						                    
                                        <span class="form-item__error" v-text="form_1.errors.get('agree')" v-if="form_1.errors.has('agree')"></span>                                            
                                    </div>
                                    <div class="item-chk text-box">
                                        <input id="chk2" checked type="checkbox"/>
                                        <label for="chk2">Я извещён/извещена, что выпускаемая банковская расчётная карта
                                            не предназначена для зачисления на ее счёт выплат из бюджетов бюджетной
                                            системы РФ и/или государственных внебюджетных фондов, оплаты труда
                                            работников государственных и муниципальных органов, государственных
                                            стипендий, пенсий и иных соц.выплаты из ПФР, денежного довольствия
                                        (содержания), вознаграждения государственных служащих.</label>
                                    </div>
                                </div>
                                <div class="indent"></div>
                                <div class="form-item wdt100">
                                    <div class="button-box row thiscenter">
                                        <a class="green-btn fw600 next goto" :disabled="form_1.errors.any()" @click="onSubmit_1"><span class="fa fa-spinner fa-spin is-loaded" :class="{'is-loading':form_1.loading}"></span>Паспортные данные</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  class="step-box step2" v-if="currentstep == 2" @click="form_2.errors.clear($event.target.name)">
                            <div class="form-box row">
                                <div class="form-item">  
                                    <float-label for="serial" >                                  
                                        <MaskedInput class="input" type="text" name="serial" placeholder="Серия паспорта" v-model="form_2.serial" mask="1111"></MaskedInput>
                                    </float-label>
                                    <span class="form-item__error" v-text="form_2.errors.get('serial')" v-if="form_2.errors.has('serial')"></span>
                                </div>
                                <div class="form-item ">
                                    <float-label for="number"> 
                                        <MaskedInput class="input" type="text" name="number" placeholder="Номер паспорта" v-model="form_2.number" mask="111111"></MaskedInput>                                    
                                    </float-label>
                                    <span class="form-item__error" v-text="form_2.errors.get('number')" v-if="form_2.errors.has('number')"></span>
                                </div>
                                <div class="form-item">
                                    <float-label for="div_code"> 
                                        <MaskedInput class="input" type="text" name="div_code" placeholder="Код подразделения" v-model="form_2.div_code" mask="111-111"></MaskedInput>                                                                        
                                    </float-label> 
                                    <span class="form-item__error" v-text="form_2.errors.get('div_code')" v-if="form_2.errors.has('div_code')"></span>
                                </div>
                                <div class="form-item">
                                    <float-label for="date"> 
                                        <MaskedInput class="input" type="text" name="date" placeholder="Дата выдачи" v-model="form_2.date" mask="11.11.1111"></MaskedInput>                                                                        
                                    </float-label> 
                                    <span class="form-item__error" v-text="form_2.errors.get('date')" v-if="form_2.errors.has('date')"></span>
                                </div>
                                <div class="form-item wdt100">
                                    <float-label for="organization"> 
                                    <textarea name="organization" rows="3" placeholder="Кем выдан" v-model="form_2.organization"></textarea> 
                                    </float-label> 
                                    <span class="form-item__error" v-text="form_2.errors.get('organization')" v-if="form_2.errors.has('organization')"></span>
                                </div>
                                <div class="form-item">
                                    <float-label for="date_birth"> 
                                        <MaskedInput class="input" type="text" name="date_birth" placeholder="Дата рождения" v-model="form_2.date_birth" mask="11.11.1111"></MaskedInput>                                                                        
                                    </float-label> 
                                    <span class="form-item__error" v-text="form_2.errors.get('date_birth')" v-if="form_2.errors.has('date_birth')"></span>
                                </div>                                
                                <div class="form-item">
                                    <float-label for="place_birth"> 
                                        <input class="input" type="text" name="place_birth" placeholder="Место рождения"  v-model="form_2.place_birth" >                                    
                                    </float-label> 
                                    <span class="form-item__error" v-text="form_2.errors.get('place_birth')" v-if="form_2.errors.has('place_birth')"></span>
                                </div>
                                <div class="indent"></div>
                                <div class="form-item wdt100">
                                    <div class="button-box row thiscenter">
                                        <a class="green-btn fw600 prev goto" @click="prevStep">Назад</a>
                                        <a class="green-btn fw600 next goto" :disabled="form_2.errors.any()" @click="onSubmit_2"><span class="fa fa-spinner fa-spin is-loaded" :class="{'is-loading':form_2.loading}"></span>Адрес</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  class="step-box step3" v-if="currentstep == 3" @click="form_3.errors.clear($event.target.name)">
                            <div class="form-box row">                                						

                                <div class="form-item">
                                        <float-label for="postal_code"> 
                                            <input id="postal_code" class="input" name="postal_code" type="text" placeholder="индекс" v-model="form_3.postal_code" />
                                        </float-label> 
                                    </div>
                                    <div class="form-item">
                                        <float-label for="region"> 
                                            <dada-suggestions :model.sync="form_3.region.data" :dada="dada" :constraints="[{name:form_3.region.data.name,code:''}]" @updatepostcode="updatePostalCode('region')" objdata="region" placeholder="Область/Регион"></dada-suggestions>                                        
                                        </float-label> 
                                    </div>
                                    <div class="form-item">
                                        <float-label for="area"> 
                                            <dada-suggestions :model.sync="form_3.area.data" :dada="dada"  :constraints="[{name:form_3.region.data.name,code:'region'}]" @updatepostcode="updatePostalCode('area')" objdata="area" placeholder="Район"></dada-suggestions>											                                        
                                        </float-label> 
                                    </div>
                                    <div class="form-item">
                                        <float-label for="city"> 
                                            <dada-suggestions :model.sync="form_3.city.data" :dada="dada"  :constraints="form_3.area.data.name ? [{name:form_3.area.data.name,code:'area'}] : [{name:form_3.region.data.name,code:'region'}]" @updatepostcode="updatePostalCode('city')" objdata="city" placeholder="Город/поселок"></dada-suggestions>						  
                                        </float-label> 
                                    </div>
                                    <div class="form-item">
                                        <float-label for="settlement"> 
                                            <dada-suggestions :model.sync="form_3.settlement.data" :dada="dada"  :constraints="form_3.area.data.name ? [{name:form_3.area.data.name,code:'area'}] : [{name:form_3.region.data.name,code:'region'}]" @updatepostcode="updatePostalCode('settlement')" objdata="settlement" placeholder="Населенный пункт"></dada-suggestions>                                        
                                        </float-label> 
                                    </div>
                                    <div class="form-item">
                                        <float-label for="street">
                                            <dada-suggestions :model.sync="form_3.street.data" :dada="dada"  :constraints="form_3.settlement.data.name ? [{name:form_3.settlement.data.name,code:'settlement'}] : form_3.city.data.name ? [{name:form_3.city.data.name,code:'city'}] : [{name:form_3.region.data.name,code:'region'}]" @updatepostcode="updatePostalCode('street')" objdata="street" placeholder="Улица"></dada-suggestions>
                                        </float-label>
                                    </div>
                                    <div class="form-item">
                                        <float-label for="house">
                                            <dada-suggestions :model.sync="form_3.house.data" :dada="dada"  :constraints="form_3.street.data.name ? (form_3.city.data.name ? [{name:form_3.city.data.name,code:'city'},{name:form_3.street.data.name,code:'street'}] : (form_3.region.data.name ? [{name:form_3.region.data.name,code:'region'},{name:form_3.street.data.name,code:'street'}]:[{name:form_3.street.data.name,code:'street'}])) : [{name:form_3.settlement.data.name,code:'settlement'}]" @updatepostcode="updatePostalCode('house')" objdata="house" placeholder="Дом, корпус, строение"></dada-suggestions>                                        
                                        </float-label>
                                    </div>
                                    <div class="form-item">
                                        <float-label for="flat">
                                            <input id="flat" class="input" name="flat" type="text" placeholder="квартира" v-model="form_3.flat" />
                                        </float-label>
                                    </div>
                                <div class="indent"></div>
                                <div class="form-item wdt100">
                                    <div class="button-box row thiscenter">
                                        <a class="green-btn fw600 prev goto" @click="prevStep">Назад</a>
                                        <a class="green-btn fw600 next goto" :disabled="form_3.errors.any()" @click="onSubmit_3"><span class="fa fa-spinner fa-spin is-loaded" :class="{'is-loading':form_3.loading}"></span>Контрольные вопросы</a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  class="step-box step4" v-if="currentstep == 4" @click="form_4.errors.clear($event.target.name)">
                            <div class="form-box row">
                                <div class="mini-info blue">
                                    <p>Просим вас придумать контрольный вопрос и ответ, а также кодовое слово (для операций с картой), по которым мы будем уверены, что нам звоните именно вы.</p>
                                    <p><strong>Внимание!</strong> Просим вас запомнить и хранить в тайне эту информацию в целях вашей финансовой безопасности.</p>
                                </div>
                                <div class="form-item wdt100">
                                    <float-label for="MotherMaidenName">
                                        <input v-model="form_4.MotherMaidenName" placeholder="Кодовое слово" type="text" name="MotherMaidenName" id=MotherMaidenName />
                                    </float-label>
                                    <span class="form-item__error" v-text="form_4.errors.get('MotherMaidenName')" v-if="form_4.errors.has('MotherMaidenName')"></span>
                                </div>
                                <div class="form-item wdt100">
                                    <float-label for="HintQ">
                                        <selectpin name = "HintQ" v-model="form_4.HintQ" @input="changeHint" :options="[{'lab':'Дата рождения бабушки'},{'lab':'Имя вашего питомца'},{'lab':'Любимое место путешествия'},{'lab':'Любимая спортивная команда'},{'lab':'Лучший друг детства'},{'lab':'Профессия дедушки'},{'lab':'Задайте собственный вопрос'}]" ></selectpin>
                                    </float-label>
                                    <span class="form-item__error" v-text="form_4.errors.get('HintQ')" v-if="form_4.errors.has('HintQ')"></span>
                                </div>
                                <div class="form-item wdt100" v-if="showHint">
                                    <float-label for="UserHintQ">
                                        <input v-model="form_4.UserHintQ" placeholder="Свой вопрос" type="text" name="UserHintQ" id = "UserHintQ" />
                                    </float-label>
                                </div>
                                <div class="form-item wdt100">
                                    <float-label for="HintA">
                                        <input v-model="form_4.HintA" placeholder="Ответ на вопрос" type="text" name="HintA" id="HintA" />
                                    </float-label>
                                    <span class="form-item__error" v-text="form_4.errors.get('HintA')" v-if="form_4.errors.has('HintA')"></span>
                                </div>
                                <div class="indent"></div>
                                <div class="form-item wdt100">
                                    <div class="button-box row thiscenter">
                                        <a class="green-btn fw600 prev goto" @click="prevStep">Назад</a>
                                        <a class="green-btn fw600 next goto" :disabled="form_4.errors.any()" @click="onSubmit_4"><span class="fa fa-spinner fa-spin is-loaded" :class="{'is-loading':form_4.loading}"></span>Отправить</a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <regions v-if="showRegions" @close="showRegions = false" v-model="region">     `     
        </regions>
        <modal v-if="showAgree" @close="showAgree = false">
            <h3 slot="header">Согласие на обработку персональных данных</h3>
            <div slot="body">
                <p>Я, в соответствии с требованиями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных», даю свое согласие на обработку Коммерческим банком «Русский ипотечный банк» (общество с ограниченной ответственностью), лицензия Банка России №1968 от 22.06.2012г, место нахождения: Российская Федерация (Россия), 119180, г.Москва, ул.Большая Полянка, д.2, строение 2 (далее – Банк), моих персональных данных (любой относящейся ко мне информации, в том числе фамилии, имени, отчества, адреса, паспортных данных).</p>
<p>Банк имеет право осуществлять следующие действия с моими персональными данными: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу (распространение, предоставление, доступ), в том числе третьим лицам, обезличивание, блокирование, удаление, уничтожение, как с использованием средств автоматизации, так и без использования таких средств.</p>
<p>Указанные действия проводятся Банком в целях заключения и исполнения Договора комплексного банковского обслуживания и любых других договоров с Банком, для маркетинговых исследований и направления Клиенту коммерческих предложений Банка и партнеров (агентов) Банка посредством почты, телефона, интернета.</p>
<p>Согласие на обработку персональных данных действует в течение срока действия Договора, а также в течение следующих 5 (Пяти) лет. По истечении указанного срока действия согласие считается продленным на каждые следующие 5 (Пять) лет при условии отсутствия у Банка сведений об его отзыве. Отзыв согласия осуществляется путем направления Клиентом письменного заявления в Банк, с даты получения которого Банк прекращает обработку персональных данных.</p>
            </div>            
            <div slot="footer">
                <button class="modal-default-button" @click="showAgree = false">
                    OK
                </button>
            </div>   
        </modal>
        <modal v-if="showComplete" @close="showComplete = false">
            <h3 slot="header">Заявка отправлена</h3>
            <div slot="body">
                <p>Заявка отправлена</p>
            </div>            
            <div slot="footer">
                <button class="modal-default-button" @click="showComplete = false">
                    OK
                </button>
            </div>   
        </modal>
      </div>
</template>
<script>
import MaskedInput from 'vue-masked-input'
import selectpin from './selectpin.vue'
import regions from './regions.vue'
import DadaSuggestions from './DadaSuggestions.vue'
import FloatLabel from './FloatLabel.vue'
import modal from '../../components/modal.vue'

function toTranslit(text) {
    return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
        function(all, ch, space, words, i) {
            
            if (space || words) {
                return space ? '-' : '';
            }
            
            var code = ch.charCodeAt(0),
                    next = text.charAt(i + 1),
                    index = code == 1025 || code == 1105 ? 0 :
                    code > 1071 ? code - 1071 : code - 1039,
                    t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                'r', 's', 't', 'u', 'f', 'kh', 'tc', 'ch', 'sh',
                'shch', '', 'y', '', 'e', 'yu', 'ya'
            ],
            
            next = next && next.toUpperCase() === next ? 1 : 0;

            return t[ index ].toUpperCase();
            
        }
    );
}

function guidn() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var guid = guidn();

class Errors {
	constructor() {
		this.errors = {};
	}
	has(field) {
		return this.errors.hasOwnProperty(field);
	}
	any() {
		return Object.keys(this.errors).length > 0;
	}
	get(field) {
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}
	record(errors) {
		this.errors = errors;
	}
	clear(field) {
		if (field) {
           delete this.errors[field];
            return;
        }
        this.errors = {};
    }
}


class Form {
	constructor(data) {		
		this.loading=false;
		this.originalData = data;		
		for (let field in data) {
			this[field] = data[field];
        }        
        this.errors = new Errors();        
    }
    
	data() {
		let data = {};
		for (let property in this.originalData) {
			data[property] = this[property];
		}
		return data;
	}
	reset() {
		for (let field in this.originalData) {
			this[field] = '';
		}	
		this.errors.clear();			
	}
	submit(requestType,url) {
		this.loading=true;
		return new Promise((resolve,reject) => {
			axios[requestType](url, this.data())
			.then(response => {
				this.onSuccess(response.data);
				resolve(response.data);
			})
			.catch(error => {
				this.onFail(error.response.data);
				reject(error.response.data);
			})
		});		
	}
	onSuccess(data) {

		this.loading=false;
		//this.reset();
	}
	onFail(errors) {
		this.loading=false;
		this.errors.record(errors);
	}
};

class FieldAddress {
	constructor() {
		this.data = {
			socr: '', name: '', fias_id: '', postal_code: ''
		}
	}
}
export default {
  name:'Order',
  components: {regions,MaskedInput,selectpin,DadaSuggestions,FloatLabel,modal},
  data() {
      return {
            currentstep: 1,
            region: {code:77,name:'Москва г.'},
            meeting: {},            
			form_1: new Form({		
                type: 'personal',	                
                guid: guid,
                card: '',
				lastname: '',
				firstname: '',
				middlename: '',
                latinname: '',
				phonemob: '',
				email: '',
				currency: '',
				sitezen: '',                
                placemeeting: '',
                short: '',
				agree: ''			
			}),
			form_2: new Form({	
                type: 'passport',	
                guid: guid,			
				serial: '',
				number: '',
				place: '',
				div_code: '',
				organization: '',
				date: '',
				date_birth: '',
				place_birth: ''                
			}),
			form_3: new Form({	
                type: 'address',
                guid: guid,	
				region: new FieldAddress(),				
				area: new FieldAddress(),				
				city: new FieldAddress(),				
				settlement: new FieldAddress(),				
				street: new FieldAddress(),				
				house: new FieldAddress(),
				flat: '',
				postal_code: ''                
            }),
            form_4: new Form({
                type: 'secret',
                guid: guid,	
                 MotherMaidenName: '',
                 HintQ: '',
                 UserHintQ: '',
                 HintA: ''                 
            }),
			dada: {
				token: '875229490aa14d9e5868e0eb1f8b3b3c7f27e288',
				type: 'ADDRESS'
			},
            showRegions: false,
            showAgree: false,
            showComplete: false,
            showHint: false

      }
  },
  	methods: {
		onSubmit_1() {	  
            console.log(this.form_1)               
			this.form_1.submit('post','https://www.russipoteka.ru/API/v1/opportunity/validate.php')
				.then(data => {
					if (data.step)
						this.gotoStep(data.step)					
					else
					this.showComplete = true
				})
				.catch(errors => console.log(errors));			
		},
		onSubmit_2() {			
			this.form_2.submit('post','https://www.russipoteka.ru/API/v1/opportunity/validate.php')
				.then(data => {
					this.nextStep()
				})
				.catch(errors => console.log(errors));			
		},
		onSubmit_3() {			
			this.form_3.submit('post','https://www.russipoteka.ru/API/v1/opportunity/validate.php')
				.then(data => {
					this.nextStep()
				})
				.catch(errors => console.log(errors));			
        },
        onSubmit_4() {			
			this.form_4.submit('post','https://www.russipoteka.ru/API/v1/opportunity/validate.php')
				.then(data => {
					if (data.step)
						this.gotoStep(data.step)					
					else
					this.showComplete = true
				})
				.catch(errors => console.log(errors));			
        },
        onSubmit() {

        },
		nextStep() {
			this.currentstep++;
		},
		prevStep() {
			this.currentstep--;
		},
		gotoStep(step) {
			this.currentstep = step;
		},
		updatePostalCode(namef) {						
            var curr_field = this.form_3[namef];
            this.form_3.postal_code = curr_field.data.postal_code;
            // если регион и город определяется в других полях, обновляем их
            // нужно сделать также обнуление
            if (curr_field.data.region_fias_id) {
                this.form_3.region.data.fias_id = curr_field.data.region_fias_id;
                this.form_3.region.data.name = curr_field.data.region_with_type;
            }
            if (curr_field.data.area_fias_id) {
                this.form_3.area.data.fias_id = curr_field.data.area_fias_id;
                this.form_3.area.data.name = curr_field.data.area_with_type;
            }
            if (curr_field.data.city_fias_id) {
                this.form_3.city.data.fias_id = curr_field.data.city_fias_id;
                this.form_3.city.data.name = curr_field.data.city_with_type;
            }
            if (curr_field.data.street_fias_id) {
                this.form_3.street.data.fias_id = curr_field.data.street_fias_id;
                this.form_3.street.data.name = curr_field.data.street_with_type;
            }
        },
        toLatin() {
            var lastTrans = toTranslit(this.form_1.lastname);
            var firstTrans = toTranslit(this.form_1.firstname);
            var nameTrans = firstTrans ? firstTrans + " " + lastTrans : lastTrans;
            var nameTransF = firstTrans ? firstTrans.charAt(0) + ". " + lastTrans : lastTrans;
            this.form_1.latinname = nameTrans.length > 19 ? nameTransF.toUpperCase() : nameTrans.toUpperCase();
        },
        getMeeting() {
            this.form_1.placemeeting = ''
          axios.get("https://www.russipoteka.ru/regions_list.php?mode=cities&region=" + this.region.code)
          .then(response => {
            this.meeting = response.data.map(function(entry) {                
                return {"lab":entry.name,"val":entry.name}
            })
          })
          .catch(err => {
              this.errorMessage = err.response.data.error
          })
        },
        changeHint() {
            if (this.form_4.HintQ == 'Задайте собственный вопрос')
                this.showHint = true
            else 
                this.showHint = false            
        }
    },
    mounted() {
        this.getMeeting()
    },
    watch: {
        region (nnn,ooo) {
            this.getMeeting()
        },
        'form_1.lastname' () {
            this.toLatin()
        },
        'form_1.firstname' () {
            this.toLatin()
        }
        
    }
  
}
</script>

<style>

.item-chk__agree {
    text-decoration: underline;

}
.form .container{
    padding-bottom: 75px;
}

.tabs{
    padding-bottom: 40px;
}


.tabs li{
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    vertical-align: baseline;
}


.tabs li.active{
    font-weight: 600;
    color: #005596;
}


.form .item{
    padding-bottom: 28px;
    font-size: 0;
}


.form .item>label, .form .form-item>label{
    font-weight: 600;
    display: block;
    padding: 0 0 15px 15px;
    color: #005596;
    font-size: 18px;
}


.form input[type=text], .jq-selectbox__select{
    width: 100%;
    border: 1px solid #ddd;
    padding: 0 20px;
    height: 70px;
    border-radius: 8px;
    background: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    box-shadow: none;
}

.jq-selectbox__select{
    border-color: #ecf2f7;
    background: #ecf2f7;
    padding-right: 50px;
}

.jq-selectbox{
    width: 100%;
}

.form .error{
    border-color: red !important;
}


.form .form-item{
    display: inline-block;
    width: 48.5%;
    vertical-align: top;
}

.form .form-item + .form-item{
    margin-left: 3%;
}

.form-item__error {
    color:red;
    margin-top: 6px;
    display: block;
    font-size: 12px;
}
.jq-selectbox__trigger{
    border: 0;
    background: url("/images/s-arr.png") no-repeat center center;
    width: 60px;
}


.jq-selectbox__select-text{
    line-height: 68px;
    text-shadow: none;
    width: 100% !important;

}

.jq-selectbox__trigger-arrow{
    display: none;
}

.jq-selectbox li{
    font-size: 18px;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    padding: 10px 20px;
}

.jq-selectbox__dropdown{
    border: 0;
    background: #ecf2f7;
    overflow: hidden;
    border-radius: 8px;
}


.item-chk{
    position: relative;
    overflow: hidden;
}


.item-chk input{
    position: absolute;
    left: -200px;
}


.item-chk label{
    font-size: 12px;
    line-height: 16px;
    position: relative;
    padding-left: 34px;
    margin-left: 20px;
    display: block;
    font-weight: 300;
    min-height: 23px;
    padding-top: 3px;
    cursor: pointer;
}

.item-chk label:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background: url("/images/chk.png") no-repeat bottom;
    width: 23px;
    height: 23px;
}

.item-chk input:checked+label:before{
    background-position: 0 top;
}

.item-chk + .item-chk{
    margin-top: 20px;
}


.form .green-btn{
    display: block;
    padding: 0;
    width: 265px;
    height: 55px;
    text-align: center;
    float: right;
    border-radius: 28px;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    border: 0;
    cursor: pointer;
    background: #7fa133;
}


.bxs, .bxs * { 
    box-sizing: border-box;
    outline: none;
}

.form-box input, .form-box textarea {
    width: 100%;
}


.row > * {
    float: left
}

.row:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}

.wdt100 {
    width: 100% !important;
}

.fs18 {
    font-size: 18px;
}

.blue {
    color: #005499;
}

.fw600{
    font-weight: 600;
}

.form-box textarea {
    width: 100%;
    border: 1px solid #ddd;
    padding: 16px 20px;
    border-radius: 8px;
    background: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    box-shadow: none;
    resize: none;
}

.tb > *:first-child {margin-top: 0 !important;}
.tb > *:last-child {margin-bottom: 0 !important;}


.row-t {
    display: table;
    width: 100%;
}
.row-t > * {
    display: table-cell;
    vertical-align: middle;
}



.form-box {
    margin-left: -16px;
    margin-right: -16px;
    display: block;
}

.form-box .form-item {
    margin: 10px 16px !important;
    width: calc(50% - 32px);
    position: relative;
    display: block;
}

.form .form-head label {
    font-weight: 600;
    display: block;
    padding: 0 0 15px 15px;
    color: #005596;
    font-size: 18px;
}


.jq-selectbox li {
    display: block;
    margin: 0 !important;
}

.form-box .form-item.empty {
    height: 60px;
} 

.form-box .wdt100 {
    width: calc(100% - 32px) !important;
}

.form-box input[type=text] {
    height: 58px;
}

.form-box .jq-selectbox__select {
    height: 60px;
}

.form-box .jq-selectbox__select-text {
    line-height: 56px;
}

.item-chk input {
    left: -9999px;
    width: 0;
}

.form-box .item-chk label {
    margin-left: 0;
}

.form-box.form-head .form-item.select-card-type {
    width: calc(31% - 32px);    
}

.form-box.form-head .form-item.select-currency {
    width: calc(69% - 32px);  
}


.form-box.form-head {
    padding-bottom: 26px;
    border-bottom: 1px solid #d1d1d1;
    margin-bottom: 24px;
} 

input[type=radio] {
position: absolute;
    left: -9999px;
}

.form-head input[type=radio] + label {
    padding: 0 26px;
    height: 58px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    box-shadow: none;
    color: #000;
    padding-top: 20px;
    cursor: pointer;
}

.form-head .radio-item + .radio-item input[type=radio] + label {    
    border-left: 1px solid #ddd;
}


.radio-list2 {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    display: inline-block;
}



input[type=radio]:checked + label {
    background-color: #ebf3f7;
}

.radio-box {
    width: 100%;
}

.radio-box .description {
    width: calc(100% - 280px);
    padding-left: 20px; 
    font-size: 14px;
    display: none;
}

.radio-box .description.open {
    display: block;
}

.radio-box .description p {
    margin: 8px 0;
}

.radio-box .description p + p {
    margin-top: 16px;
}


.green {
    color: #6ea220;
}


.form-box a.green-btn {
    padding: 0 40px;
    padding-top: 18px;
    display: block;
    float: left;
    position: relative;
    width: auto;
}

.form-box a.green-btn.next {
    padding-right: 72px;
}

.form-box a.green-btn.prev {
    padding-left: 72px;
    background-color: #fff;
    box-shadow: 0 0 0 1px #6ea220 inset;
    color: #6ea220;
    opacity: 1;
}

.form-box a.green-btn.prev:hover {
    opacity: .7;
}

.form-box a.green-btn + a.green-btn {
    margin-left: 32px;
}

.form-box a.green-btn.next:before {
    content: '';
    display: block;
    position: absolute;
    width: 29px;
    height: 22px;
    background-image: url(/images/arrow-button.png);
    right: 32px;
    top: calc(50% - 11px);
}

.form-box a.green-btn.prev:before {
    content: '';
    display: block;
    position: absolute;
    width: 29px;
    height: 22px;
    background-image: url(/images/arrow-button-prev.png);
    left: 32px;
    top: calc(50% - 11px);
}

.thiscenter {
    display: table;
    margin: 0 auto;
}

.form-box .text-box {
    max-width: 680px;
}

.form-box .indent {
    height: 20px;
    width: 100%;
}

.steps-boxes-box .tabs {
    margin-bottom: 16px;
}
.tabs{
    padding-bottom: 0px;
}


.tabs li{
    display: inline-block;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    vertical-align: baseline;
}

.tabs li + li{
    margin-left: 20px;
}


.tabs li.active{
    font-weight: 600;
    color: #005596;
}
.step-boxes .step-box.open {
    display: block;
}

.step-boxes .step-box .mini-info {
    font-size: 14px;
    font-weight: 300;
}

.red {
    color: red;
}

.step-boxes .tabs li.active {
    font-weight: 600;
    color: #005499;
}

.steps-boxes-box .form-box {
    margin-top: 24px;
}


.mini-info p + p {
    padding-top: 16px;
}





.form-item {
    position: relative;
}
.form-item__link {
    text-decoration: underline;
    cursor:pointer;
}
.form-item.required:before {
    content: '*';
    display: block;
    position: absolute;
    bottom: 32px;
    right: 12px;
    color: red;
}

.form-box input::-webkit-input-placeholder {color:#000;}
.form-box input::-moz-placeholder          {color:#000;}
.form-box input:-moz-placeholder           {color:#000;}
.form-box input:-ms-input-placeholder      {color:#000;}

.form-box textarea::-webkit-input-placeholder {color:#000;}
.form-box textarea::-moz-placeholder          {color:#000;}
.form-box textarea:-moz-placeholder           {color:#000;}
.form-box textarea:-ms-input-placeholder      {color:#000;}


.jq-selectbox .placeholder {
    color: #000;
}
.is-loaded {
    visibility: hidden;
    margin-right: 10px;
}
.is-loading {
visibility: visible;
}

</style>


