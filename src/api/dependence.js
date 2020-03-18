import request from '../utils/request';


//http://192.168.15.41:8076/template/framework/selectByFunctionId?param={"functionId":"8"}
export default {
    allFuncation() {
        return request({
            url: 'template/function/selectAll',
            method: 'get',
        });
    },
    allFramework() {
        return request({
            url: 'template/framework/selectAll',
            method: 'get',
            // params: params
        });
    },
    frameworkByFunctionId(param) {
        return request({
            url: "template/framework/selectByFunctionId",
            method: 'get',
            params: this.setData(param)
        })
    }, insert(param) {
        return request({
            url: "template/framework/insert",
            method: 'get',
            params: this.setData(param)
        })
    }, delete(param) {
        return request({
            url: "template/framework/delete",
            method: 'get',
            params: this.setData(param)
        })
    },

    setData(param) {
        return Object.assign({ 'param': JSON.stringify(param) })
    }
}
