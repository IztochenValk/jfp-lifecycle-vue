<template>
  <MessageCard v-for="ami in lesAmis"  v-bind="ami" @update-premium="onUpdatePremium"/>
</template>

<script setup>
import MessageCard from './components/MessageCard.vue';
import { ref } from 'vue'
const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: false
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+3387675477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'GUS',
        name: "GussDX",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: false
    }
]);

function onUpdatePremium({ id }){
 const ami = lesAmis.value.find(a => a.id === id)
  if (ami) ami.premium = !ami.premium   
}
</script>
