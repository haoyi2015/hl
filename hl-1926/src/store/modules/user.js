import types from '@/store/types'

const state = {
    userName: '' || localStorage.getItem("userName"),
    userId: '' || localStorage.getItem("userId"),
    isSignin: false || localStorage.getItem("isSignin"),
    userRole: '' || localStorage.getItem("userRole"),
}

var getters = {
    userName: (state) => state.userName,
    userId: (state) => state.userId,
    isSignin: (state) => state.isSignin,
    userRole: (state) => state.userRole,
    isAdmin(state) {
        return typeof state.userRole != 'undefined' && state.userRole != null && state.userRole.indexOf("ROLE_ADMIN") >= 0
    },
    isUser(state) {
        return typeof state.userRole != 'undefined' && state.userRole != null && state.userRole.indexOf("ROLE_USER") >= 0
    }
}

const actions = {
    setUserInfo(context, userinfo) {
        if (typeof userinfo != 'undefined' && typeof userinfo.userId != 'undefined' &&
            typeof userinfo.userName != 'undefined') {
            context.commit(types.SETUSERINFO, userinfo);
        }
    },
    clearUserInfo(context) {
        context.commit(types.CLEAR_USERINFO);
    }
}

const mutations = {
    [types.SETUSERINFO](state, userinfo) {
        state.userName = userinfo.userName;
        state.userId = userinfo.userId;
        state.isSignin = userinfo.isSignin;
        state.userRole = userinfo.userAuthorities;
        localStorage.setItem("userId", userinfo.userId);
        localStorage.setItem("userName", userinfo.userName);
        localStorage.setItem("isSignin", userinfo.isSignin);
        localStorage.setItem("userRole", userinfo.userAuthorities);
    },
    [types.CLEAR_USERINFO](state) {
        state.userName = '';
        state.userId = '';
        state.isSignin = false;
        state.userRole = '';
        localStorage.setItem("userId", "");
        localStorage.setItem("userName", "");
        localStorage.setItem("isSignin", false);
        localStorage.setItem("userRole", '');
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}