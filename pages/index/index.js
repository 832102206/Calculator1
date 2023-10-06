// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    result:'0',
    string:' ',
    operation:'=',
    isclear:false,
    operand: null,
    history:'0',
    items:[
        {
          id:"C",
            value:"C",
            type:"function"     
        },
        {
          id:"÷",
          value:"/",
          type:"operation"
      },
      {
        id:"×",
        value:"*",
        type:"operation"
    },
        {
            id:"←",
            value:"<-",
            type:"function"
        },
        
        {
            id:"7",
            value:"7",
            type:"number"
        },
        {
            id:"8",
            value:"8",
            type:"number"
        },
        {
            id:"9",
            value:"9",
            type:"number"
        },
        {
          id:"-",
          value:"-",
          type:"operation"
      },
        {
            id:"4",
            value:"4",
            type:"number"
        },
        {
            id:"5",
            value:"5",
            type:"number"
        },
        {
            id:"6",
            value:"6",
            type:"number"
        },
        {
          id:"+",
          value:"+",
          type:"operation"
      },
        {
            id:"1",
            value:"1",
            type:"number"
        },
        {
            id:"2",
            value:"2",
            type:"number"
        },
        {
            id:"3",
            value:"3",
            type:"number"
        },
        {
          id:"=",
          value:"=",
          type:"operation"
      },
      {
        id:"%",
        value:"%",
        type:"operation"
    },
        {
            id:"0",
            value:"0",
            type:"number"
        },
        {
            id:".",
            value:".",
            type:"number"
        },
        {
          id:"H",
          value:"H",
          type:"function"
      },
    ]
  },
  // 事件处理函数
  tapnumber:function (e) {
    var value=e.target.dataset.value;
    if(this.data.result === '0' || this.data.isclear){
        this.setData({
          result:value
        });
        this.data.isclear=false
    }else{
      this.setData({
        result:this.data.result + value})
        }
  },

  tapoperation:function (e) {
    var operation=this.data.operation
    this.setData({ operation:e.target.dataset.value,})
    if (this.data.isclear) {
      return;
    }
    this.data.isclear=true
    var value=Number(this.data.result)
    if (this.data.operand==null) {
      this.data.operand = value
      return;
    } if (operation == '+') {
      this.data.operand = this.data.operand + value;
    } else if (operation == '-') {
      this.data.operand = this.data.operand - value;
    }else if (operation == '*') {
      this.data.operand = this.data.operand * value;
    }else if (operation == '/') {
      this.data.operand = this.data.operand / value;
    }else if (operation == '%') {
      this.data.operand = this.data.operand % value;
    }else if (operation== '=') {
      this.setData({history:this.data.result})
    }
    else{
      return;
    }
    this.setData({result:this.data.operand})
  },

  tapfunction:function (e) {
    var func=e.target.dataset.value;
    var H=this.data.result;
  if (func==="C") {
    this.setData({result:'0'})
    this.setData({operand:null})
    this.setData({operation:'='})
  }
  if (func==="H") {
    this.setData({result:this.data.history})
  }else
  this.setData({result:'0'})
  if (func==="<-") {
    this.setData({result: (this.data.result-this.data.result%10)/10})
  }
  },
})
