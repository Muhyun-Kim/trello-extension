const path = require('path');

module.exports = {
  mode: 'development', // 개발용 설정. 배포시에는 'production'으로 변경
  entry: {
    // 번들의 진입점 설정, 예를 들어 백그라운드 스크립트
    background: path.join(__dirname, 'src', 'background.ts'),
    // 추가적인 진입점 설정 가능, 예를 들어 콘텐츠 스크립트
    content: path.join(__dirname, 'src', 'content.ts')
  },
  output: {
    // 번들 파일 출력 설정
    path: path.join(__dirname, 'dist'),
    filename: '[name].js' // [name]은 entry에 설정한 이름(background, content)으로 대체됨
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts 또는 .tsx 확장자를 가진 파일에 대한 설정
        use: 'ts-loader', // ts-loader를 사용하여 TypeScript를 JavaScript로 변환
        exclude: /node_modules/, // node_modules 내의 파일은 제외
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // 번들링 과정에서 해석할 확장자 목록
  },
  // 소스 맵 설정을 통해 디버깅 시 원본 TypeScript 소스를 볼 수 있도록 설정
  devtool: 'cheap-module-source-map'
};
