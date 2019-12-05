<template>
  <d2-container class="page">
    <d2-page-cover>
      <template slot="footer">
        <div class="btn-group">
          <el-popover :width="172" trigger="hover">
            <p class="d2-mt-0 d2-mb-10">D2Projects</p>
          </el-popover>
        </div>
        <d2-help-btn/>
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn'
import D2PageCover from './components/d2-page-cover'
export default {
  components: {
    D2HelpBtn,
    D2PageCover
  },
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
