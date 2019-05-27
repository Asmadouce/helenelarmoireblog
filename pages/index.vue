<template>
  <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <SectionContact/>
  </div>
</template>

<script>

  import Section1 from '~/components/index/Section1.vue';
  import Section2 from '~/components/index/Section2.vue';
  import Section3 from '~/components/index/Section3.vue';
  import Section4 from '~/components/index/Section4.vue';
  import Section5 from '~/components/index/Section5.vue';
  import Section6 from '~/components/index/Section6.vue';
  import SectionContact from '~/components/index/SectionContact.vue';

  export default {
    components: {
      Section1,
      Section2,
      Section3,
      Section4,
      Section5,
      Section6,
      SectionContact
    }
  }
</script>

<style scoped>


</style>
