<template>
	<div>
  		
    	<input class="slider-input" type="text" :name="name" v-model="displayValue" @change="updateSlider($event.target.value)" @blur="isInputActive = false" @focus="isInputActive = true">
		
        <div :id="sliderId"></div>
    </div>
</template>
<script>
//import 'nouislider';
var noUiSlider = require('nouislider');
export default {	
	name: 'slider',
	props: {
		name: { 
			type: String, 
			default() { return ""},
		},
		start: {
			type: Number,
			default() {return 10 },
		},
		min: {
			type: Number,
			default() { return 0 },
		},
		max: {
			type: Number,
			default() {return 100 },
		},
		step: {
			type: Number,
			default() { return 1},
		},		
		sliderId: {
			type: String,
		    default: function() {
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					var r = Math.random() * 16 | 0,
					v = c == 'x' ? r : (r & 0x3 | 0x8);
					return v.toString(16);
				});
		 	}
		},
		sliderConfig: Object
	},
	data() {
		return {
			slider:null,
			value: this.start,
			isInputActive: false
		}
	},
	methods: {
		updateInputFromSlider(value) {
			this.value=value[0];
		},
	    updateSlider(value) {	
	    	this.value=value;    	
    	  	this.slider.noUiSlider.set(value);    
    	},
	},
	computed: {
        displayValue: {
            get: function() {
                if (this.isInputActive) {
                    return this.value.toString()
                } else {                	
                    return this.value.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1 ")
                }
            },
            set: function(modifiedValue) {                
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
                // Ensure that it is not NaN
                if (isNaN(newValue)) {
                    newValue = 0
                }
                this.value=newValue;
            }
        }
    },
	// Следим за значением value если меняется передаем событие выше
	watch: {
	    'value': function() {
	      this.$emit('input', this.value);
	    }
  	},
	mounted() {
		this.slider = document.getElementById(this.sliderId);
		noUiSlider.create(this.slider, {
			connect: "lower",
			start: this.start,
			step: this.step,
			range: {
				min: this.min,
				max: this.max
			},
			format: {
				  to: function ( value ) {
					return Math.round(parseInt(value));
				  },
				  from: function ( value ) {
					return value;
				  }
			}
		});		
		this.slider.noUiSlider.on('slide', this.updateInputFromSlider);
	}
}
</script>
<style>
    .slider-input {
        font-family: 'Open Sans', sans-serif;
        font-size: 36px;
        font-weight: 300;
        margin-bottom: 20px;
        background-color: transparent;
        border:none;
    }
	.noUi-horizontal {height: 4px;}
	.noUi-background {background: #ebecec}
	.noUi-handle {border:none;box-shadow:none;background:none;}
	.noUi-handle:before {content: ''; position: absolute; left: -7px; top: -6px; bottom: 0px; border: 10px solid transparent; border-bottom: 15px solid #7fa133; background: none; width:0px;}
	.noUi-handle:after, .noUi-handle:after {background: none; width:0px;}
	.noUi-horizontal .noUi-handle {width:20px;top: -7px;}
	.noUi-connect {background: #7fa133}
	.noUi-target {border: none;border-radius:none;}
</style>