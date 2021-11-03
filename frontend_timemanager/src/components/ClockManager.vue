<template>
  <div class="wrapper">
      <div v-if="this.clockIn" class="wrapper">
        <div>Working</div>
        <div>Shift Started At: {{this.startTimeData}}</div>
        <button v-on:click="clock"> Clock'out </button>
      </div>
      <div v-else class="wrapper">
        <div>Dormant</div>
        <div>Last Shift Ended At: {{this.startTimeData}}</div>
        <button v-on:click="clock"> Clock'in </button>
      </div>
    <button v-on:click="refresh"> Refresh </button>
  </div>
</template>

<script>
import {API} from '../http-constants'
export default {
  name: "ClockManager",
  props: {
    userID: Number
  },
  data() {
    return{
      startTimeData : null,
      clockIn : false
    }
  },
  setup() {
    const newUser = 1;
    return {
      newUser,
    }
  },
  methods :{
    refresh(){
      var ctx = this;
      var request = "http://localhost:4000/api/clocks/"+this.userID;
      API.get(request).then(function(response){
          if(response.data.data.length > 0){
            console.log(response.data.data[response.data.data.length-1].time)
            ctx.startTimeData = response.data.data[response.data.data.length-1].time;
            ctx.clockIn = response.data.data[response.data.data.length-1].status;
          }else{
            ctx.startTimeData = null;
          }
        });
    },
    addLeadingZero(time){
      return ('0' + time).slice(-2);
    },
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+this.addLeadingZero(current.getMonth()+1)+'-'+this.addLeadingZero(current.getDate());
      const time = this.addLeadingZero(current.getHours()) + ":" + this.addLeadingZero(current.getMinutes()) + ":" + this.addLeadingZero(current.getSeconds());
      const dateTime = date +' '+ time;
      
      return dateTime;
    },

    clock(){
      var ctx = this;
      var curr_time = this.currentDateTime();
      console.log(curr_time);
      var request = "http://localhost:4000/api/clocks/"+this.userID;    
      var param = {
        clock :{
          time : curr_time,
          status : true //the api deals with the status already, what you put here doesn't matter
        }
      } 

      API.post(request,param).then(function(response){
        ctx.startTimeData = response.data.data.time;
        ctx.clockIn = response.data.data.status;
      }).catch(function(err){
        console.log(err)
      });
    }
  },created(){
    this.refresh();
  }
}
</script>

<style scoped>
  button {
    margin: 1em 0;
  }
</style>