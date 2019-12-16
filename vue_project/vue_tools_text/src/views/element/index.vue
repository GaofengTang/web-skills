<template>
  <div id="elementBox">
    <h2>Element</h2>
    <div class="demoBox">
      <ul class="demoList">
        <li>
          <h3>弹出框demo</h3>
          <div class="alertBox">
            <el-popover placement="top-start" title="源码" width="200" trigger="hover" content='<el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容"><el-button slot="reference">hover 激活</el-button></el-popover>'>
                <el-button slot="reference">hover 激活</el-button>
            </el-popover>
            <el-popover placement="top-start" title="源码" width="200" trigger="click" content='trigger="click"'>
                <el-button slot="reference">点击 激活</el-button>
            </el-popover>
            <el-popover placement="top-start" title="源码" width="200" trigger="focus" content='trigger="focus"'>
                <el-button slot="reference">focus 激活</el-button>
            </el-popover>
            <p></p>
          </div>
        </li>
        <li>
          <h3>单选框demo</h3>
          <div class="radioBox">
            <el-radio-group v-model="radio" size="medium">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
        <p>源码:<br>
          <!--<el-radio-group v-model="radio" size="medium">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>-->
        </p>
        </li>
        <li>
          <!-- <div class="containerBox"> -->
            <el-container style="height: 400px; border: 3px solid #eee">
              <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1']">
                  <el-submenu index='1'>
                    <template slot="title"><i class="el-icon-menu"></i>导航</template>
                    <el-menu-item-group>
                        <template slot="title">HTML/CSS</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">JS</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">Vue</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-aside>
              <el-container style="width: 100%;background-color: rgba(238, 241, 246, 0.4)">
                <el-header style="text-align: right; font-size: 14px; height:40px; background-color: rgb(238, 241, 246)" >
                    <span>UserName</span>
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>充值</el-dropdown-item>
                        <el-dropdown-item>登录/退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <el-main>
                  <el-table :data="date">
                      <el-table-column prop="date" label="日期" width="140"></el-table-column>
                      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                      <el-table-column prop="address" label="地址"></el-table-column>
                  </el-table>
                </el-main>
                <el-footer style="height: 30px; line-height: 30px; background: rgba(238, 241, 246, 0.7); text-align: center">
                  <span>这是底线</span>
                </el-footer>
              </el-container>
            </el-container>
          <!-- </div> -->
        </li>
        <li>
          <input type="button" value="查看日历" @click="dateState = !dateState" style="height: 30px">
          <div class="dateSize">
            <el-container v-show="dateState" style="background: red">
                <el-calendar v-model="date"></el-calendar>
            </el-container>
          </div>
        </li>
        <li>
          <div>
            <template>
              page-component__scroll
              <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
                <div
                style="{
                    height: 100%;
                    width: 100%;
                    background-color: #f2f5f6;
                    box-shadow: 0 0 6px rgba(0,0,0, .12);
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                }"
                >
                UP
                </div>
              </el-backtop>
            </template>
          </div>
        </li>
        <li>
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="newDate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </li>
        <li>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'element',
  data () {
    return {
      radio: '上海',
      date: new Date(),
      dateState: false,
      deleteBtnshow: false,
      newDate: ''
    }
  },
  watch: {
    newDate (value) {
      if (value) {
        var a = []
        for (var i of value) {
          a.push(i)
        }
        console.log(a)
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#elementBox h2{
  display: flex;
  justify-content: center;
  height: 50px;
  /* width: 100%; */
  background: red;
  color: white;
  line-height: 50px;
}
#elementBox .demoBox .demoList > li{
  display: flex;
  flex-direction: column;
  height: 400px;
  border-radius: 4px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(25, 116, 219, 0.6), 0 0 6px rgba(120, 176, 230, 0.12)
}
#elementBox .demoBox .demoList > li h3{
  background: rgb(245, 124, 10);
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 0 10px;
  color: aliceblue;
}
#elementBox .demoBox .demoList{
  display: flex;
  height: 100%;
  flex-direction: column;
}
#elementBox .demoBox .demoList > li .alertBox{
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
#elementBox .demoBox .demoList > li .radioBox{
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
#elementBox .demoBox .demoList .containerBox{
  display: flex;
  height: 400px;
}
#elementBox .demoBox .demoList > li .dateSize{
  width: 100%;
  height: 400px;;
  overflow: auto;
}
.deleteBtn:hover{
  color: blue;
}
</style>
