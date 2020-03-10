// axios 配置
import axios from 'axios'

axios.defaults.withCredentials = true;
// 正式环境
axios.defaults.baseURL = 'http://39.107.47.222:86/performance'
// 本地环境
// axios.defaults.baseURL = 'http://127.0.0.1:86/performance'

/**
 *  请求方法
 * @param url
 * @param method
 * @param params
 * @returns {Promise}
 */
export function getData(url, method, params = {}) {
  if (method != 'newWin') {
    return new Promise((resolve, reject) => {
      axios({
        xhrFields: {
          withCredentials: true
        },
        method: method,
        url: method=='POST'?url:url+'?'+params.toString(),
        data: params,
      }).then(response => {
        resolve(response.data);
      })
        .catch(err => {
          reject(err)
        })
    })
  }
  //post跳转新窗口提交
  else{
    var temp_form = document.createElement("form");
    temp_form.action = url;
    temp_form.target = "_blank";//新窗口打开
    temp_form.method = "post";
    temp_form.style.display = "none";
    //添加参数
    for (var item of params.entries()) {
      var opt = document.createElement("textarea");
      opt.name = item[0];
      opt.value = item[1];
      temp_form.appendChild(opt);
    }
    document.body.appendChild(temp_form);
    //提交数据
    temp_form.submit();
  }
}






