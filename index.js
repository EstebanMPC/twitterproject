var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var elonButton = document.getElementById('elon-btn')
var userDetails = document.getElementById('details')


elonButton.onclick = function() {
    console.log("itworks")
    
    // Add User details to navbar
    var userTitle = document.createElement('div');
    userTitle.classList.add('user');
    userTitle.innerHTML = `
        <div>${user1.displayName}</div>
        <div>${user1.followingCount} tweets</div>
    `;
    document.getElementById('navbar').appendChild(userTitle)

    // Add banner
    var banner = document.getElementById('banner');
    banner.classList.add('elon-banner')

    // Add profile pic
    var profilePic = document.getElementById('photo-container');
    profilePic.classList.add('elon-pic')

    // Add User details to profile

    var userDetails = document.createElement('div')
    userDetails.classList.add('details')
    userDetails.innerHTML = `
        <h1>${user1.displayName}</h1>
        <h5>${user1.userName}</h5>
        <div class="calendar">
            <div class="calendar-svg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
            <h5 class="date-font"> ${user1.joinedDate}</h5>
        </div>
        <div class="follower-info">
            <h4><span class="bold">${user1.followingCount}</span> Following</h4>
            <h4><span class="bold">${user1.followerCount}</span> Followers</h4>
        </div>
    `;
    document.getElementById('profile-info').appendChild(userDetails)
}

// Convert values into string

// Add functionality to selectors

// add tweets

    