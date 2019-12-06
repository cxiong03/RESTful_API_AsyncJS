// Asynchronous - difficult to read
console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repo, (commits) => {
            // This is what we call CALLBACK HELL or Christmas tree problem
    });
 });
});
console.log('After');

// Synchronous - easier to read
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
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