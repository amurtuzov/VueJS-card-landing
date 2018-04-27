<template>
  <div :class="[{'dropdownOn' : !!dropdown}]" id="select-wrapper" >
    <div class="select-filter" @click="focusInput()">        
        <div class="select-filter__value">
            {{ currentValue }}
        </div>
    </div>
    <span class="icon-wrapper" @click="focusInput('icon')">
        <span class="down" :class="{'moveup': !!dropdown}"><div class="box"></div></span>
        <span class="x" v-if="!!dropdown"><div class="box"></div></span>
    </span>
    <div id="options" v-if="!!dropdown && !!options">
        <ul v-if="options.length > 0">
            <li @click="select(option)" v-for="(option, index) in options" :id="'option' + index" :value="option.val?option.val:option.lab">
                <p :class="{'heading': option == option.lab.toUpperCase(), 'keyboardHover': option.lab === keyboardSelection}">
                    <span v-if="custom === false">
                        {{option.lab}}
                    </span>
                    <span v-else>
                        <slot></slot>
                    </span>
                </p>
            </li>
        </ul>
        <ul v-else><p>There are no options to be shown.</p></ul>
    </div>
</div>
</template>
<script>
export default {
    props: {
    options: {
    },
    value: {
        type: String,
        required: false,
        default: null
    },
    name: {
        type: String,
        required: false,
        default: null
    },
    custom: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      inputValue: null,
      searchValue: null,
      dropdown: false,
      keyboardSelection: null,
    }
  },
  computed: {
      currentValue: function() {
          var val = this.value   
          var cu = ''                 
          if (this.options.length > 0 && val != '') {
            cu = this.options.filter(function(entry) {     
                var curval =  entry.val?entry.val:entry.lab               
                return curval == val          
            })            
            cu = cu[0].lab               
          }              
          return cu;
      }
  },
  methods: {
    select(option) {
      this.inputValue = option.lab;
      this.close();
      this.$emit('input', option.val?option.val:option.lab);
    },
    focusInput(forceClose) {
      if (forceClose === 'icon' && !!this.dropdown) {
        this.close();
      } else {
        this.dropdown = true;
      }
    },
    close() {
      this.dropdown = false;      
    }
  },
  watch: {
      options: function(value) {
          if (this.name=='meeting')
            this.inputValue = ''
      }
  }

}
</script>

<style>

#select-wrapper {
  display: flex;
  align-items: stretch;
  position: relative;
  font-family: inherit;
}
#select-wrapper.dropdownOn .select-filter__value {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
#select-wrapper.dropdownOn i {
    border-bottom-right-radius: 0;
}
#select-wrapper .select-filter {
    overflow: hidden;
    display: inline-flex;
    width: 100%;
    max-width: 100%;
}
#select-wrapper ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}
#select-wrapper .select-filter__value {

    width: 100%;
    border: 1px solid #ddd;
    padding: 19px 20px;
    height: 58px;
    border-radius: 8px;
    background: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    box-shadow: none;


}
#select-wrapper.compact {
    width: 18em;
}
#select-wrapper.full {
    width: 100%;
}
#select-wrapper .icon-wrapper {
    height: 100%;
    width: 2em;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    font-size: .85em;
    padding: 0px .7em;
    background-color: rgba(0, 0, 0, 0.03);
    border-top-right-radius: .15em;
    border-bottom-right-radius: .15em;
    height: 100%;
    z-index: 2;
    box-sizing: border-box;
}
#select-wrapper .icon-wrapper > span {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
}
#select-wrapper .icon-wrapper .box {
      width: 1em;
      height: 1em;
      box-sizing: content-box;
      border-left: solid 1px;
      border-top: solid 1px;
      transform: rotate(225deg) translate3d(0.15em, 0.15em, 0) scale(0.6);
}
#select-wrapper .icon-wrapper span.moveup > div.box {
      transform: rotate(225deg) translate3d(0.3em, 0.3em, 0) scale(0.6);
}
#select-wrapper .icon-wrapper span.x > div.box {
      transform: rotate(45deg) translate3d(0.3em, 0.3em, 0) scale(0.6);
}
#select-wrapper #options {    
    box-sizing: border-box;
    z-index: 30;
    width: 100%;
    position: absolute;
    left: 0;    
    top: 100%;
    background-color: white;
    border-bottom-left-radius: .15em;
    border-bottom-right-radius: .15em;
    border: 1px solid #ddd;
    border-top: none;
    

}
#select-wrapper #options li {
      cursor: pointer;
}
#select-wrapper #options li p {
        font-size: 18px;
        margin: 0px;
        padding: .6em .6em;
}
#select-wrapper #options li p:hover, #select-wrapper #options li p.keyboardHover {
          background-color: rgba(0, 0, 0, 0.02);
}
#select-wrapper #options li p.heading {
          background-color: rgba(0, 0, 0, 0.02);
          padding: .4em .6em;
          text-align: center;
          font-size: .7em;
}
#select-wrapper #options li p.heading:hover {
            background-color: rgba(0, 0, 0, 0.02);
}
@supports (-webkit-backdrop-filter: blur(3px)) {
#select-wrapper.fancy #options {
      background-color: rgba(255, 255, 255, 0.95);
      -webkit-backdrop-filter: blur(3px);
}
}
@supports not (-webkit-backdrop-filter: blur(3px)) {
#select-wrapper.fancy #options {
      box-shadow: 0px 40px 30px -20px rgba(0, 0, 0, 0.06);
}
}
@media screen and (max-width: 780px) {
#select-wrapper .select-filter__value {
      overflow-x: hidden;
      font-size: 4vw;
}
#select-wrapper li {
      font-size: 4.5vw;
}
#select-wrapper p {
      padding: .9em .9em;
}
#select-wrapper #options {
      overflow-x: hidden;
}
}

</style>



