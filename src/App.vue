<template>
  <div id="app">
    <div id="container">
      <Header></Header>     
      <About></About>      
      <Income></Income>       
      <Advantage></Advantage>                  
      <online-pokupki></online-pokupki>      
      <Course></Course>      
      <Management></Management>      
      <Easy></Easy>          

      <Order></Order>   

      <Footer></Footer>

 
    </div>
  </div>
</template>

<script>


import Header from './components/Header/header.vue'
import About from './components/About/about-card.vue'
import Income from './components/Income/income.vue'
import Advantage from './components/Advantage/advantage.vue'
import OnlinePokupki from './components/programm.vue'
import Course from './components/course.vue'
import Management from './components/management.vue'
import Easy from './components/easy.vue'
import Order from './components/Order/order.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {Header,About,Income,Advantage,OnlinePokupki,Course,Management,Easy,Footer,Order},
  data () {
    return {
    
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic');
</style>
