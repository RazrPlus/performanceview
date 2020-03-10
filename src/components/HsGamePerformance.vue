<template>
    <div id="mainDiv">
        <section class="hs-flexView">
            <MessagePage v-show="pageCode=='message'"></MessagePage>
            <GamePage v-show="pageCode=='game'"></GamePage>
            <DataPage v-show="pageCode=='data'"></DataPage>
            <ScenarioPage v-show="pageCode=='scenario'"></ScenarioPage>
            <MyInfoPage v-show="pageCode=='myinfo'"></MyInfoPage>
            <footer class="hs-footer hs-footer-fixed">
                <a @click="clickPage('message')"
                   :class="[pageCode=='message'?'hs-tabBar-item hs-tabBar-item-active':'hs-tabBar-item']">
                <span class="hs-tabBar-item-icon">
                    <img src="../../public/images/message.png" style="width: 20px">
                </span>
                    <span class="hs-tabBar-item-text">消息</span>
                </a>
                <a @click="clickPage('game')"
                   :class="[pageCode=='game'?'hs-tabBar-item hs-tabBar-item-active':'hs-tabBar-item']">
                <span class="hs-tabBar-item-icon">
                    <img src="../../public/images/gameIcon.png" style="width: 20px">
                </span>
                    <span class="hs-tabBar-item-text">大赛</span>
                </a>
                <a @click="clickPage('data')"
                   :class="[pageCode=='data'?'hs-tabBar-item hs-tabBar-item-active':'hs-tabBar-item']">
                <span class="hs-tabBar-item-icon">
                    <img src="../../public/images/dataIcon.png" style="width: 20px">
                </span>
                    <span class="hs-tabBar-item-text">数据</span>
                </a>
                <a @click="clickPage('scenario')"
                   :class="[pageCode=='scenario'?'hs-tabBar-item hs-tabBar-item-active':'hs-tabBar-item']">
                <span class="hs-tabBar-item-icon">
                   <img src="../../public/images/scenarioIcon.png" style="width: 20px">
                </span>
                    <span class="hs-tabBar-item-text">想定</span>
                </a>

                <a @click="clickPage('myinfo')"
                   :class="[pageCode=='myinfo'?'hs-tabBar-item hs-tabBar-item-active':'hs-tabBar-item']">
                <span class="hs-tabBar-item-icon">
                    <img src="../../public/images/person.png" style="width: 20px">
                </span>
                    <span class="hs-tabBar-item-text">我的</span>
                </a>
            </footer>
        </section>
    </div>
</template>

<script>
    import MessagePage from './MessagePage.vue'
    import GamePage from './GamePage.vue'
    import DataPage from './DataPage.vue'
    import ScenarioPage from './ScenarioPage.vue'
    import MyInfoPage from './MyInfoPage.vue'
    export default {
        name: "HsGamePerformance",
        components: {
            MessagePage,GamePage, DataPage, ScenarioPage, MyInfoPage
        },
        data() {
            return {
                pageCode:'message',
            }
        },
        methods: {
            clickPage(pageNode){
                this.pageCode=pageNode;
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/mainStyle.css";

</style>