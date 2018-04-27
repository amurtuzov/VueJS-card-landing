<template>
	<div id="select-wrapper">
		<input class="input" type="text" :name="objdata" :id="objdata" :placeholder="placeholder" v-model="model.name"
			@input = "changeItem($event.target.value)" 
			@blur = 'clearModel'
			@keydown.enter = 'enter'
			@keydown.down = 'down'
			@keydown.up = 'up'			
			/>		
			<div id="options" v-show="Object.keys(items).length > 0 && open">			
				<ul class="kladr-select">				
					<li v-for="(item, index) in items" :class="{'is-active':isActive(index)}" >
						<p>
							<span class="dropdown-item"   @click="suggestionClick(index)">{{item.name}}</span>				
						</p>
					</li>
		        </ul>        
		    </div>
	</div>
</template>
<script>
	export default {
		name: 'dada',		
		props: {
			model: {
				required: true
			},
			placeholder: {
				required:true
			},
			dada: {
				required:true
			},
			objdata: {
				required:true
			},
			constraints: {
				default: ''
			}
		},
		data() {
			return {
				value: '',
				items: [],
				current: 0,
				open: false
			}
		},
		mounted() {
			this.value = this.model;
		},
		watch: {
			value() {
				this.$emit('update:model', this.value);	

			},
			model() {
				this.value = this.model;				
			}
		},
		methods: {
			changeItem(valstr) {	
				if (this.open === false) {
					this.open = true;
					this.current = 0;
				}	
				let qs = {
					'value': valstr, 
					'type': this.objdata					
				};
				if (this.constraints.length >0) {
					qs[this.objdata] = 	valstr				
					this.constraints.forEach( function(v) {
						qs[v.code] = v.name
					})
				}
				if (valstr.length > 0) {
					axios.post('https://www.russipoteka.ru/API/v1/kladr/', 
					qs)
					.then(response => { 					
						this.items = response.data					
					})
					.catch(error => console.log(error))
				}
  				
			},
			up() {
				if(this.current > 0) {
					this.current--;
				}
			},
			down() {
				if (this.current < this.items.length -1) {
					this.current++;
				}
			},
			enter() {
				this.open = false;				
				this.$emit('update:model', this.fillModel(this.current));	
				this.updatePostCode();				
			},
			isActive(index) {
				return index === this.current;
			},
			suggestionClick(index) {				
				this.open = false;			
				this.$emit('update:model', this.fillModel(index));
				this.updatePostCode();				
	
			},
			// Обновляем другие поля включая индекс
			updatePostCode() {
				this.$emit('updatepostcode');
			},
			fillModel(index) {
				var model = {};
				model['name'] = this.items[index].name;	
				model['postal_code'] = this.items[index].index;		
				model['socr'] = this.items[index].socr;		
				return model;				
			},
			// Если не определено имя очищаем все поля в модели
			clearModel() {	
				//this.open = false;					
				if (!this.value.name) {					
					for (let field in this.model) {
						this.model[field] = '';
					}
					this.open = false					
				}
			}
		}
	}
</script>

<style>
.kladr-select {
	max-height: 396px;
	overflow: auto;
    overflow-x: hidden;
}
</style>