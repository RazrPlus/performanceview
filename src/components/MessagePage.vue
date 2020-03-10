<template>
    <div id="mainDiv">
        <section class="hs-scrollView">
            <div class="hs-palace">
                <a @click="clickType('message')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/message.png" alt="消息">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[dataCode=='message'?'selectType':'']">消息</h2>
                    </div>
                </a>
                <a @click="clickType('friend')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/friends.png" alt="好友">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[dataCode=='friend'?'selectType':'']">好友</h2>
                    </div>
                </a>
                <div class="hs-palace-grid"></div>
                <a  class="hs-palace-grid">
                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                        <div >
                            <div class="hs-palace-grid-icon">
                                <img src="../../public/images/search.png" alt="搜索">
                            </div>
                            <div class="hs-palace-grid-text">
                                <h2 :class="[dataCode=='search'?'selectType':'']">搜索</h2>
                            </div>
                        </div>
                        <div >
                            <div class="hs-palace-grid-icon">
                                <img src="../../public/images/add.png" alt="添加">
                            </div>
                            <div class="hs-palace-grid-text">
                                <h2 :class="[dataCode=='add'?'selectType':'']">添加</h2>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
            <div class="hs-flex hs-flex-five" style="height: 1px">
                <div class="hs-flex-box">

                </div>
            </div>
            <div v-if="dataCode=='message'">
                <div class="tab-panel">
                    <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(0)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/user1.jpg" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2 style="font-size: 16px;">王龙</h2>
                                <h2 style="font-size: 13px;color: #939090">今天不上班了？</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(0)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/user2.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2 style="font-size: 16px;">周少平</h2>
                                <h2 style="font-size: 13px;color: #939090">谁说不上班，你听王龙瞎BB</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(0)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/girl.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2 style="font-size: 16px;">王良春</h2>
                                <h2 style="font-size: 13px;color: #939090">我到公司了，哈哈</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div v-if="dataCode=='friend'">
                <div>
                    <div >
                        <a @click="treeMenuSelect(0)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/girl.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2 style="font-size: 16px;">王良春</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(0)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/user1.jpg" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2 style="font-size: 16px;">王龙</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(0)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/user2.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2 style="font-size: 16px;">周少平</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div v-if="dataCode=='search'">
                <div>
                    <p style="margin: 30%">功能建设中，请稍后。。。</p>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        name: "DataPage",
        data() {
            return {
                dataCode: 'message',
                lastMenuId: 0,
                menuId: 0,
                searchString: '',
                countryType: '',
            }
        },
        methods: {
            clickType(pageNode) {
                this.dataCode = pageNode;
            },
            treeMenuSelect(nodeId) {
                if (null == nodeId || '' == nodeId || 0 == nodeId) {
                    this.menuId = this.lastMenuId;
                } else {
                    if (this.menuId == 0) {
                        this.lastMenuId = this.menuId;
                    }
                    this.menuId = nodeId;
                }

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