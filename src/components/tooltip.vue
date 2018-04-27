<template>    
    <span class="faq fw600">?</span>           
</template>


<script>
import 'tooltipster';
export default {
    name: 'Tooltip',
    props: ['show'],
    mounted() {
        $(this.$el).tooltipster({
        theme: 'tooltipster-light',
        content: $('#' + this.show)
    });
    }
}
</script>
<style>

</style>


