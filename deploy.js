const { execSync } = require('child_process');
const ghpages = require('gh-pages');

try {
    execSync('npm run build', { stdio: 'inherit' });
} catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
}

ghpages.publish('build', {
    branch: 'live',
    repo: 'git@github.com:SamuelOptZand/portfolio.git',
    message: 'Deploy via deploy.js',
    dotfiles: true,
    // cname: '', // place your custom DNS here if using one
}, function (err) {
    if (err) {
        console.error('Deployment failed:', err);
        process.exit(1);
    }
    console.log('Deployed successfully!');
});
