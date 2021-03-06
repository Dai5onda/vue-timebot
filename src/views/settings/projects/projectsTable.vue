<template lang="pug">
  div
    el-dropdown.dropdown(@command="multipleDelete")
      el-button.el-button-filter Batch actions
        i.el-icon-arrow-down.el-icon--right
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item(command="delete_multiple", :disabled="!multipleSelection.length") Delete
    div
      div(style="display: flex")
        div(class="position-create-new-category")
          el-button(@click="handleCreate",
          class="filter-item create-new-category",
          type="primary") Add new project
      el-table(
        ref="multipleTable"
        @selection-change="handleSelectionChange"
        :key="tableKey"
        :data="list(type)"
        border
        fit
        highlight-current-row
        style="width: 100%;")
        el-table-column(type="selection" align="center" width="55")
        el-table-column(:label="$t('table.id')" align="center" width="65")
          template(slot-scope="scope")
            span {{ scope.row.id }}
        el-table-column(label="Name")
          template(slot-scope="scope")
            span {{ scope.row.name }}
        el-table-column(label="Alias")
          template(slot-scope="scope")
            span {{ scope.row.alias }}
        el-table-column(label="Team")
          template(slot-scope="scope")
            span {{setTeam(scope.row.team)}}
        el-table-column(label="Is Active")
          template(slot-scope="scope")
            span(v-if="scope.row['active']") YES
            span(v-else) NO
        el-table-column(:label="$t('table.actions')" width="230" class-name="small-padding fixed-width")
          template(slot-scope="scope")
            el-button(type="info" size="mini" @click="handleView(scope.row)") View
            el-button(type="primary" size="mini" @click="handleUpdate(scope.row)") {{ $t('table.edit') }}
            el-button(
            v-if="scope.row.status !== 'deleted'"
            size="mini"
            type="danger"
            @click="removeEntity(scope.row,'deleted')") {{ $t('table.delete') }}
      pagination(:type="type" v-if="list(type).length")
    modal-edit(ref="edit")
    modal-view(ref="view")
</template>

<script>
import { mapGetters } from 'vuex'
import * as mixin from '@/mixins/index'
import pagination from '@/components/Pagination/index'
import ModalEdit from './components/modals/edit/'
import ModalView from './components/modals/view/'
export default {
  name: 'ProjectsTable',
  components: {
    ModalView,
    ModalEdit,
    pagination
  },
  mixins: [mixin.mixValidationRules, mixin.mixDialog, mixin.mixQuery],
  data() {
    return {
      multipleSelection: [],
      tableKey: 0,
      type: 'projects'
    }
  },
  computed: {
    ...mapGetters({
      list: 'actionEntityTable/list'
    })
  },
  created() {
    this.getList()
      .then(() => {
        this.$store.dispatch('actionEntityTable/fetchList', 'teams')
      })
  },
  methods: {
    setTeam(team) {
      if (team) {
        const findTeam = this.list('teams').find(tm => {
          if (tm.id === team.id) return tm
        })
        if (findTeam) {
          return findTeam.name
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
