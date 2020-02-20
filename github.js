class GitHub{
    constructor(){
        this.client_id = 'eb444b86c69d5c007cf6';
        this.client_secret = '6efb0f55441cec84d55a7a7c5d60ad073098afe0';
        this.repos_count =5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const reposData = await reposResponse.json();
        
        return {
            profile: profileData,
            repos: reposData
        };
    }
}