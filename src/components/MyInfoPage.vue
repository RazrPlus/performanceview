<template>
    <div id="mainDiv">
        <section class="hs-scrollView">
            <div class="hs-palace">
                <div style="margin: 1% ;display: flex;flex-direction: row;">
                    <div style="display: flex;flex-direction: row">
                        <div>
                            <el-avatar :size="60"  >
                                <img src="../../public/images/user1.jpg"/>
                            </el-avatar>
                        </div>
                        <div style="margin: 10px;">
                            <div style="margin-bottom: 5px"><span>许怀阳</span>
                                 <img src="../../public/images/sj.png" style="width: 40px;margin-left: 10px">（少将）</div>
                            <div>积分：9999（距离中将还差300积分）</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hs-flex hs-flex-five"></div>
            <div class="tab-panel">
                <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                    <a @click="treeMenuSelect(1)" class="hs-flex b-line">
                        <div class="hs-info-img">
                            <img src="../../public/images/room.png" alt="">
                        </div>
                        <div class="hs-flex-box">
                            <h2>历史房间</h2>
                        </div>
                        <div class="hs-arrow"></div>
                    </a>
                    <a @click="treeMenuSelect(2)" class="hs-flex hs-flex b-line">
                        <div class="hs-info-img">
                            <img src="../../public/images/medal.png" alt="">
                        </div>
                        <div class="hs-flex-box">
                            <h2>我的战绩</h2>
                        </div>
                        <div class="hs-arrow"></div>
                    </a>

                    <a @click="treeMenuSelect(3)" class="hs-flex hs-flex b-line">
                        <div class="hs-info-img">
                            <img src="../../public/images/collect.png" alt="">
                        </div>
                        <div class="hs-flex-box">
                            <h2>我的收藏</h2>
                        </div>
                        <div class="hs-arrow"></div>
                    </a>
                    <a @click="treeMenuSelect(4)" class="hs-flex hs-flex b-line">
                        <div class="hs-info-img">
                            <img src="../../public/images/settings.png" alt="">
                        </div>
                        <div class="hs-flex-box">
                            <h2>设置</h2>
                        </div>
                        <div class="hs-arrow"></div>
                    </a>
                </div>
            </div>
            <div>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name: "MyInfoPage",
        data() {
            return {
                menuId:0,
            }
        },
        methods: {
            treeMenuSelect(menuCode){
                this.menuId=menuCode;
            }
        }
    }
</script>

<style scoped>

    .selectType {
        color: Crimson;
        font-weight: 700;
    }
</style>