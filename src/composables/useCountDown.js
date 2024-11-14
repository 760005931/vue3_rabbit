//封装倒计时逻辑函数
import {computed, onUnmounted, ref} from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
    //1.响应式数据
    const time = ref('')
    let timer = null
    //格式化时间 为 xx分xx秒
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    //2.开启倒计时的函数
    const start = (currentTime) => {
        //开始倒计时逻辑
        //核心逻辑编写:每隔一秒钟就减一
        formatTime.value = currentTime
        timer=setInterval(() => {
            formatTime.value --
        },1000)
    }
    //组件销毁时清除定时器
    onUnmounted(() => {
       time && clearInterval(timer)
    })
    return {formatTime,start}
}