import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
//封装分类数据业务相关代码 
//获取数据
export function useCategory () {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => { getCategory() })
    // 面板:路由参数变化时,可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) =>
        //存在问题:使用最新的路由参数请求分类数据 
        getCategory(to.params.id)
    )
    return {
        categoryData
    }
}