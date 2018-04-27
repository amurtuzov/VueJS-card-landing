<template>
    <modal>
        <h3 slot="header">Выберите регион</h3>
        <div slot="body">
            <div class="select-region__container">
                <div class="select-region__column" v-for="i in Math.ceil(regions.length / 28)">
                    <ul>
                        <li v-for="region in regions.slice((i - 1) * 28, i * 28)">                            
                            <div class="select-region__item" :class="{'select-region__item--active':isActive(region.code)}" @click="setActive(region)">{{ region.name }}</div>
                        </li>
                    </ul>
                </div>                
            </div>
        </div>            
        <div slot="footer">
            <button class="modal-default-button" @click="$emit('close')">
                OK
            </button>
        </div>   
    </modal>
</template>
<script>
import modal from '../../components/modal.vue'
export default {
  name: 'Regions',
  components: {modal},
  props:['value'],
  data() {
      return {
          regions: [],
          activeItem: this.value.code 
      }
  },
  methods: {
      getRegion() {
          axios.get("https://www.russipoteka.ru/regions_list.php?mode=regions")
          .then(response => {
            console.log(response)
            this.regions = response.data
          })
          .catch(err => {
              this.errorMessage = err.response.data.error
          })
      },
      isActive: function(listItem) {          
          return this.activeItem == listItem
      },
      setActive: function(listItem) {
          this.$emit('input', listItem)
          this.activeItem = listItem.code
          this.$emit('close')
      }
  },
  created: function() {
      this.activeItem = this.value.code      
      this.getRegion()
  }
}
</script>
<style>
.select-region__column {
    display: inline-block;
    vertical-align: top;
    width: 160px;
    padding-right: 8px;
}
.select-region__item {
    padding: 1px 6px;
    font-size: 14px;
    line-height: 21px; 
    cursor: pointer;   
}
.select-region__item--active {
    font-weight: normal;
    color: #ffffff;
    background: #005596;
}

</style>


