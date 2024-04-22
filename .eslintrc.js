// eslint-plugin-vuetify 설치 후 package.json의 eslintConfig 설정 부분을 대신하는 file.
// 기본 규칙 외 더 많은 규칙 적용을 위해 base -> recommended로 변경
// .eslintrc.js
module.exports = {
    extends: [
      'plugin:vue/recommended'
    ],
    plugins: [
      'vuetify'
    ],
    rules: {
      'vuetify/no-deprecated-classes': 'error',
      'vuetify/no-legacy-grid' : 'error'         //vuetify 2.0.0 이하 태그 사용하지 못하도록.
    }
  }
