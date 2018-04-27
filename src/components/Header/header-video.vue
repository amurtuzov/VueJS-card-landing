<template>    
        <video class="my-background-video jquery-background-video" loop autoplay muted poster="./../../assets/images/video-poster.jpg" :class="{vmobile:mobile}">
            <source src="./../../assets/video/vid.mp4" type="video/mp4">
            <source src="./../../assets/video/vid.3gp" type="video/3gp">
            <source src="./../../assets/video/vid.webm" type="video/webm">
        </video>
</template>
<script>
var isMobile = require('ismobilejs');
import 'jquery-background-video';
export default {
   
    name: 'HeaderVideo',
            data () {
            return {
                mobile: isMobile.any
            }   
    },
    mounted() { 
        //console.log(isMobile.any);
        if (!isMobile.any) {        
            $(this.$el).bgVideo({
                fullScreen: true, // Sets the video to be fixed to the full window - your <video> and it's container should be direct descendents of the <body> tag
                fadeIn: 300, // Milliseconds to fade video in/out (0 for no fade)
                pauseAfter: 0, // Seconds to play before pausing (0 for forever)
                fadeOnPause: false, // For all (including manual) pauses
                fadeOnEnd: false, // When we've reached the pauseAfter time
                showPausePlay: false // Show pause/play button
            });
        }
    }
}
</script>
<style>
.vmobile {
    display:none;
}
</style>


