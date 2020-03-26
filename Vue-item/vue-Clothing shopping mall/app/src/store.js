import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  json: null,
  data: [],
  json_random: null,
  random_index: 0,
  shoping: [],
  zong: 0
}

var getters = {
  zongs(state) {
    var x = 0
    for (var i = 0; i < state.shoping.length; i++) {
      x += parseFloat(state.shoping[i]['money'].split(',').join('')) * state.shoping[i]['num']
    }
    return state.zong = x.toFixed(2)
  },
  set_data(state) {
    return state.json
  },
  set_random(state) {
    return state.json_random
  },
  set_index(state) {
    return state.random_index
  },
  shoping_data1(state) {
    return state.shoping
  }
}

var mutations = {

  shoping_data2(state, a) {
    state.shoping = a
  },
  getindex(state, a) {
    state.random_index = a
  },
  getjson_random(state, a) {
    state.json_random = a
  },
  get_data(state, a) {
    state.json = a
  },
  push_shoping(state, a) {
    if (state.shoping.length > 0) {
      var x = 0
      console.log(state.shoping)
      for (var i = 0; i < state.shoping.length; i++) {
        if (a['id'] == state.shoping[i]['id']) {
          x++;
          if (x == state.shoping.length) {
            state.shoping[i]['num'] += a['num'];
            break;
          }

        } else {
          state.shoping.push(a)
          break;
        }
      }
    } else {
      state.shoping.push(a)
    }
  },
  jia(state, a) {
    for (var i = 0; i < state.shoping.length; i++) {
      if (state.shoping[i].id == a.id) {
        state.shoping[i]['num']++;
        break;
      }
    }
  },
  jian(state, a) {
    for (var i = 0; i < state.shoping.length; i++) {
      if (state.shoping[i].id == a.id) {
        if (state.shoping[i]['num'] <= 1) {
          state.shoping[i]['num'] = 1
        } else {
          state.shoping[i]['num']--;
        }
        break;
      }
    }
  },
  pop_shoping(state, a) {
    for (var i = 0; i < state.shoping.length; i++) {
      if (state.shoping[i]['id'] == a['id']) {
        state.shoping.splice(i, 1)
        break;
      }
    }
  }

}

var actions = {
  shoping_data3({ commit }, a) {
    commit('shoping_data2', a)
  },
  jias({ commit }, a) {
    commit('jia', a)
  },
  jians({ commit }, a) {
    commit('jian', a)
  },
  pop_shopings({
    commit
  }, a) {
    commit('pop_shoping', a)
  },
  push_shopings({
    commit
  }, a) {
    commit('push_shoping', a)
  },
  random_indexs({
    commit
  }, a) {
    commit('getindex', a)
  },
  random_arr({
    commit
  }, a) {
    commit('getjson_random', a)
  },
  a_arr({
    commit
  }, a) {
    commit('get_data', a)
  },
  data_arrs({
    commit
  }, a) {

    commit('data_arr', a)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
