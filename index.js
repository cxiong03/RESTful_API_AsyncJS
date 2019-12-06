console.log('Before');
getUser(1, (user) => {

// Get the repositories
getRepositories(user.gitHubUsername, (repos) => {
    console.log('Repos', repos);
 });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback ({ id: id, gitHubUsername: 'Chang' });
    }, 2000);
};

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['Repo1', 'Repo2', 'Repo3']);
    }, 2000);
}