<template>
  <div>
    <AppBanner :list="list"/>
  </div>
</template>

<script>
import {getBanner} from '@/api'
import { ref } from 'vue'
export default {
  setup(props){
    const list=ref([]);
    getBanner().then(res=>{
      console.log(res);
      if(res.msg=='操作成功')
      {
        list.value=res.result;
      }
    }).catch(err=>{
      console.log(err);
    })
    return {list}
  }
}
</script>

<style lang="less" scoped>
*{
  width: 800px;
  
}

</style>