const searchUser = document.getElementById('searchUser');
// const searchBtn = document.getElementById('searchBtn');
const github = new GitHub();
const ui = new UI();


searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value;
    if(userText !== ''){
        //console.log(userText);
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                
                ui.showAlert('User Not Found','alert alert-danger');
            }else{
              
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                
            }
        });
    }else{
        //clear profile
        ui.clearProfile();
    }
});