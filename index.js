console.log('Before');
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//             })
//         });
//     });

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and Await approach
async function displayCommits() {
    try {
    const user = await getUser(1);
    const repos =  await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }
}
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        //Kickoff some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve ({ id: id, gitHubUsername: 'Chang' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            // resolve (['Repo1', 'Repo2', 'Repo3']);
            reject(new Error('Could not get the repos.'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve (['commit']);
        },2000);
    });
}