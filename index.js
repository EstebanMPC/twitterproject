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
   
    // Add User details to navbar
    var userTitle = document.createElement('div');
    userTitle.classList.add('user');
    userTitle.innerHTML = `
        <div class="nav-user-name">${user1.displayName}</div>
        <div class="nav-details">${user1.followingCount} tweets</div>
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
        <h1 class="user-name">${user1.displayName}</h1>
        <h5>${user1.userName}</h5>
        <div class="calendar">
            <div class="calendar-svg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
            <h5 class="date-font"> ${user1.joinedDate}</h5>
        </div>
        <div class="follower-info">
            <h4><span class="bold">${user1.followingCount}</span> Following</h4>
            <h4><span id="followers" class="bold">kFormatter</span> Followers</h4>
        </div>
    `;
    document.getElementById('profile-info').appendChild(userDetails)

    // numbers
    function realNum(xyz) {
        if (Math.abs(xyz) < 999999 && Math.abs(xyz) > 999 ) {
           return Math.sign(xyz)*((Math.abs(xyz)/1000).toFixed(1)) + 'k' 
        } else if (Math.abs(xyz) > 999999) {
            return Math.sign(xyz)*((Math.abs(xyz)/1000000).toFixed(1)) + 'm'
        } else {
            return Math.sign(xyz)*Math.abs(xyz)
        }
    }
    var followerCountDiv = document.createElement('p')
    followerCountDiv.innerText = realNum(user1.followerCount)
    document.getElementById('followers').appendChild(followerCountDiv)
    console.log(realNum())
    
    // Add Tweets

    var tweets = user1.tweets
    tweets.forEach(function(row, i) {
        var singleTweet = document.createElement('div');
        singleTweet.classList.add('tweet')
        singleTweet.innerHTML =`
            <div class="tweet-container">
                <div class="elon-tweet-pic"></div>
                <div>
                    <div class="follower-info">
                        <h5 class="tweet-user-name">${user1.displayName}</h5>
                        <h5 class="tweet-details">${user1.userName}</h5>
                        <h5 class="tweet-details">38m</h5>
                    </div>
                    <div id="tweet-text">
                        <h5 class="tweet-font">${user1.tweets[i].text}</h5>
                    </div>
                    <div class="comment-retweet">
                        <div class="row">
                            <svg class="w-6 h-6" style="width:20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                            <h6>0</h6>
                        </div>
                        <div class="row">
                            <svg class="w-6 h-6" style="width:20px; fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            <h6>0</h6>
                        </div>
                        <div class="row">
                            <svg class="w-6 h-6" style="width:20px; fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            <h6>0</h6>
                        </div>
                        <div class="row">
                            <svg style="width:20px; xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                            </svg>                            
                        </div>
                    </div>
                </div>
                <div>
                    ...
                </div>
            </div>
        `;
        document.getElementById('tweets-container').appendChild(singleTweet);
    })
}




// Convert values into string

// Add functionality to selectors

// add tweets

