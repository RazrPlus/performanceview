<template>
    <div id="mainDiv" style="width: 100%;height: 100%">
        <section class="hs-scrollView">
            <div class="hs-palace">
                <a @click="scenarioClick('public')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/earth.png" alt="公有想定">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[scenarioCode=='public'?'selectType':'']">公有想定</h2>
                    </div>
                </a>
                <a @click="scenarioClick('private')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/person.png" alt="私有想定">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[scenarioCode=='private'?'selectType':'']">私有想定</h2>
                    </div>
                </a>
                <a @click="scenarioClick('share')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/share.png" alt="共享想定">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[scenarioCode=='share'?'selectType':'']">共享想定</h2>
                    </div>
                </a>

            </div>
            <div class="hs-flex hs-flex-five" style="height: 55px">
                <div class="hs-flex-box">
                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                        <div>
                            <a @click="treeMenuSelect()"><img src="../../public/images/backup.png"
                                                              style="width: 40px"></a>
                        </div>
                        <div style="width: 2px;border-left: solid #b8aeae 1px"></div>
                        <div style="width: 85%">
                            <el-input style="width: 100%" placeholder="请输入内容" v-model="searchString"
                                      class="input-with-select">
                                <el-select style="width: 110px" v-model="countryType" slot="prepend"
                                           placeholder="想定类别">
                                    <el-option label="大赛想定" value="1"></el-option>
                                    <el-option label="历史战例" value="2"></el-option>
                                    <el-option label="当前热点" value="3"></el-option>
                                    <el-option label="未来战争" value="4"></el-option>
                                    <el-option label="新手练习" value="5"></el-option>
                                    <el-option label="功能展示" value="6"></el-option>
                                </el-select>
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="scenarioCode=='public'">
                <div class="tab-panel">
                    <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(1)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>大赛想定（1）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(2)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>历史战例（5）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(3)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>未来战争（0）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(4)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>新手练习（0）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(5)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>功能展示（13）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(6)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>飞地风雷-晋级赛版</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(7)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>马岛战争</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==1?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(8)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>飞地战云初赛版</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==2?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>巴比伦行动任务</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>阿亚冲突</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==3?'tab-panel-item tab-active':'tab-panel-item']">

                    </div>
                    <div :class="[menuId==4?'tab-panel-item tab-active':'tab-panel-item']">
                    </div>
                    <div :class="[menuId==5?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>对陆打击想定</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>对海饱和打击任务</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>

                    </div>
                    <div :class="[menuId==8&&floatIcon=='table'?'tab-panel-item tab-active':'tab-panel-item']">
                        <div style="margin: 1%">
                            <div><p style="text-align: center;margin: 5%">飞地战云初赛版</p></div>
                            <div>
                                <el-collapse v-model="activeCard">
                                    <el-collapse-item name="0">
                                        <template slot="title">
                                            <P style="font-weight:700;">想定描述</P>
                                        </template>
                                        <div>
                                            作战时间：2014年5月24日 16:00:00<br/>
                                            作战地点：南欧地区<br/>
                                            推 演 方：蓝方<br/>
                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item name="1">
                                        <template slot="title">
                                            <P style="font-weight:700;">作战背景</P>
                                        </template>
                                        <div>蓝方所属的飞地极具争议，由于该地红方族人希望从蓝方获得自治，飞地宣布从蓝方独立。红方自然站在他们的种族兄弟一边，导致了一场血腥的冲突。</div>
                                    </el-collapse-item>
                                    <el-collapse-item name="2">
                                        <template slot="title">
                                            <P style="font-weight:700;">战前态势图</P>
                                        </template>
                                        <div>
                                            <img src="../../public/images/fd.png">
                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item name="3">
                                        <template slot="title">
                                            <P style="font-weight:700;">红方作战序列</P>
                                        </template>
                                        <div>空中力量:
                                            2号机场：6架苏-25M攻击机， 6架米格-29S战斗机
                                            3号机场：6架米格-29战斗机
                                            地面力量：
                                            4部36D6型早期预警雷达
                                            1部P-18预警雷达
                                            1部大鸟雷达
                                            2个SA-3C地空导弹营
                                            1个SA-4地空导弹营
                                            5个SA-10A地空导弹营
                                            1个SA-10B地空导弹营
                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item name="4">
                                        <template slot="title">
                                            <P style="font-weight:700;">蓝方作战序列</P>
                                        </template>
                                        <div>空中力量：
                                            A 空军基地：12架苏-25攻击机
                                            B 空军基地：6架米格-29战斗机
                                            C 空军基地：12架米格-29战斗机
                                            D 空军基地：5架苍鹭无人机
                                            地面力量：
                                            14部雷达
                                            2个SA-2F地空导弹营
                                            9个SA-3C地空导弹营
                                            3个SA-4 地空导弹营
                                            2个SA-5C地空导弹营
                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item name="5">
                                        <template slot="title">
                                            <P style="font-weight:700;">作战任务</P>
                                        </template>
                                        <div>作战目的：
                                            摧毁对方地面设施，消灭对方有生力量；保护己方地面设施，保存己方有生力量
                                            任务时限：2小时
                                            得分标准：
                                            摧毁、消灭对方目标得正分，被摧毁、消灭己方目标得负分
                                            目标分值：
                                            红方
                                            蓝方
                                            红方跑道遭毁伤50% +80
                                            蓝方跑道遭毁伤50% -80
                                            红方雷达被摧毁 +10
                                            蓝方雷达被摧毁 -10
                                            红方SA-10地空导弹营被摧毁 +245
                                            蓝方地空导弹营被摧毁 -75
                                            红方SA-3\-4地空导弹营被摧毁 +75
                                            蓝方战斗机被击落 -20
                                            红方战斗机被击落 +20
                                            蓝方攻击机被击落 -15
                                            红方攻击机被击落 +15
                                            蓝方无人机被击落 -6
                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item name="6">
                                        <template slot="title">
                                            <P style="font-weight:700;">胜败标准</P>
                                        </template>
                                        <div>作战目的：
                                            摧毁对方地面设施，消灭对方有生力量；保护己方地面设施，保存己方有生力量
                                            任务时限：2小时
                                            得分标准：
                                            摧毁、消灭对方目标得正分，被摧毁、消灭己方目标得负分
                                            目标分值：
                                            红方
                                            蓝方
                                            红方跑道遭毁伤50% +80
                                            蓝方跑道遭毁伤50% -80
                                            红方雷达被摧毁 +10
                                            蓝方雷达被摧毁 -10
                                            红方SA-10地空导弹营被摧毁 +245
                                            蓝方地空导弹营被摧毁 -75
                                            红方SA-3\-4地空导弹营被摧毁 +75
                                            蓝方战斗机被击落 -20
                                            红方战斗机被击落 +20
                                            蓝方攻击机被击落 -15
                                            红方攻击机被击落 +15
                                            蓝方无人机被击落 -6
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-if="scenarioCode=='private'">
                <div class="tab-panel">
                    <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(1)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>个人定制想定（1）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(2)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>美国危机假想（5）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==1?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(4)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>飞地战云初赛版</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==2?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>巴比伦行动任务</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>阿亚冲突</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div v-if="scenarioCode=='share'">
                <div class="tab-panel">
                    <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(1)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>同事共享想定（6）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(2)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>战友共享想定（8）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==1?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(4)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>飞地战云初赛版</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==2?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>巴比伦行动任务</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/scenarioIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>阿亚冲突</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                </div>
            </div>

        </section>
        <div id="floatIcon"
             style="width:40px;height:40px;overflow: hidden;z-index: 9999;position: fixed;right: 20px;top: 150px;">
            <a @click="clickType('map')" v-if="floatIcon=='table'">
                <el-avatar style="width:40px;height:40px;" icon="el-icon-map-location"></el-avatar>
            </a>
            <a @click="clickType('table')" v-if="floatIcon=='map'">
                <el-avatar style="width:40px;height:40px;" icon="el-icon-s-grid"></el-avatar>
            </a>
        </div>
        <div style="width: 100%;width: 100%;" v-if="menuId==8&&floatIcon=='map'">
            <EarthPage ></EarthPage>
        </div>
    </div>
</template>

<script>
    import EarthPage from './EarthPage.vue'
    export default {
        components: {
            EarthPage
        },
        name: "ScenePage",
        data() {
            return {
                scenarioCode: 'public',
                lastMenuId: 0,
                menuId: 0,
                floatIcon: 'table',
                searchString: '',
                countryType: '',
                activeCard: '0'
            }
        },
        methods: {
            scenarioClick(pageNode) {
                this.scenarioCode = pageNode;
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

            },clickType(iconType){
                this.floatIcon=iconType;
            }

        }
    }
</script>

<style scoped>
    @import "../assets/css/rangStyle.css";

    .selectType {
        color: Crimson;
        font-weight: 700;
    }

</style>