<template>
  <div>
    <!-- 三级联动组件 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank/>
    <Like/>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import {mapState} from 'vuex';
export default {
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    // 通过vuex发请求，获取数据后存储在仓库中 
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state=> state.home.floorList
    }),
  }
}
</script>

<style>

</style>