/*
    storage 主要放项目中的storage相关操作：存取等
    没什么高深的，大神就不用看了
*/
const storage = {
    /**
     对本地数据进行操作的相关方法，如localStorage,sessionStorage的封装
    */
    setStorage: function(key, value, duration) {
        let data = {
            value: value,
            expiryTime: !duration || isNaN(duration) ? 0 : this.getCurrentTimeStamp() + parseInt(duration)
        };
        localStorage[key] = JSON.stringify(data);
    },
    getStorage: function(key) {
        let data = localStorage[key];
        if (!data || data === "null") {
            return null;
        }
        let now = this.getCurrentTimeStamp();
        let obj;
        try {
            obj = JSON.parse(data);
        } catch (e) {
            return null;
        }
        if (obj.expiryTime === 0 || obj.expiryTime > now) {
            return obj.value;
        }
        return null;
    },
    removeStorage: function(key){
        localStorage.removeItem(key);
    },
    getSession: function(key) {
        let data = sessionStorage[key];
        if (!data || data === "null") {
            return null;
        }
        return JSON.parse(data).value;

    },
    setSession: function(key, value) {
        let data = {
            value: value
        }
        sessionStorage[key] = JSON.stringify(data);
    },
    getCurrentTimeStamp: function() {
        return Date.parse(new Date());
    }
};
export default storage;