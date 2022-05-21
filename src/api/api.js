const fetchStories = async () => {
    const data = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json/');
    const storiesList = await data.json();
    return storiesList;
};

const fetchStory = async (storyId) => {
    const data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
    const storyData = await data.json();
    return storyData;
};

const api = {
    fetchStories,
    fetchStory,
};

export default api;
