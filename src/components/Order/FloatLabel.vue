<template>
  <div class="vfl-has-label">
    <label class="vfl-label" :class="classObjectM()" :for="inputId">
      {{ floatLabelM() }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'float-label',
  props: {
    on: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },    
    for: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      formEl: undefined,
      labelEl: undefined,
      isActive: false,
      isFocused: false
    }
  },
  mounted () {
    this.addListener()
    this.floatLabelM()
  },
  updated () {
    this.addListener()
    this.isActive = this.formEl.value.length > 0 
  },
  beforeDestroy () {
    this.removeListener()
  },
  methods: {
    addListener() {
      //this.formEl = this.$el.querySelector('input, textarea, select')      
      this.formEl = this.$el.querySelector('#' + this.inputId)     

      this.formEl.addEventListener('input', this.updateIsActive)
      this.formEl.addEventListener('input', this.updateIsFocused)
      this.formEl.addEventListener('blur', this.updateIsFocused)
      this.formEl.addEventListener('focus', this.updateIsFocused)
    },
    removeListener() {
      this.formEl.removeEventListener('input', this.updateIsActive)
      this.formEl.removeEventListener('input', this.updateIsFocused)
      this.formEl.removeEventListener('blur', this.updateIsFocused)
      this.formEl.removeEventListener('focus', this.updateIsFocused)
    },
    focusFormEl () {
      this.formEl.focus()
    },
    updateIsActive (e) {      
      //console.log(e.target.value)
      this.isActive = e.target.value.length > 0
    },
    updateIsFocused (e) {    
      //console.log(e.target.value) 
      this.isActive = e.target.value.length > 0 
      this.isFocused = e.target === document.activeElement && this.isActive
    },
    floatLabelM () {      
      let ret = ''

      switch (this.formElType) {        
        case 'input':
        case 'textarea':
          ret = this.formEl.placeholder
      }
      console.log(ret)
      return ret
    },
    classObjectM () {
      return {
        'vfl-label-on-input': this.on && (this.isActive || this.fixed),
        'vfl-label-on-focus': this.isFocused,            
      }
    },
  },
  computed: {
    inputId () {
      return this.for
    },
    classObject () {
      let dd = new Date();
      let ms = dd.getMilliseconds()
      return {
        'vfl-label-on-input': this.on && (this.isActive || this.fixed),
        'vfl-label-on-focus': this.isFocused,                
      }
    },
    formElType () {
      return this.formEl ? this.formEl.tagName.toLowerCase() : ''
    },
    floatLabel () {
      //console.log(this.formElType)
      switch (this.formElType) {        
        case 'input':
        case 'textarea':
          return this.formEl.placeholder          
      }
    }
  }
}
</script>

<style>
.vfl-has-label {
  position: relative;
}

.vfl-label {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 1em;
  overflow: hidden;
  font-size: 0.8em;
  color: #313131;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s ease-out;
  background: white;
  padding: 0 9px;
}

.vfl-label-on-input {
  top: -0.5em;
  pointer-events: all;
  opacity: 1;
}

.vfl-label-on-focus {
  color: #005596;
}

.vfl-has-label input:focus,
.vfl-has-label textarea:focus,
.vfl-has-label select:focus {
  outline: 0;
}
</style>
