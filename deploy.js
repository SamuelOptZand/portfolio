const { execSync } = require('child_process');
const ghpages = require('gh-pages');
    try {
        execSync('npm run build', {stdio: 'inherit'});
    }
    catch (err) {
        console.error('Build failed:', err);
        process.exit(1);
    }

    await ghpages.publish('build', {
        branch: 'gh-pages',
        repo: 'https://github.com/SamuelOptZand/portfolio',
        message: 'Deploy via deploy.js',
        dotfiles: true,

    }, function (err) {
        if (err) {
            console.error('Deployment failed:', err);
            process.exit(1);
        }
        console.log('Maybe it works');
    })
