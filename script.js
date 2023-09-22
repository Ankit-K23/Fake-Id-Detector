function isfakeacc(user) {

    if(user.followers > 1000000){
        return true;
    }

    if(user.postcount === 0){
        return true;
    }

    if(!user.isverified && !user.profilepic){
        return true;
    }

    return false;

}

const users = [
    {
        username: "ankit._.atcc",
        followers: "80",
        postcount: "2",
        isverified: false,
        profilepic: "https://example.com/user1.jpg",
    },
    {
        username: 'rohit',
        followersCount: 50000,
        postsCount: 0,
        isVerified: true,
        profilePicture: 'https://example.com/user2.jpg',
    },
];

function detect() {
    const useridinput = document.getElementById('useridinput').value;
    const user = users.find(u => u.username === useridinput);
    const result = document.getElementById('result'); 

    if(user){
        if(isfakeacc(user)) {
            result.innerHTML = `user ${useridinput} might be fake. `;
        } else {
            result.innerHTML = `user ${useridinput} appears legitimate.`;
        }
    } else {
        result.innerHTML = `user ${useridinput} not found. `
    }

}
