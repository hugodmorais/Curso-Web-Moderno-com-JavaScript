const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])//___'pastaA/*.txt, procura todos os arquivos .txt(possivel também passar os arquivos de subpastas(procurar))
        //.pipe(transformacao1())
        //.pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes 1')
})

gulp.task('antes2', () => {
    console.log('Antes 2')
})

gulp.task('fim', () => {
    console.log('Fim')
})